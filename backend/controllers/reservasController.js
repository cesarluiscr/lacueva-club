const { Reserva, Instalacion } = require('../models');
const { validationResult } = require('express-validator');
const { Op } = require('sequelize');

/**
 * POST /api/reservas
 * Crear nueva reserva
 */
exports.crearReserva = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { instalacion_id, fecha, hora_inicio, hora_fin, numero_asistentes } = req.body;

    if (hora_inicio >= hora_fin) {
      return res.status(400).json({
        error: 'La hora de finalizacion debe ser posterior a la hora de inicio'
      });
    }

    const instalacion = await Instalacion.findByPk(instalacion_id);
    if (!instalacion) {
      return res.status(404).json({ error: 'Instalacion no encontrada' });
    }

    const reservaExistente = await Reserva.findOne({
      where: {
        instalacion_id,
        fecha,
        hora_inicio: {
          [Op.lt]: hora_fin
        },
        hora_fin: {
          [Op.gt]: hora_inicio
        },
        estado: { [Op.ne]: 'cancelada' }
      }
    });

    if (reservaExistente) {
      return res.status(400).json({
        error: 'El horario seleccionado no esta disponible'
      });
    }

    if (numero_asistentes > instalacion.capacidad) {
      return res.status(400).json({
        error: `La capacidad maxima es ${instalacion.capacidad} personas`
      });
    }

    const costo = instalacion.tarifa_socio;

    const nuevaReserva = await Reserva.create({
      usuario_id: req.usuarioId,
      instalacion_id,
      fecha,
      hora_inicio,
      hora_fin,
      numero_asistentes,
      costo,
      estado: 'confirmada',
      confirmada_en: new Date()
    });

    res.status(201).json({
      message: 'Reserva creada exitosamente',
      reserva: {
        id: nuevaReserva.id,
        instalacion: instalacion.nombre,
        fecha: nuevaReserva.fecha,
        hora_inicio: nuevaReserva.hora_inicio,
        hora_fin: nuevaReserva.hora_fin,
        costo: nuevaReserva.costo,
        estado: nuevaReserva.estado
      }
    });
  } catch (error) {
    console.error('Error creando reserva:', error);
    res.status(500).json({ error: 'Error al crear reserva' });
  }
};

/**
 * GET /api/reservas
 * Obtener mis reservas
 */
exports.obtenerMisReservas = async (req, res) => {
  try {
    const reservas = await Reserva.findAll({
      where: { usuario_id: req.usuarioId },
      include: [{
        model: Instalacion,
        as: 'instalacion',
        attributes: ['nombre', 'tipo']
      }],
      order: [['fecha', 'DESC']]
    });

    res.json({
      reservas: reservas.map(r => ({
        id: r.id,
        instalacion: r.instalacion.nombre,
        tipo: r.instalacion.tipo,
        fecha: r.fecha,
        hora_inicio: r.hora_inicio,
        hora_fin: r.hora_fin,
        estado: r.estado,
        costo: r.costo,
        numero_asistentes: r.numero_asistentes
      }))
    });
  } catch (error) {
    console.error('Error obteniendo reservas:', error);
    res.status(500).json({ error: 'Error al obtener reservas' });
  }
};

/**
 * GET /api/reservas/disponibilidad/:instalacion_id
 * Obtener horarios disponibles
 */
exports.obtenerDisponibilidad = async (req, res) => {
  try {
    const { instalacion_id } = req.params;
    const { fecha } = req.query;

    if (!fecha) {
      return res.status(400).json({ error: 'Fecha requerida' });
    }

    const instalacion = await Instalacion.findByPk(instalacion_id);
    if (!instalacion) {
      return res.status(404).json({ error: 'Instalacion no encontrada' });
    }

    const reservasDelDia = await Reserva.findAll({
      where: {
        instalacion_id,
        fecha,
        estado: { [Op.ne]: 'cancelada' }
      }
    });

    const horariosOcupados = reservasDelDia.map(r => ({
      inicio: r.hora_inicio,
      fin: r.hora_fin
    }));

    const horariosDisponibles = generarHorarios(
      instalacion.horario_apertura,
      instalacion.horario_cierre,
      horariosOcupados
    );

    res.json({
      instalacion_id,
      fecha,
      horarios_disponibles: horariosDisponibles
    });
  } catch (error) {
    console.error('Error obteniendo disponibilidad:', error);
    res.status(500).json({ error: 'Error al obtener disponibilidad' });
  }
};

/**
 * PUT /api/reservas/:id
 * Actualizar reserva
 */
exports.actualizarReserva = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const { fecha, hora_inicio, hora_fin, numero_asistentes } = req.body;

    const reserva = await Reserva.findOne({
      where: { id, usuario_id: req.usuarioId }
    });

    if (!reserva) {
      return res.status(404).json({ error: 'Reserva no encontrada' });
    }

    if (reserva.estado !== 'confirmada') {
      return res.status(400).json({
        error: 'Solo puedes actualizar reservas confirmadas'
      });
    }

    const nuevaFecha = fecha || reserva.fecha;
    const nuevaHoraInicio = hora_inicio || reserva.hora_inicio;
    const nuevaHoraFin = hora_fin || reserva.hora_fin;
    const nuevosAsistentes = numero_asistentes || reserva.numero_asistentes;

    if (nuevaHoraInicio >= nuevaHoraFin) {
      return res.status(400).json({
        error: 'La hora de finalizacion debe ser posterior a la hora de inicio'
      });
    }

    const instalacion = await Instalacion.findByPk(reserva.instalacion_id);
    if (!instalacion) {
      return res.status(404).json({ error: 'Instalacion no encontrada' });
    }

    if (nuevosAsistentes > instalacion.capacidad) {
      return res.status(400).json({
        error: `La capacidad maxima es ${instalacion.capacidad} personas`
      });
    }

    const reservaExistente = await Reserva.findOne({
      where: {
        id: { [Op.ne]: reserva.id },
        instalacion_id: reserva.instalacion_id,
        fecha: nuevaFecha,
        hora_inicio: {
          [Op.lt]: nuevaHoraFin
        },
        hora_fin: {
          [Op.gt]: nuevaHoraInicio
        },
        estado: { [Op.ne]: 'cancelada' }
      }
    });

    if (reservaExistente) {
      return res.status(400).json({
        error: 'El horario seleccionado no esta disponible'
      });
    }

    await reserva.update({
      fecha: nuevaFecha,
      hora_inicio: nuevaHoraInicio,
      hora_fin: nuevaHoraFin,
      numero_asistentes: nuevosAsistentes
    });

    res.json({
      message: 'Reserva actualizada exitosamente',
      reserva: {
        id: reserva.id,
        fecha: reserva.fecha,
        hora_inicio: reserva.hora_inicio,
        hora_fin: reserva.hora_fin,
        numero_asistentes: reserva.numero_asistentes,
        estado: reserva.estado
      }
    });
  } catch (error) {
    console.error('Error actualizando reserva:', error);
    res.status(500).json({ error: 'Error al actualizar reserva' });
  }
};

/**
 * DELETE /api/reservas/:id
 * Cancelar reserva
 */
exports.cancelarReserva = async (req, res) => {
  try {
    const { id } = req.params;
    const { razon } = req.body;

    const reserva = await Reserva.findOne({
      where: { id, usuario_id: req.usuarioId }
    });

    if (!reserva) {
      return res.status(404).json({ error: 'Reserva no encontrada' });
    }

    if (reserva.estado === 'cancelada') {
      return res.status(400).json({
        error: 'La reserva ya fue cancelada'
      });
    }

    await reserva.update({
      estado: 'cancelada',
      cancelada_en: new Date(),
      razon_cancelacion: razon
    });

    res.json({
      message: 'Reserva cancelada exitosamente'
    });
  } catch (error) {
    console.error('Error cancelando reserva:', error);
    res.status(500).json({ error: 'Error al cancelar reserva' });
  }
};

function generarHorarios(apertura, cierre, ocupados) {
  const horarios = [];
  const [aH, aM] = apertura.split(':').map(Number);
  const [cH] = cierre.split(':').map(Number);

  let hora = aH;
  while (hora < cH) {
    const inicio = `${String(hora).padStart(2, '0')}:${String(aM).padStart(2, '0')}`;
    const fin = `${String(hora + 1).padStart(2, '0')}:${String(aM).padStart(2, '0')}`;

    const estaOcupado = ocupados.some(o => inicio < o.fin && fin > o.inicio);

    horarios.push({
      hora: inicio,
      disponible: !estaOcupado
    });

    hora++;
  }

  return horarios;
}

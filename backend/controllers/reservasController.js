const { Reserva, Instalacion, User, SocioMembresia } = require('../models');
const { Op } = require('sequelize');

/**
 * POST /api/reservas
 * Crear nueva reserva
 */
exports.crearReserva = async (req, res) => {
  try {
    const { instalacion_id, fecha, hora_inicio, hora_fin, numero_asistentes } = req.body;

    // Validar instalación existe
    const instalacion = await Instalacion.findByPk(instalacion_id);
    if (!instalacion) {
      return res.status(404).json({ error: 'Instalación no encontrada' });
    }

    // Verificar disponibilidad
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
        error: 'El horario seleccionado no está disponible'
      });
    }

    // Validar capacidad
    if (numero_asistentes > instalacion.capacidad) {
      return res.status(400).json({
        error: `La capacidad máxima es ${instalacion.capacidad} personas`
      });
    }

    // Verificar si es socio activo
    const membresia = await SocioMembresia.findOne({
      where: {
        usuario_id: req.usuarioId,
        estado: 'activa',
        fecha_vencimiento: { [Op.gte]: new Date() }
      }
    });

    const es_socio = !!membresia;
    const costo = es_socio ? instalacion.tarifa_socio : instalacion.tarifa_visitante;

    // Crear reserva
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

    // Validar instalación
    const instalacion = await Instalacion.findByPk(instalacion_id);
    if (!instalacion) {
      return res.status(404).json({ error: 'Instalación no encontrada' });
    }

    // Obtener reservas del día
    const reservasDelDia = await Reserva.findAll({
      where: {
        instalacion_id,
        fecha,
        estado: { [Op.ne]: 'cancelada' }
      }
    });

    // Generar horarios disponibles
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
    const { id } = req.params;
    const { fecha, hora_inicio, hora_fin } = req.body;

    const reserva = await Reserva.findOne({
      where: { id, usuario_id: req.usuarioId }
    });

    if (!reserva) {
      return res.status(404).json({ error: 'Reserva no encontrada' });
    }

    if (reserva.estado !== 'confirmada') {
      return res.status(400).json({
        error: 'No puedes actualizar una reserva confirmada'
      });
    }

    await reserva.update({ fecha, hora_inicio, hora_fin });

    res.json({
      message: 'Reserva actualizada exitosamente'
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

    // Cancelar
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

/**
 * Función auxiliar para generar horarios disponibles
 */
function generarHorarios(apertura, cierre, ocupados) {
  const horarios = [];
  const [aH, aM] = apertura.split(':').map(Number);
  const [cH, cM] = cierre.split(':').map(Number);

  let hora = aH;
  while (hora < cH) {
    const inicio = `${String(hora).padStart(2, '0')}:${String(aM).padStart(2, '0')}`;
    const fin = `${String(hora + 1).padStart(2, '0')}:${String(aM).padStart(2, '0')}`;

    const estaOcupado = ocupados.some(o =>
      inicio < o.fin && fin > o.inicio
    );

    horarios.push({
      hora: inicio,
      disponible: !estaOcupado
    });

    hora++;
  }

  return horarios;
}

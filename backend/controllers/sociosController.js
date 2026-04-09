const { User, SocioMembresia, Membresia, Reserva, Pago } = require('../models');
const { Op } = require('sequelize');

/**
 * GET /api/socios/perfil
 * Obtener perfil del socio autenticado
 */
exports.obtenerPerfil = async (req, res) => {
  try {
    const usuario = await User.findByPk(req.usuarioId, {
      attributes: { exclude: ['password'] },
      include: [{
        model: SocioMembresia,
        as: 'membresias',
        include: [{
          model: Membresia,
          as: 'membresia',
          attributes: ['id', 'nombre', 'limite_invitados']
        }]
      }]
    });

    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Obtener membresía activa
    const membresia_activa = usuario.membresias.find(m => m.estado === 'activa');

    res.json({
      usuario: {
        id: usuario.id,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        email: usuario.email,
        telefono: usuario.telefono,
        fecha_afiliacion: usuario.fecha_afiliacion,
        estado: usuario.estado
      },
      membresia_activa: membresia_activa ? {
        nombre: membresia_activa.membresia.nombre,
        fecha_inicio: membresia_activa.fecha_inicio,
        fecha_vencimiento: membresia_activa.fecha_vencimiento,
        estado: membresia_activa.estado,
        invitados_disponibles: membresia_activa.membresia.limite_invitados - membresia_activa.invitados_usados
      } : null
    });
  } catch (error) {
    console.error('Error obteniendo perfil:', error);
    res.status(500).json({ error: 'Error al obtener perfil' });
  }
};

/**
 * PUT /api/socios/perfil
 * Actualizar perfil del socio
 */
exports.actualizarPerfil = async (req, res) => {
  try {
    const { nombre, apellido, telefono } = req.body;

    const usuario = await User.findByPk(req.usuarioId);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    await usuario.update({
      nombre: nombre || usuario.nombre,
      apellido: apellido || usuario.apellido,
      telefono: telefono || usuario.telefono
    });

    res.json({
      message: 'Perfil actualizado exitosamente',
      usuario: {
        id: usuario.id,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        email: usuario.email,
        telefono: usuario.telefono
      }
    });
  } catch (error) {
    console.error('Error actualizando perfil:', error);
    res.status(500).json({ error: 'Error al actualizar perfil' });
  }
};

/**
 * GET /api/socios/membresias
 * Obtener historial de membresías
 */
exports.obtenerMembresias = async (req, res) => {
  try {
    const membresias = await SocioMembresia.findAll({
      where: { usuario_id: req.usuarioId },
      include: [{
        model: Membresia,
        as: 'membresia',
        attributes: ['nombre', 'precio_mensual', 'precio_anual']
      }],
      order: [['fecha_inicio', 'DESC']]
    });

    res.json({
      membresias: membresias.map(m => ({
        id: m.id,
        nombre: m.membresia.nombre,
        fecha_inicio: m.fecha_inicio,
        fecha_vencimiento: m.fecha_vencimiento,
        estado: m.estado,
        precio_pagado: m.precio_pagado,
        renovacion_automatica: m.renovacion_automatica
      }))
    });
  } catch (error) {
    console.error('Error obteniendo membresías:', error);
    res.status(500).json({ error: 'Error al obtener membresías' });
  }
};

/**
 * GET /api/socios/reservas
 * Obtener mis reservas
 */
exports.obtenerReservas = async (req, res) => {
  try {
    const { estado } = req.query;
    const where = { usuario_id: req.usuarioId };

    if (estado) {
      where.estado = estado;
    }

    const reservas = await Reserva.findAll({
      where,
      include: [{
        model: require('../models').Instalacion,
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
        confirmada_en: r.confirmada_en
      }))
    });
  } catch (error) {
    console.error('Error obteniendo reservas:', error);
    res.status(500).json({ error: 'Error al obtener reservas' });
  }
};

/**
 * GET /api/socios/estado-cuenta
 * Obtener estado de cuenta
 */
exports.obtenerEstadoCuenta = async (req, res) => {
  try {
    // Obtener últimos pagos
    const pagos = await Pago.findAll({
      where: { usuario_id: req.usuarioId },
      order: [['created_at', 'DESC']],
      limit: 10
    });

    // Calcular saldo
    const totalPagado = pagos
      .filter(p => p.estado === 'completado')
      .reduce((sum, p) => sum + parseFloat(p.monto), 0);

    const totalPendiente = pagos
      .filter(p => p.estado === 'pendiente')
      .reduce((sum, p) => sum + parseFloat(p.monto), 0);

    res.json({
      estado_general: totalPendiente > 0 ? 'con_deuda' : 'al_corriente',
      saldo_pendiente: totalPendiente,
      total_pagado: totalPagado,
      transacciones_recientes: pagos.map(p => ({
        fecha: p.created_at,
        concepto: p.concepto,
        monto: p.monto,
        estado: p.estado,
        tipo: p.monto > 0 ? 'cargo' : 'abono'
      }))
    });
  } catch (error) {
    console.error('Error obteniendo estado cuenta:', error);
    res.status(500).json({ error: 'Error al obtener estado de cuenta' });
  }
};

/**
 * GET /api/socios/documentos
 * Descargar documentos
 */
exports.obtenerDocumentos = (req, res) => {
  const documentos = [
    {
      id: 1,
      nombre: 'Estatutos del Club',
      fecha_publicacion: '2023-06-01',
      tipo: 'PDF',
      url: '/documents/estatutos.pdf'
    },
    {
      id: 2,
      nombre: 'Reglamento Interno',
      fecha_publicacion: '2024-01-15',
      tipo: 'PDF',
      url: '/documents/reglamento.pdf'
    },
    {
      id: 3,
      nombre: 'Política de Privacidad',
      fecha_publicacion: '2024-02-01',
      tipo: 'PDF',
      url: '/documents/privacidad.pdf'
    }
  ];

  res.json({ documentos });
};

/**
 * PUT /api/socios/contraseña
 * Cambiar contraseña
 */
exports.cambiarContrasena = async (req, res) => {
  try {
    const { contrasena_actual, contrasena_nueva } = req.body;

    const usuario = await User.findByPk(req.usuarioId);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Verificar contraseña actual
    const passwordValida = await usuario.comparePassword(contrasena_actual);
    if (!passwordValida) {
      return res.status(401).json({
        error: 'La contraseña actual es incorrecta'
      });
    }

    // Actualizar contraseña
    await usuario.update({ password: contrasena_nueva });

    res.json({
      message: 'Contraseña actualizada exitosamente'
    });
  } catch (error) {
    console.error('Error cambiando contraseña:', error);
    res.status(500).json({ error: 'Error al cambiar contraseña' });
  }
};

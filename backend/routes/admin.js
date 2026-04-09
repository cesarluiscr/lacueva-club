const express = require('express');
const router = express.Router();

// TODO: Implementar middleware de autenticación admin

/**
 * GET /api/admin/dashboard
 * Obtener estadísticas del dashboard
 */
router.get('/dashboard', (req, res) => {
  const estadisticas = {
    socios_activos: 150,
    socios_nuevos_mes: 12,
    reservas_mes: 450,
    ingresos_mes: 8500,
    ocupacion_instalaciones: {
      piscina: '75%',
      canchas_futbol: '90%',
      canchas_tenis: '65%',
      gimnasio: '80%'
    },
    pagos_pendientes: 5,
    deuda_total: 2500
  };

  res.json({
    success: true,
    data: estadisticas
  });
});

/**
 * GET /api/admin/socios
 * Listar todos los socios
 */
router.get('/socios', (req, res) => {
  const socios = [
    {
      id: 1,
      nombre: 'Juan Pérez',
      email: 'juan@example.com',
      telefono: '2433-7171',
      membresia: 'Socio Activo',
      estado: 'activo',
      fecha_afiliacion: '2023-01-15'
    },
    {
      id: 2,
      nombre: 'María García',
      email: 'maria@example.com',
      telefono: '7243-4203',
      membresia: 'Socio Básico',
      estado: 'activo',
      fecha_afiliacion: '2024-06-20'
    }
  ];

  res.json({
    success: true,
    data: socios,
    total: socios.length
  });
});

/**
 * GET /api/admin/reservas
 * Listar todas las reservas
 */
router.get('/reservas', (req, res) => {
  const reservas = [
    {
      id: 1,
      socio: 'Juan Pérez',
      instalacion: 'Cancha de Fútbol',
      fecha: '2026-04-15',
      hora: '18:00 - 19:00',
      estado: 'confirmada'
    },
    {
      id: 2,
      socio: 'María García',
      instalacion: 'Piscina',
      fecha: '2026-04-16',
      hora: '10:00 - 11:00',
      estado: 'completada'
    }
  ];

  res.json({
    success: true,
    data: reservas
  });
});

/**
 * POST /api/admin/bloqueo-calendario
 * Bloquear horarios por mantenimiento
 */
router.post('/bloqueo-calendario', (req, res) => {
  const { instalacion_id, fecha, motivo } = req.body;

  // TODO: Validar datos
  // TODO: Guardar en BD

  res.json({
    success: true,
    message: 'Horario bloqueado exitosamente',
    bloqueo_id: 'BLQ-' + Date.now()
  });
});

/**
 * GET /api/admin/reportes/ingresos
 * Reporte de ingresos
 */
router.get('/reportes/ingresos', (req, res) => {
  const { mes, anio } = req.query;

  const reporte = {
    periodo: `${mes}/${anio}`,
    ingresos_membresias: 5500,
    ingresos_reservas: 2800,
    ingresos_otros: 200,
    total: 8500,
    comisiones_pagadas: 425,
    neto: 8075
  };

  res.json({
    success: true,
    data: reporte
  });
});

/**
 * POST /api/admin/membresias
 * Crear nueva membresía
 */
router.post('/membresias', (req, res) => {
  const { nombre, precio_anual, descripcion, beneficios } = req.body;

  // TODO: Validar datos
  // TODO: Guardar en BD

  res.status(201).json({
    success: true,
    message: 'Membresía creada exitosamente',
    membresia_id: 'MEM-' + Date.now()
  });
});

/**
 * PUT /api/admin/membresias/:id
 * Actualizar membresía
 */
router.put('/membresias/:id', (req, res) => {
  const { id } = req.params;

  // TODO: Validar datos
  // TODO: Actualizar en BD

  res.json({
    success: true,
    message: 'Membresía actualizada exitosamente'
  });
});

/**
 * DELETE /api/admin/membresias/:id
 * Eliminar membresía
 */
router.delete('/membresias/:id', (req, res) => {
  const { id } = req.params;

  // TODO: Validar que no tenga socios
  // TODO: Eliminar de BD

  res.json({
    success: true,
    message: 'Membresía eliminada exitosamente'
  });
});

/**
 * GET /api/admin/cobros-pendientes
 * Obtener cobros pendientes
 */
router.get('/cobros-pendientes', (req, res) => {
  const cobros = [
    {
      id: 1,
      socio: 'Carlos López',
      concepto: 'Membresía Marzo 2026',
      monto: 120,
      fecha_vencimiento: '2026-03-31',
      dias_vencido: 9
    },
    {
      id: 2,
      socio: 'Ana Rodríguez',
      concepto: 'Membresía Familia Feb-Marzo',
      monto: 400,
      fecha_vencimiento: '2026-03-15',
      dias_vencido: 25
    }
  ];

  res.json({
    success: true,
    data: cobros,
    total_deuda: cobros.reduce((sum, c) => sum + c.monto, 0)
  });
});

module.exports = router;

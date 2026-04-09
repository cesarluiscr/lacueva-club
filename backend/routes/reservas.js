const express = require('express');
const router = express.Router();

/**
 * GET /api/reservas
 * Obtener reservas del usuario autenticado
 */
router.get('/', (req, res) => {
  // TODO: Implementar autenticación
  const reservas = [
    {
      id: 1,
      instalacion: 'Cancha de Fútbol',
      fecha: '2026-04-15',
      hora_inicio: '18:00',
      hora_fin: '19:00',
      estado: 'confirmada',
      costo: 25.00
    },
    {
      id: 2,
      instalacion: 'Cancha de Tenis',
      fecha: '2026-04-18',
      hora_inicio: '16:00',
      hora_fin: '17:00',
      estado: 'confirmada',
      costo: 20.00
    }
  ];

  res.json({
    success: true,
    data: reservas
  });
});

/**
 * POST /api/reservas
 * Crear nueva reserva
 */
router.post('/', (req, res) => {
  try {
    const { instalacion_id, fecha, hora_inicio, hora_fin } = req.body;

    // TODO: Validar disponibilidad
    // TODO: Verificar si el usuario es socio o visitante
    // TODO: Guardar en BD

    const nuevaReserva = {
      id: Date.now(),
      instalacion_id,
      fecha,
      hora_inicio,
      hora_fin,
      estado: 'confirmada',
      fecha_creacion: new Date()
    };

    res.status(201).json({
      success: true,
      message: 'Reserva creada exitosamente',
      data: nuevaReserva
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error al crear reserva'
    });
  }
});

/**
 * GET /api/reservas/disponibilidad/:instalacion_id
 * Obtener horarios disponibles
 */
router.get('/disponibilidad/:instalacion_id', (req, res) => {
  const { instalacion_id } = req.params;
  const { fecha } = req.query;

  const horariosDisponibles = [
    { hora: '08:00', disponible: true },
    { hora: '09:00', disponible: true },
    { hora: '10:00', disponible: false },
    { hora: '11:00', disponible: true },
    { hora: '14:00', disponible: true },
    { hora: '15:00', disponible: true },
    { hora: '16:00', disponible: false },
    { hora: '17:00', disponible: true },
    { hora: '18:00', disponible: true }
  ];

  res.json({
    success: true,
    instalacion_id,
    fecha,
    horarios: horariosDisponibles
  });
});

/**
 * PUT /api/reservas/:id
 * Actualizar una reserva
 */
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { fecha, hora_inicio, hora_fin } = req.body;

  // TODO: Implementar actualización en BD

  res.json({
    success: true,
    message: 'Reserva actualizada exitosamente'
  });
});

/**
 * DELETE /api/reservas/:id
 * Cancelar una reserva
 */
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  // TODO: Implementar cancelación en BD
  // TODO: Procesar reembolso si es necesario

  res.json({
    success: true,
    message: 'Reserva cancelada exitosamente'
  });
});

module.exports = router;

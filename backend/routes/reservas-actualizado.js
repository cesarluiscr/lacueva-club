const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { verificarToken } = require('../middleware/auth');
const reservasController = require('../controllers/reservasController');

/**
 * GET /api/reservas
 * Obtener mis reservas
 */
router.get('/', verificarToken, reservasController.obtenerMisReservas);

/**
 * POST /api/reservas
 * Crear nueva reserva
 */
router.post('/', verificarToken, [
  body('instalacion_id').notEmpty().withMessage('Instalacion requerida'),
  body('fecha').isISO8601().withMessage('Fecha invalida'),
  body('hora_inicio').matches(/^[0-2][0-9]:[0-5][0-9]$/).withMessage('Hora invalida'),
  body('hora_fin').matches(/^[0-2][0-9]:[0-5][0-9]$/).withMessage('Hora invalida'),
  body('numero_asistentes').isInt({ min: 1 }).withMessage('Numero de asistentes invalido')
], reservasController.crearReserva);

/**
 * GET /api/reservas/disponibilidad/:instalacion_id
 * Obtener horarios disponibles
 */
router.get('/disponibilidad/:instalacion_id', reservasController.obtenerDisponibilidad);

/**
 * PUT /api/reservas/:id
 * Actualizar reserva
 */
router.put('/:id', verificarToken, [
  body('fecha').optional().isISO8601().withMessage('Fecha invalida'),
  body('hora_inicio').optional().matches(/^[0-2][0-9]:[0-5][0-9]$/).withMessage('Hora invalida'),
  body('hora_fin').optional().matches(/^[0-2][0-9]:[0-5][0-9]$/).withMessage('Hora invalida'),
  body('numero_asistentes').optional().isInt({ min: 1 }).withMessage('Numero de asistentes invalido')
], reservasController.actualizarReserva);

/**
 * DELETE /api/reservas/:id
 * Cancelar reserva
 */
router.delete('/:id', verificarToken, reservasController.cancelarReserva);

module.exports = router;

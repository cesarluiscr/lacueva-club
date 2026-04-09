const express = require('express');
const router = express.Router();
const { verificarToken } = require('../middleware/auth');
const sociosController = require('../controllers/sociosController');

/**
 * GET /api/socios/perfil
 * Obtener perfil del socio
 */
router.get('/perfil', verificarToken, sociosController.obtenerPerfil);

/**
 * PUT /api/socios/perfil
 * Actualizar perfil
 */
router.put('/perfil', verificarToken, sociosController.actualizarPerfil);

/**
 * GET /api/socios/membresias
 * Obtener historial de membresías
 */
router.get('/membresias', verificarToken, sociosController.obtenerMembresias);

/**
 * GET /api/socios/reservas
 * Obtener mis reservas
 */
router.get('/reservas', verificarToken, sociosController.obtenerReservas);

/**
 * GET /api/socios/estado-cuenta
 * Obtener estado de cuenta
 */
router.get('/estado-cuenta', verificarToken, sociosController.obtenerEstadoCuenta);

/**
 * GET /api/socios/documentos
 * Descargar documentos
 */
router.get('/documentos', verificarToken, sociosController.obtenerDocumentos);

/**
 * PUT /api/socios/contraseña
 * Cambiar contraseña
 */
router.put('/contrasena', verificarToken, sociosController.cambiarContrasena);

module.exports = router;

const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const { verificarToken } = require('../middleware/auth');
const authController = require('../controllers/authController');

/**
 * POST /api/auth/registro
 * Registrar nuevo usuario
 */
router.post('/registro', [
  body('email').isEmail().normalizeEmail().withMessage('Email inválido'),
  body('password').isLength({ min: 8 }).withMessage('Mínimo 8 caracteres'),
  body('nombre').notEmpty().trim().withMessage('Nombre requerido'),
  body('apellido').notEmpty().trim().withMessage('Apellido requerido'),
  body('telefono').notEmpty().trim().withMessage('Teléfono requerido')
], authController.registro);

/**
 * POST /api/auth/login
 * Iniciar sesión
 */
router.post('/login', [
  body('email').isEmail().normalizeEmail().withMessage('Email inválido'),
  body('password').notEmpty().withMessage('Contraseña requerida')
], authController.login);

/**
 * POST /api/auth/logout
 * Cerrar sesión
 */
router.post('/logout', verificarToken, authController.logout);

/**
 * GET /api/auth/me
 * Obtener perfil actual
 */
router.get('/me', verificarToken, authController.obtenerMe);

/**
 * POST /api/auth/recuperar-contraseña
 * Solicitar recuperación de contraseña
 */
router.post('/recuperar-contrasena', [
  body('email').isEmail().normalizeEmail().withMessage('Email inválido')
], authController.recuperarContrasena);

module.exports = router;

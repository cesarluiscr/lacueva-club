const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// TODO: Importar modelos de BD cuando esté lista
// const { User } = require('../models');

/**
 * POST /api/auth/registro
 * Registrar nuevo usuario (socio)
 */
router.post('/registro', [
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 8 }).withMessage('Mínimo 8 caracteres'),
  body('nombre').notEmpty().trim(),
  body('apellido').notEmpty().trim(),
  body('telefono').notEmpty().trim()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password, nombre, apellido, telefono } = req.body;

    // TODO: Verificar si usuario existe
    // const userExists = await User.findOne({ where: { email } });
    // if (userExists) {
    //   return res.status(400).json({ error: 'El email ya está registrado' });
    // }

    // TODO: Hashear contraseña
    // const hashedPassword = await bcrypt.hash(password, 10);

    // TODO: Crear usuario en BD
    // const newUser = await User.create({
    //   email,
    //   password: hashedPassword,
    //   nombre,
    //   apellido,
    //   telefono,
    //   rol: 'socio'
    // });

    res.status(201).json({
      message: 'Usuario registrado exitosamente',
      user: {
        id: 1,
        email,
        nombre,
        rol: 'socio'
      }
    });
  } catch (error) {
    console.error('Error en registro:', error);
    res.status(500).json({ error: 'Error al registrar usuario' });
  }
});

/**
 * POST /api/auth/login
 * Iniciar sesión
 */
router.post('/login', [
  body('email').isEmail().normalizeEmail(),
  body('password').notEmpty()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    // TODO: Buscar usuario en BD
    // const user = await User.findOne({ where: { email } });
    // if (!user) {
    //   return res.status(401).json({ error: 'Credenciales inválidas' });
    // }

    // TODO: Verificar contraseña
    // const validPassword = await bcrypt.compare(password, user.password);
    // if (!validPassword) {
    //   return res.status(401).json({ error: 'Credenciales inválidas' });
    // }

    // TODO: Generar JWT
    // const token = jwt.sign(
    //   { userId: user.id, email: user.email, rol: user.rol },
    //   process.env.JWT_SECRET,
    //   { expiresIn: process.env.JWT_EXPIRATION }
    // );

    res.json({
      message: 'Iniciaste sesión exitosamente',
      token: 'JWT_TOKEN_AQUI',
      user: {
        id: 1,
        email,
        nombre: 'Usuario',
        rol: 'socio'
      }
    });
  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
});

/**
 * POST /api/auth/logout
 * Cerrar sesión
 */
router.post('/logout', (req, res) => {
  // El logout es manejado del lado del cliente eliminando el token
  res.json({ message: 'Sesión cerrada correctamente' });
});

/**
 * GET /api/auth/me
 * Obtener datos del usuario autenticado
 */
router.get('/me', (req, res) => {
  // TODO: Implementar middleware de autenticación
  res.json({
    user: {
      id: 1,
      email: 'user@example.com',
      nombre: 'Usuario',
      rol: 'socio'
    }
  });
});

module.exports = router;

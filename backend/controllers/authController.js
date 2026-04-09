const { User } = require('../models');
const { generarToken } = require('../middleware/auth');
const { validationResult } = require('express-validator');

/**
 * POST /api/auth/registro
 * Registrar nuevo usuario
 */
exports.registro = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password, nombre, apellido, telefono } = req.body;

    // Verificar si usuario existe
    const usuarioExistente = await User.findOne({ where: { email } });
    if (usuarioExistente) {
      return res.status(400).json({
        error: 'El email ya está registrado'
      });
    }

    // Crear usuario
    const nuevoUsuario = await User.create({
      email,
      password,
      nombre,
      apellido,
      telefono,
      rol: 'socio'
    });

    // Generar token
    const token = generarToken(nuevoUsuario);

    res.status(201).json({
      message: 'Usuario registrado exitosamente',
      token,
      usuario: {
        id: nuevoUsuario.id,
        email: nuevoUsuario.email,
        nombre: nuevoUsuario.nombre,
        apellido: nuevoUsuario.apellido,
        rol: nuevoUsuario.rol
      }
    });
  } catch (error) {
    console.error('Error en registro:', error);
    res.status(500).json({ error: 'Error al registrar usuario' });
  }
};

/**
 * POST /api/auth/login
 * Iniciar sesión
 */
exports.login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    // Buscar usuario
    const usuario = await User.findOne({ where: { email } });
    if (!usuario) {
      return res.status(401).json({
        error: 'Credenciales inválidas'
      });
    }

    // Verificar contraseña
    const passwordValida = await usuario.comparePassword(password);
    if (!passwordValida) {
      return res.status(401).json({
        error: 'Credenciales inválidas'
      });
    }

    // Verificar estado
    if (usuario.estado !== 'activo') {
      return res.status(403).json({
        error: 'Tu cuenta está inactiva o suspendida'
      });
    }

    // Actualizar último login
    await usuario.update({ ultimo_login: new Date() });

    // Generar token
    const token = generarToken(usuario);

    res.json({
      message: 'Iniciaste sesión exitosamente',
      token,
      usuario: {
        id: usuario.id,
        email: usuario.email,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        rol: usuario.rol
      }
    });
  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
};

/**
 * POST /api/auth/logout
 * Cerrar sesión
 */
exports.logout = (req, res) => {
  // El logout se maneja del lado del cliente eliminando el token
  res.json({ message: 'Sesión cerrada correctamente' });
};

/**
 * GET /api/auth/me
 * Obtener datos del usuario autenticado
 */
exports.obtenerMe = async (req, res) => {
  try {
    const usuario = await User.findByPk(req.usuarioId, {
      attributes: { exclude: ['password'] }
    });

    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.json({
      usuario: {
        id: usuario.id,
        email: usuario.email,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        telefono: usuario.telefono,
        rol: usuario.rol,
        estado: usuario.estado,
        fecha_afiliacion: usuario.fecha_afiliacion
      }
    });
  } catch (error) {
    console.error('Error obteniendo perfil:', error);
    res.status(500).json({ error: 'Error al obtener perfil' });
  }
};

/**
 * POST /api/auth/recuperar-contraseña
 * Solicitar recuperación de contraseña
 */
exports.recuperarContrasena = async (req, res) => {
  try {
    const { email } = req.body;

    const usuario = await User.findOne({ where: { email } });
    if (!usuario) {
      // Por seguridad, no revelar si email existe
      return res.json({
        message: 'Si el email existe, recibirás instrucciones de recuperación'
      });
    }

    // TODO: Enviar email con token de recuperación
    // TODO: Guardar token temporal en BD

    res.json({
      message: 'Instrucciones de recuperación enviadas a tu email'
    });
  } catch (error) {
    console.error('Error en recuperación:', error);
    res.status(500).json({ error: 'Error al procesar solicitud' });
  }
};

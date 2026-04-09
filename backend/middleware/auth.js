const jwt = require('jsonwebtoken');
const { User } = require('../models');

/**
 * Middleware para verificar JWT
 */
const verificarToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({
        error: 'No se proporcionó token de autenticación'
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const usuario = await User.findByPk(decoded.userId);
    if (!usuario) {
      return res.status(401).json({ error: 'Usuario no encontrado' });
    }

    // Adjuntar usuario a request
    req.usuario = usuario;
    req.usuarioId = usuario.id;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expirado' });
    }
    return res.status(401).json({ error: 'Token inválido' });
  }
};

/**
 * Middleware para verificar roles
 */
const verificarRol = (...rolesPermitidos) => {
  return (req, res, next) => {
    if (!req.usuario) {
      return res.status(401).json({ error: 'No autenticado' });
    }

    if (!rolesPermitidos.includes(req.usuario.rol)) {
      return res.status(403).json({
        error: 'No tiene permisos para acceder a este recurso'
      });
    }

    next();
  };
};

/**
 * Middleware para verificar que el usuario es admin
 */
const esAdmin = (req, res, next) => {
  if (!req.usuario || req.usuario.rol !== 'admin') {
    return res.status(403).json({ error: 'Acceso denegado' });
  }
  next();
};

/**
 * Generar JWT
 */
const generarToken = (usuario) => {
  return jwt.sign(
    {
      userId: usuario.id,
      email: usuario.email,
      rol: usuario.rol
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRATION || '7d' }
  );
};

module.exports = {
  verificarToken,
  verificarRol,
  esAdmin,
  generarToken
};

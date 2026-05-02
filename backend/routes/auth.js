const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

// Usuarios en memoria para demo
// NOTA: En producción usar base de datos
let users = [];

// Validación
const registerSchema = Joi.object({
  nombre: Joi.string().min(2).max(100).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

// Registro
router.post('/register', async (req, res) => {
  try {
    const { error } = registerSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const { nombre, email, password } = req.body;

    const existingUser = users.find(u => u.email === email);
    if (existingUser) return res.status(400).json({ error: 'Email ya registrado' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { id: users.length + 1, nombre, email, password: hashedPassword, rol: 'socio', estado: 'activo' };
    users.push(user);

    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      return res.status(500).json({ error: 'Error de configuración del servidor' });
    }

    const token = jwt.sign({ id: user.id, email: user.email, rol: user.rol }, jwtSecret, { expiresIn: '24h' });

    res.status(201).json({ message: 'Usuario registrado', token });
  } catch (err) {
    res.status(500).json({ error: 'Error en el registro' });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { error } = loginSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const { email, password } = req.body;
    const user = users.find(u => u.email === email);
    if (!user) return res.status(400).json({ error: 'Credenciales inválidas' });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json({ error: 'Credenciales inválidas' });

    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      return res.status(500).json({ error: 'Error de configuración del servidor' });
    }

    const token = jwt.sign({ id: user.id, email: user.email, rol: user.rol }, jwtSecret, { expiresIn: '24h' });

    res.json({ message: 'Login exitoso', token });
  } catch (err) {
    res.status(500).json({ error: 'Error en el login' });
  }
});

// Perfil (requiere autenticación)
router.get('/profile', authenticateToken, (req, res) => {
  const user = users.find(u => u.id === req.user.id);
  if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
  const { password, ...profile } = user;
  res.json(profile);
});

// Listar usuarios (solo admin)
router.get('/users', authenticateToken, (req, res) => {
  if (req.user.rol !== 'admin') {
    return res.status(403).json({ error: 'Acceso denegado: se requieren permisos de administrador' });
  }
  const safeUsers = users.map(u => {
    const { password, ...safe } = u;
    return safe;
  });
  res.json(safeUsers);
});

module.exports = router;
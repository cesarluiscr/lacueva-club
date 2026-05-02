const express = require('express');

const router = express.Router();

// Datos estáticos para demo
const instalaciones = [
  { id: 1, nombre: 'Piscina Principal', descripcion: 'Piscina olímpica climatizada', capacidad_maxima: 50, precio_por_hora: 5000, estado: 'activa' },
  { id: 2, nombre: 'Gimnasio', descripcion: 'Equipamiento completo', capacidad_maxima: 20, precio_por_hora: 3000, estado: 'activa' },
  { id: 3, nombre: 'Cancha de Tenis', descripcion: 'Cancha profesional', capacidad_maxima: 4, precio_por_hora: 8000, estado: 'activa' }
];

// Obtener todas las instalaciones activas
router.get('/', async (req, res) => {
  try {
    const activas = instalaciones.filter(i => i.estado === 'activa');
    res.json({ success: true, data: activas });
  } catch (err) {
    res.status(500).json({ error: 'Error obteniendo instalaciones' });
  }
});

module.exports = router;
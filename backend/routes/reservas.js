const express = require('express');
const Joi = require('joi');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

// Datos estáticos
const instalaciones = [
  { id: 1, nombre: 'Piscina Principal', capacidad_maxima: 50, precio_por_hora: 5000 },
  { id: 2, nombre: 'Gimnasio', capacidad_maxima: 20, precio_por_hora: 3000 },
  { id: 3, nombre: 'Cancha de Tenis', capacidad_maxima: 4, precio_por_hora: 8000 }
];

let reservas = []; // In-memory

// Validación
const reservaSchema = Joi.object({
  instalacion_id: Joi.number().integer().required(),
  fecha: Joi.date().iso().required(),
  hora_inicio: Joi.string().pattern(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/).required(),
  hora_fin: Joi.string().pattern(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/).required(),
  numero_asistentes: Joi.number().integer().min(1).required()
});

// Obtener disponibilidad
router.get('/disponibilidad/:instalacion_id', async (req, res) => {
  try {
    const { instalacion_id } = req.params;
    const { fecha } = req.query;

    const instalacion = instalaciones.find(i => i.id == instalacion_id);
    if (!instalacion) return res.status(404).json({ error: 'Instalación no encontrada' });

    // Horarios disponibles (8:00 a 22:00 cada hora)
    const horarios = [];
    for (let h = 8; h < 22; h++) {
      const hora = `${h.toString().padStart(2, '0')}:00`;
      // Verificar si ya hay reserva
      const reservaExistente = reservas.find(r =>
        r.instalacion_id == instalacion_id &&
        r.fecha === fecha &&
        r.hora_inicio === hora &&
        r.estado === 'confirmada'
      );
      horarios.push({ hora, disponible: !reservaExistente });
    }

    res.json({ horarios_disponibles: horarios });
  } catch (err) {
    res.status(500).json({ error: 'Error obteniendo disponibilidad' });
  }
});

// Crear reserva
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { error } = reservaSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const { instalacion_id, fecha, hora_inicio, hora_fin, numero_asistentes } = req.body;

    const instalacion = instalaciones.find(i => i.id == instalacion_id);
    if (!instalacion) return res.status(404).json({ error: 'Instalación no encontrada' });

    if (numero_asistentes > instalacion.capacidad_maxima) {
      return res.status(400).json({ error: 'Número de asistentes excede la capacidad' });
    }

    // Calcular precio
    const horas = (new Date(`2000-01-01T${hora_fin}`) - new Date(`2000-01-01T${hora_inicio}`)) / (1000 * 60 * 60);
    const precio_total = horas * instalacion.precio_por_hora;

    const reserva = {
      id: reservas.length + 1,
      user_id: req.user.id,
      instalacion_id,
      fecha,
      hora_inicio,
      hora_fin,
      numero_asistentes,
      precio_total,
      estado: 'confirmada'
    };
    reservas.push(reserva);

    res.status(201).json({ success: true, reserva });
  } catch (err) {
    res.status(500).json({ error: 'Error creando reserva' });
  }
});

module.exports = router;
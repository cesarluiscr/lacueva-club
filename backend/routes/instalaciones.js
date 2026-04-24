const express = require('express');
const router = express.Router();
const { Instalacion } = require('../models');

router.get('/', async (req, res) => {
  try {
    const instalaciones = await Instalacion.findAll({
      order: [['nombre', 'ASC']]
    });

    res.json({
      success: true,
      data: instalaciones.map((instalacion) => ({
        id: instalacion.id,
        nombre: instalacion.nombre,
        descripcion: instalacion.descripcion,
        tipo: instalacion.tipo,
        capacidad: instalacion.capacidad,
        ubicacion: instalacion.ubicacion,
        imagen_url: instalacion.imagen_url,
        horario_apertura: instalacion.horario_apertura,
        horario_cierre: instalacion.horario_cierre,
        tarifa_socio: instalacion.tarifa_socio,
        tarifa_visitante: instalacion.tarifa_visitante,
        requiere_reserva: instalacion.requiere_reserva,
        estado: instalacion.estado
      }))
    });
  } catch (error) {
    console.error('Error obteniendo instalaciones:', error);
    res.status(500).json({ success: false, error: 'Error al obtener instalaciones' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const instalacion = await Instalacion.findByPk(req.params.id);

    if (!instalacion) {
      return res.status(404).json({ success: false, error: 'Instalacion no encontrada' });
    }

    res.json({
      success: true,
      data: {
        id: instalacion.id,
        nombre: instalacion.nombre,
        descripcion: instalacion.descripcion,
        tipo: instalacion.tipo,
        capacidad: instalacion.capacidad,
        ubicacion: instalacion.ubicacion,
        imagen_url: instalacion.imagen_url,
        horario_apertura: instalacion.horario_apertura,
        horario_cierre: instalacion.horario_cierre,
        tarifa_socio: instalacion.tarifa_socio,
        tarifa_visitante: instalacion.tarifa_visitante,
        requiere_reserva: instalacion.requiere_reserva,
        estado: instalacion.estado
      }
    });
  } catch (error) {
    console.error('Error obteniendo instalacion:', error);
    res.status(500).json({ success: false, error: 'Error al obtener instalacion' });
  }
});

module.exports = router;

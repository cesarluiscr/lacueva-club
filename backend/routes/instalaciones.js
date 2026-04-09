const express = require('express');
const router = express.Router();

/**
 * GET /api/instalaciones
 * Obtener todas las instalaciones
 */
router.get('/', (req, res) => {
  const instalaciones = [
    {
      id: 1,
      nombre: 'Piscina Olímpica',
      descripcion: 'Piscina de competencia con 50 metros de largo',
      capacidad: 300,
      imagen: '/images/piscina-olimpica.jpg',
      horarios: '6:00 AM - 6:00 PM'
    },
    {
      id: 2,
      nombre: 'Canchas de Fútbol',
      descripcion: 'Dos canchas de césped sintético',
      capacidad: 40,
      imagen: '/images/canchas-futbol.jpg',
      horarios: '7:00 AM - 9:00 PM'
    },
    {
      id: 3,
      nombre: 'Canchas de Tenis',
      descripcion: 'Cuatro canchas de tenis con iluminación',
      capacidad: 8,
      imagen: '/images/canchas-tenis.jpg',
      horarios: '7:00 AM - 9:00 PM'
    },
    {
      id: 4,
      nombre: 'Gimnasio',
      descripcion: 'Equipos modernos y entrenadores certificados',
      capacidad: 50,
      imagen: '/images/gimnasio.jpg',
      horarios: '6:00 AM - 9:00 PM'
    },
    {
      id: 5,
      nombre: 'Salones para Eventos',
      descripcion: 'Salones para conferencias, bodas y eventos',
      capacidad: 200,
      imagen: '/images/salones.jpg',
      horarios: 'Flexible'
    },
    {
      id: 6,
      nombre: 'Restaurante',
      descripcion: 'Restaurante con vista a las instalaciones',
      capacidad: 100,
      imagen: '/images/restaurante.jpg',
      horarios: '11:00 AM - 9:00 PM'
    }
  ];

  res.json({
    success: true,
    data: instalaciones
  });
});

/**
 * GET /api/instalaciones/:id
 * Obtener detalles de una instalación
 */
router.get('/:id', (req, res) => {
  const { id } = req.params;

  const instalacion = {
    id: parseInt(id),
    nombre: 'Piscina Olímpica',
    descripcion: 'Piscina de competencia con 50 metros de largo',
    descripcion_completa: 'Nuestra piscina olímpica cuenta con las mejores instalaciones para natación competitiva y recreativa. Ideal para entrenamientos, clases y eventos.',
    capacidad: 300,
    imagen: '/images/piscina-olimpica.jpg',
    galeriaFotos: [
      '/images/piscina-1.jpg',
      '/images/piscina-2.jpg',
      '/images/piscina-3.jpg'
    ],
    horarios: {
      lunes_viernes: '6:00 AM - 6:00 PM',
      sabado_domingo: '8:00 AM - 5:00 PM'
    },
    servicios: [
      'Clases de natación',
      'Salvavidas disponible',
      'Vestuarios',
      'Lockers'
    ],
    tarifa_visitante: 15.00,
    requiere_reserva: true
  };

  res.json({
    success: true,
    data: instalacion
  });
});

module.exports = router;

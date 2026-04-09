const express = require('express');
const router = express.Router();

/**
 * GET /api/membresias
 * Obtener todos los planes de membresía
 */
router.get('/', (req, res) => {
  const membresias = [
    {
      id: 1,
      nombre: 'Socio Activo',
      precio_anual: 1200,
      precio_mensual: 120,
      descripcion: 'Acceso completo a todas las instalaciones',
      beneficios: [
        'Acceso ilimitado a piscinas',
        'Acceso ilimitado a gimnasio',
        'Descuento 20% en restaurante',
        'Prioridad en reservas de canchas',
        'Acceso a eventos especiales',
        '2 invitados al mes'
      ],
      limite_invitados: 2,
      activo: true
    },
    {
      id: 2,
      nombre: 'Socio Básico',
      precio_anual: 600,
      precio_mensual: 60,
      descripcion: 'Acceso a instalaciones principales',
      beneficios: [
        'Acceso a piscinas',
        'Acceso a gimnasio',
        'Descuento 10% en restaurante',
        'Acceso a eventos básicos'
      ],
      limite_invitados: 1,
      activo: true
    },
    {
      id: 3,
      nombre: 'Socio Familia',
      precio_anual: 2000,
      precio_mensual: 200,
      descripcion: 'Membresía para familias (máx. 4 personas)',
      beneficios: [
        'Acceso ilimitado todas instalaciones',
        'Todos los beneficios Socio Activo',
        'Clases de natación para niños',
        'Descuento 25% en restaurante',
        'Hasta 4 invitados al mes'
      ],
      limite_invitados: 4,
      activo: true
    },
    {
      id: 4,
      nombre: 'Visitante',
      precio_por_dia: 15,
      descripcion: 'Acceso de visitante por día',
      beneficios: [
        'Acceso por un día',
        'Acceso a piscinas y canchas',
        'Uso de vestuarios',
        'Acceso a restaurante'
      ],
      limite_invitados: 0,
      activo: true
    }
  ];

  res.json({
    success: true,
    data: membresias
  });
});

/**
 * GET /api/membresias/:id
 * Obtener detalles de una membresía
 */
router.get('/:id', (req, res) => {
  const { id } = req.params;

  const membresia = {
    id: parseInt(id),
    nombre: 'Socio Activo',
    precio_anual: 1200,
    precio_mensual: 120,
    descripcion: 'Acceso completo a todas las instalaciones',
    descripcion_completa: 'La membresía Socio Activo te da acceso ilimitado a todas nuestras instalaciones de clase mundial. Perfecto para quien quiere disfrutar al máximo del club.',
    beneficios: [
      'Acceso ilimitado a piscinas',
      'Acceso ilimitado a gimnasio',
      'Descuento 20% en restaurante',
      'Prioridad en reservas de canchas',
      'Acceso a eventos especiales',
      '2 invitados al mes'
    ],
    clausulas: [
      'Pago anual o mensual',
      'Compromiso mínimo de 1 año',
      'Cancelación con 30 días de anticipación'
    ],
    limite_invitados: 2,
    activo: true
  };

  res.json({
    success: true,
    data: membresia
  });
});

module.exports = router;

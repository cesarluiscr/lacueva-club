const express = require('express');
const router = express.Router();

/**
 * GET /api/socios/perfil
 * Obtener perfil del socio autenticado
 */
router.get('/perfil', (req, res) => {
  // TODO: Implementar autenticación JWT
  const perfil = {
    id: 1,
    email: 'socio@example.com',
    nombre: 'Juan',
    apellido: 'Pérez',
    telefono: '2433-7171',
    fecha_afiliacion: '2023-01-15',
    estado_cuenta: 'al_corriente'
  };

  res.json({
    success: true,
    data: perfil
  });
});

/**
 * PUT /api/socios/perfil
 * Actualizar perfil del socio
 */
router.put('/perfil', (req, res) => {
  const { nombre, apellido, telefono } = req.body;

  // TODO: Validar datos
  // TODO: Actualizar en BD

  res.json({
    success: true,
    message: 'Perfil actualizado exitosamente'
  });
});

/**
 * GET /api/socios/documentos
 * Obtener documentos disponibles para descargar
 */
router.get('/documentos', (req, res) => {
  const documentos = [
    {
      id: 1,
      nombre: 'Estatutos del Club',
      fecha_publicacion: '2023-06-01',
      tipo: 'PDF',
      url: '/documents/estatutos.pdf'
    },
    {
      id: 2,
      nombre: 'Reglamento Interno',
      fecha_publicacion: '2024-01-15',
      tipo: 'PDF',
      url: '/documents/reglamento.pdf'
    },
    {
      id: 3,
      nombre: 'Política de Privacidad',
      fecha_publicacion: '2024-02-01',
      tipo: 'PDF',
      url: '/documents/privacidad.pdf'
    }
  ];

  res.json({
    success: true,
    data: documentos
  });
});

/**
 * GET /api/socios/estado-cuenta
 * Obtener estado de cuenta del socio
 */
router.get('/estado-cuenta', (req, res) => {
  // TODO: Implementar autenticación
  const estadoCuenta = {
    socio_id: 1,
    estado_general: 'al_corriente',
    saldo: 0,
    transacciones_recientes: [
      {
        fecha: '2026-03-01',
        descripcion: 'Pago Membresía Marzo 2026',
        monto: -120.00,
        tipo: 'pago'
      },
      {
        fecha: '2026-02-15',
        descripcion: 'Servicio Adicional - Cancha Tenis',
        monto: -25.00,
        tipo: 'servicio'
      }
    ]
  };

  res.json({
    success: true,
    data: estadoCuenta
  });
});

module.exports = router;

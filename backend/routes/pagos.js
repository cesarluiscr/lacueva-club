const express = require('express');
const { body, validationResult } = require('express-validator');
const { verificarToken } = require('../middleware/auth');
const { Pago } = require('../models');

const router = express.Router();

const stripe = process.env.STRIPE_SECRET_KEY
  ? require('stripe')(process.env.STRIPE_SECRET_KEY)
  : null;

const membresias = [
  {
    id: 'individual',
    nombre: 'Membresia Individual',
    descripcion: 'Acceso completo para una persona a piscinas, gimnasio y canchas.',
    monto: 65000,
    moneda: 'crc',
    categoria: 'Mensual',
    beneficios: [
      'Acceso a instalaciones premium',
      'Reservas con tarifa preferencial',
      'Invitaciones a eventos del club'
    ]
  },
  {
    id: 'familiar',
    nombre: 'Membresia Familiar',
    descripcion: 'Plan ideal para parejas y familias con acceso compartido.',
    monto: 120000,
    moneda: 'crc',
    categoria: 'Mensual',
    beneficios: [
      'Hasta 4 personas en una sola membresia',
      'Descuentos en actividades infantiles',
      'Prioridad en eventos familiares'
    ]
  },
  {
    id: 'corporativa',
    nombre: 'Membresia Corporativa',
    descripcion: 'Beneficios para equipos de trabajo y actividades empresariales.',
    monto: 185000,
    moneda: 'crc',
    categoria: 'Mensual',
    beneficios: [
      'Hasta 8 accesos corporativos',
      'Salones con tarifa preferencial',
      'Atencion personalizada para eventos'
    ]
  }
];

function obtenerMembresia(id) {
  return membresias.find((membresia) => membresia.id === id);
}

function construirRespuestaDemo(membresia, cliente) {
  return {
    success: true,
    mode: 'demo',
    message: 'Checkout preparado en modo demo. Configura STRIPE_SECRET_KEY para activar el pago en vivo.',
    checkout_url: null,
    session_id: `demo_${Date.now()}`,
    membresia,
    cliente,
    instrucciones: [
      'Agrega STRIPE_SECRET_KEY en backend/.env',
      'Configura FRONTEND_URL para redireccionar correctamente',
      'Vuelve a intentar el checkout para generar una sesion real'
    ]
  };
}

router.get('/catalogo', (req, res) => {
  res.json({
    success: true,
    stripe_habilitado: Boolean(stripe),
    data: membresias
  });
});

router.post('/checkout', [
  body('membresia_id').notEmpty().withMessage('La membresia es requerida'),
  body('email').isEmail().normalizeEmail().withMessage('Email invalido'),
  body('nombre').notEmpty().trim().withMessage('Nombre requerido')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    const { membresia_id, email, nombre } = req.body;
    const membresia = obtenerMembresia(membresia_id);

    if (!membresia) {
      return res.status(404).json({
        success: false,
        error: 'La membresia seleccionada no existe'
      });
    }

    if (!stripe) {
      return res.json(construirRespuestaDemo(membresia, { email, nombre }));
    }

    const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173';
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      customer_email: email,
      success_url: `${frontendUrl}/#/tienda?checkout=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${frontendUrl}/#/tienda?checkout=cancel`,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: membresia.moneda,
            unit_amount: membresia.monto * 100,
            product_data: {
              name: membresia.nombre,
              description: membresia.descripcion
            }
          }
        }
      ],
      metadata: {
        membresia_id: membresia.id,
        nombre,
        email
      }
    });

    res.json({
      success: true,
      mode: 'stripe',
      message: 'Sesion de checkout creada',
      session_id: session.id,
      checkout_url: session.url,
      membresia,
      cliente: { email, nombre }
    });
  } catch (error) {
    console.error('Error creando checkout:', error);
    res.status(500).json({
      success: false,
      error: 'Error al crear la sesion de pago'
    });
  }
});

router.post('/webhook', async (req, res) => {
  try {
    const event = req.body;

    if (!event || !event.type) {
      return res.status(400).json({
        success: false,
        error: 'Evento de webhook invalido'
      });
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data?.object;

      if (session?.metadata?.usuario_id) {
        await Pago.create({
          usuario_id: session.metadata.usuario_id,
          monto: Number(session.amount_total || 0) / 100,
          concepto: `Membresia ${session.metadata.membresia_id || 'club'}`,
          estado: 'completado',
          metodo_pago: 'tarjeta',
          referencia_externa: session.id,
          descripcion: `Pago confirmado para ${session.customer_email}`,
          pagado_en: new Date()
        });
      }
    }

    res.json({
      success: true,
      message: 'Webhook procesado'
    });
  } catch (error) {
    console.error('Error procesando webhook:', error);
    res.status(500).json({
      success: false,
      error: 'Error al procesar el webhook'
    });
  }
});

router.get('/historial', verificarToken, async (req, res) => {
  try {
    const pagos = await Pago.findAll({
      where: { usuario_id: req.usuarioId },
      order: [['created_at', 'DESC']]
    });

    res.json({
      success: true,
      data: pagos.map((pago) => ({
        id: pago.id,
        fecha: pago.pagado_en || pago.created_at,
        descripcion: pago.descripcion || pago.concepto,
        monto: Number(pago.monto),
        estado: pago.estado,
        metodo: pago.metodo_pago,
        comprobante: pago.referencia_externa
      }))
    });
  } catch (error) {
    console.error('Error obteniendo historial de pagos:', error);
    res.status(500).json({
      success: false,
      error: 'Error al obtener el historial de pagos'
    });
  }
});

router.post('/refund', verificarToken, async (req, res) => {
  try {
    const { pago_id, razon } = req.body;

    const pago = await Pago.findOne({
      where: {
        id: pago_id,
        usuario_id: req.usuarioId
      }
    });

    if (!pago) {
      return res.status(404).json({
        success: false,
        error: 'Pago no encontrado'
      });
    }

    await pago.update({
      estado: 'reembolsado',
      razon_reembolso: razon || 'Solicitud del usuario',
      reembolsado_en: new Date()
    });

    res.json({
      success: true,
      message: 'Reembolso registrado exitosamente',
      refund_id: `refund_${Date.now()}`
    });
  } catch (error) {
    console.error('Error registrando reembolso:', error);
    res.status(500).json({
      success: false,
      error: 'Error al procesar el reembolso'
    });
  }
});

module.exports = router;

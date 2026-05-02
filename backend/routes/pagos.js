const express = require('express');
const Joi = require('joi');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY || 'sk_test_...');

const router = express.Router();

// Validación
const checkoutSchema = Joi.object({
  membresia_id: Joi.string().required(),
  nombre: Joi.string().min(2).required(),
  email: Joi.string().email().required()
});

// Crear checkout session
router.post('/checkout', async (req, res) => {
  try {
    const { error } = checkoutSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const { membresia_id, nombre, email } = req.body;

    // Precios simulados
    const precios = {
      individual: 65000,
      familiar: 120000,
      corporativa: 185000
    };

    const precio = precios[membresia_id];
    if (!precio) return res.status(400).json({ error: 'Membresía inválida' });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'crc',
          product_data: {
            name: `Membresía ${membresia_id}`,
          },
          unit_amount: precio,
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/tienda?checkout=success`,
      cancel_url: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/tienda?checkout=cancel`,
      customer_email: email,
      metadata: {
        membresia_id,
        nombre
      }
    });

    res.json({ success: true, checkout_url: session.url });
  } catch (err) {
    res.status(500).json({ error: 'Error creando checkout' });
  }
});

module.exports = router;
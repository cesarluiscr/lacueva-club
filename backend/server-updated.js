const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

// Importar modelos
const { sequelize } = require('./models');

const app = express();

// Middleware de Seguridad
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100 // límite de 100 requests por ventana
});
app.use(limiter);

// Body Parser
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/instalaciones', require('./routes/instalaciones'));
app.use('/api/reservas', require('./routes/reservas'));
app.use('/api/membresias', require('./routes/membresias'));
app.use('/api/socios', require('./routes/socios'));
app.use('/api/pagos', require('./routes/pagos'));
app.use('/api/admin', require('./routes/admin'));

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'API funcionando correctamente',
    database: 'Conectado',
    timestamp: new Date()
  });
});

// Error Handler Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Error interno del servidor',
      status: err.status || 500
    }
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Sincronizar BD e iniciar servidor
const PORT = process.env.PORT || 3000;

const iniciarServidor = async () => {
  try {
    // Sincronizar modelos con BD
    if (process.env.NODE_ENV === 'development') {
      await sequelize.sync({ alter: true });
      console.log('✅ Modelos sincronizados con la BD');
    } else {
      await sequelize.sync({ alter: false });
      console.log('✅ Modelos verificados en la BD');
    }

    app.listen(PORT, () => {
      console.log(`✅ Servidor ejecutándose en puerto ${PORT}`);
      console.log(`🌐 Ambiente: ${process.env.NODE_ENV || 'development'}`);
      console.log(`📦 BD: ${process.env.DB_NAME}@${process.env.DB_HOST}`);
    });
  } catch (error) {
    console.error('❌ Error al iniciar servidor:', error);
    process.exit(1);
  }
};

iniciarServidor();

module.exports = app;

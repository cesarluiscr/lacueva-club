const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const { sequelize } = require('./models');

const app = express();

app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use(limiter);

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/instalaciones', require('./routes/instalaciones'));
app.use('/api/reservas', require('./routes/reservas'));
app.use('/api/socios', require('./routes/socios'));
app.use('/api/pagos', require('./routes/pagos'));
app.use('/api/admin', require('./routes/admin'));

app.get('/api/health', async (req, res) => {
  try {
    await sequelize.authenticate();
    res.json({
      status: 'API funcionando correctamente',
      database: 'Conectado',
      timestamp: new Date()
    });
  } catch (error) {
    res.status(503).json({
      status: 'API con problemas de conectividad',
      database: 'Desconectado',
      timestamp: new Date()
    });
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Error interno del servidor',
      status: err.status || 500
    }
  });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

const PORT = process.env.PORT || 3000;

const iniciarServidor = async () => {
  try {
    const conectado = await sequelize.probarConexion();
    if (!conectado) {
      throw new Error('No se pudo establecer conexion con la base de datos');
    }

    if (process.env.NODE_ENV === 'development') {
      await sequelize.sync({ alter: true });
      console.log('Modelos sincronizados con la BD');
    } else {
      await sequelize.sync();
      console.log('Modelos verificados en la BD');
    }

    app.listen(PORT, () => {
      console.log(`Servidor ejecutandose en puerto ${PORT}`);
      console.log(`Ambiente: ${process.env.NODE_ENV || 'development'}`);
      console.log(`BD: ${process.env.DB_NAME}@${process.env.DB_HOST}`);
    });
  } catch (error) {
    console.error('Error al iniciar servidor:', error);
    process.exit(1);
  }
};

iniciarServidor();

module.exports = app;

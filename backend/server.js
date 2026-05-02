const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

// Validar variables de entorno críticas
if (!process.env.JWT_SECRET) {
  console.error('ERROR: JWT_SECRET no está configurado en .env');
  process.exit(1);
}

const app = express();
const PORT = process.env.PORT || 3000;

// Seguridad básica
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Demasiadas solicitudes desde esta IP, por favor intenta más tarde.'
});
app.use(limiter);

// Body parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Database (comentado para demo sin DB)
// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: './database.sqlite',
//   logging: false
// });

// Sync and seed (comentado)
// const seedDatabase = async () => {
//   const User = require('./models/User');
//   const Instalacion = require('./models/Instalacion');

//   await sequelize.sync({ force: true }); // Reset DB

//   // Seed users
//   await User.create({ nombre: 'Admin', email: 'admin@lacueva.com', password: await require('bcryptjs').hash('admin123', 10), rol: 'admin' });

//   // Seed instalaciones
//   await Instalacion.create({ nombre: 'Piscina Principal', descripcion: 'Piscina olímpica climatizada', capacidad_maxima: 50, precio_por_hora: 5000 });
//   await Instalacion.create({ nombre: 'Gimnasio', descripcion: 'Equipamiento completo', capacidad_maxima: 20, precio_por_hora: 3000 });
//   await Instalacion.create({ nombre: 'Cancha de Tenis', descripcion: 'Cancha profesional', capacidad_maxima: 4, precio_por_hora: 8000 });

//   console.log('Base de datos sembrada.');
// };

// seedDatabase();

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/instalaciones', require('./routes/instalaciones'));
app.use('/api/reservas', require('./routes/reservas'));
app.use('/api/pagos', require('./routes/pagos'));

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo salió mal!' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

module.exports = app;
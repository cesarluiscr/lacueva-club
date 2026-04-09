const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    timezone: '-06:00' // Zona horaria Costa Rica
  }
);

// Probar conexión
sequelize.authenticate()
  .then(() => {
    console.log('✅ Conexión a BD establecida correctamente');
  })
  .catch(err => {
    console.error('❌ Error conectando a BD:', err);
    process.exit(1);
  });

module.exports = sequelize;

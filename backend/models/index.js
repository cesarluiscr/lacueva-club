const User = require('./User');
const Instalacion = require('./Instalacion');
const Reserva = require('./Reserva');
const Membresia = require('./Membresia');
const Pago = require('./Pago');
const SocioMembresia = require('./SocioMembresia');
const sequelize = require('../config/database');

// Relaciones
// User - Reserva (1:N)
User.hasMany(Reserva, {
  foreignKey: 'usuario_id',
  as: 'reservas'
});
Reserva.belongsTo(User, {
  foreignKey: 'usuario_id',
  as: 'usuario'
});

// Instalacion - Reserva (1:N)
Instalacion.hasMany(Reserva, {
  foreignKey: 'instalacion_id',
  as: 'reservas'
});
Reserva.belongsTo(Instalacion, {
  foreignKey: 'instalacion_id',
  as: 'instalacion'
});

// User - Pago (1:N)
User.hasMany(Pago, {
  foreignKey: 'usuario_id',
  as: 'pagos'
});
Pago.belongsTo(User, {
  foreignKey: 'usuario_id',
  as: 'usuario'
});

// User - SocioMembresia (1:N)
User.hasMany(SocioMembresia, {
  foreignKey: 'usuario_id',
  as: 'membresias'
});
SocioMembresia.belongsTo(User, {
  foreignKey: 'usuario_id',
  as: 'usuario'
});

// Membresia - SocioMembresia (1:N)
Membresia.hasMany(SocioMembresia, {
  foreignKey: 'membresia_id',
  as: 'socios'
});
SocioMembresia.belongsTo(Membresia, {
  foreignKey: 'membresia_id',
  as: 'membresia'
});

// User - Membresia (Many:Many a través de SocioMembresia)
User.belongsToMany(Membresia, {
  through: SocioMembresia,
  foreignKey: 'usuario_id',
  otherKey: 'membresia_id',
  as: 'membresias_activas'
});
Membresia.belongsToMany(User, {
  through: SocioMembresia,
  foreignKey: 'membresia_id',
  otherKey: 'usuario_id',
  as: 'usuarios'
});

module.exports = {
  User,
  Instalacion,
  Reserva,
  Membresia,
  Pago,
  SocioMembresia,
  sequelize
};

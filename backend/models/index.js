const User = require('./User');
const Instalacion = require('./Instalacion');
const Reserva = require('./Reserva');
const Pago = require('./Pago');
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
module.exports = {
  User,
  Instalacion,
  Reserva,
  Pago,
  sequelize
};

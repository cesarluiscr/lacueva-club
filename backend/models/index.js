const User = require('./User');
const Instalacion = require('./Instalacion');
const Reserva = require('./Reserva');
const Pago = require('./Pago');
const sequelize = require('../config/database');

User.hasMany(Reserva, {
  foreignKey: 'usuario_id',
  as: 'reservas'
});
Reserva.belongsTo(User, {
  foreignKey: 'usuario_id',
  as: 'usuario'
});

Instalacion.hasMany(Reserva, {
  foreignKey: 'instalacion_id',
  as: 'reservas'
});
Reserva.belongsTo(Instalacion, {
  foreignKey: 'instalacion_id',
  as: 'instalacion'
});

User.hasMany(Pago, {
  foreignKey: 'usuario_id',
  as: 'pagos'
});
Pago.belongsTo(User, {
  foreignKey: 'usuario_id',
  as: 'usuario'
});

module.exports = {
  User,
  Instalacion,
  Reserva,
  Pago,
  sequelize
};

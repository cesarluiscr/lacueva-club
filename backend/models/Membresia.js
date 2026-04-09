const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Membresia = sequelize.define('Membresia', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  precio_mensual: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  precio_anual: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true
  },
  limite_invitados: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  beneficios: {
    type: DataTypes.JSONB,
    defaultValue: [],
    comment: 'Array de beneficios'
  },
  duracion_minima_meses: {
    type: DataTypes.INTEGER,
    defaultValue: 12
  },
  activa: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  orden: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
}, {
  tableName: 'membresias',
  timestamps: true,
  underscored: true
});

module.exports = Membresia;

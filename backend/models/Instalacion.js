const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Instalacion = sequelize.define('Instalacion', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT
  },
  capacidad_maxima: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  precio_por_hora: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  estado: {
    type: DataTypes.ENUM('activa', 'cerrada', 'mantenimiento'),
    defaultValue: 'activa'
  }
}, {
  timestamps: true
});

module.exports = Instalacion;
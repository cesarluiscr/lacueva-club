const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Instalacion = sequelize.define('Instalacion', {
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
  tipo: {
    type: DataTypes.ENUM('piscina', 'cancha', 'salon', 'otro'),
    allowNull: false
  },
  capacidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1
    }
  },
  ubicacion: {
    type: DataTypes.STRING,
    allowNull: true
  },
  imagen_url: {
    type: DataTypes.STRING,
    allowNull: true
  },
  tarifa_visitante: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0
  },
  tarifa_socio: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0
  },
  requiere_reserva: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  estado: {
    type: DataTypes.ENUM('activa', 'mantenimiento', 'cerrada'),
    defaultValue: 'activa'
  },
  horario_apertura: {
    type: DataTypes.TIME,
    defaultValue: '06:00:00'
  },
  horario_cierre: {
    type: DataTypes.TIME,
    defaultValue: '21:00:00'
  }
}, {
  tableName: 'instalaciones',
  timestamps: true,
  underscored: true
});

module.exports = Instalacion;

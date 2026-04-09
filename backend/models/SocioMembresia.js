const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const SocioMembresia = sequelize.define('SocioMembresia', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  usuario_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'usuarios',
      key: 'id'
    }
  },
  membresia_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'membresias',
      key: 'id'
    }
  },
  fecha_inicio: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false
  },
  fecha_vencimiento: {
    type: DataTypes.DATE,
    allowNull: false
  },
  estado: {
    type: DataTypes.ENUM('activa', 'vencida', 'suspendida', 'cancelada'),
    defaultValue: 'activa'
  },
  renovacion_automatica: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  invitados_usados: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  notas: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  precio_pagado: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true
  },
  cancelada_en: {
    type: DataTypes.DATE,
    allowNull: true
  },
  razon_cancelacion: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'socio_membresias',
  timestamps: true,
  underscored: true
});

module.exports = SocioMembresia;

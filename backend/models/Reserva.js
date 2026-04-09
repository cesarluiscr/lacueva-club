const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Reserva = sequelize.define('Reserva', {
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
  instalacion_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'instalaciones',
      key: 'id'
    }
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false
  },
  hora_inicio: {
    type: DataTypes.TIME,
    allowNull: false
  },
  hora_fin: {
    type: DataTypes.TIME,
    allowNull: false
  },
  estado: {
    type: DataTypes.ENUM('pendiente', 'confirmada', 'cancelada', 'completada'),
    defaultValue: 'pendiente'
  },
  costo: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  deposito_seguridad: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0
  },
  notas: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  numero_asistentes: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  confirmada_en: {
    type: DataTypes.DATE,
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
  tableName: 'reservas',
  timestamps: true,
  underscored: true
});

module.exports = Reserva;

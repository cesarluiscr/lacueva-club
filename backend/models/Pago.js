const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Pago = sequelize.define('Pago', {
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
  monto: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  concepto: {
    type: DataTypes.STRING,
    allowNull: false
  },
  estado: {
    type: DataTypes.ENUM('pendiente', 'completado', 'fallido', 'reembolsado'),
    defaultValue: 'pendiente'
  },
  metodo_pago: {
    type: DataTypes.ENUM('tarjeta', 'transferencia', 'paypal', 'efectivo'),
    allowNull: true
  },
  referencia_externa: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'ID de transacción Stripe/PayPal'
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  comprobante_url: {
    type: DataTypes.STRING,
    allowNull: true
  },
  pagado_en: {
    type: DataTypes.DATE,
    allowNull: true
  },
  reembolsado_en: {
    type: DataTypes.DATE,
    allowNull: true
  },
  razon_reembolso: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'pagos',
  timestamps: true,
  underscored: true
});

module.exports = Pago;

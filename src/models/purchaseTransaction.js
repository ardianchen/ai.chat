import { Database } from '../database'
import Sequelize from 'sequelize'

const table = 'purchase_transaction'
const purchaseTransaction = Database.define(table, {
  id: {
    type: Sequelize.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  customer_id: {
    type: Sequelize.BIGINT,
    allowNull: false
  },
  total_spent: Sequelize.DECIMAL,
  total_saving: Sequelize.DECIMAL,
  voucher_id: Sequelize.STRING,
  created_at: {
    type: 'TIMESTAMP',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  },
  updated_at: {
    type: 'TIMESTAMP',
    allowNull: true
  }
}, {
  // setup table config
  // tableName: 'user',
  // freezeTableName: true
  // underscored: true,
  // paranoid: true,
  // timestamps: false
})

module.exports = purchaseTransaction

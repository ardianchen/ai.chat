import { Database } from '../database'
import Sequelize from 'sequelize'

const table = 'costumers'
const costumer = Database.define(table, {
  id: {
    type: Sequelize.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  gender: Sequelize.STRING,
  date_of_birth: {
    type: Sequelize.DATE,
    allowNull: true
  },
  contact_number: Sequelize.STRING,
  email: Sequelize.STRING,
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

module.exports = costumer

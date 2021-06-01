// import mongoose from 'mongoose'
import Sequelize from 'sequelize'
import config from './config'
const Op = Sequelize.Op
const seq = Sequelize

module.exports = (() => {
  return new Sequelize(
    process.env.SQL_DATABASENAME || 'boilerplate_db',
    process.env.SQL_USER || 'root',
    process.env.SQL_PASSWORD || 'toor',
    config,
    Op,
    seq
  )
  // return new Sequelize('mysql://root:toor@localhost:3306/gotraining')
})()

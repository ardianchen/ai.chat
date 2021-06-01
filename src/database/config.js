require('dotenv').config()
module.exports = {
  host: process.env.SQL_URL || '192.168.1.90',
  dialect: process.env.SQL_DIALECT || 'mysql',
  database: process.env.SQL_DATABASENAME || 'boilerplate_db',
  username: process.env.SQL_USER || 'root',
  password: process.env.SQL_PASSWORD || 'toor',
  passoperatorsAliasesword: false,
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  // disable logging; default: console.log // show query
  logging: false,
  define: {
    timestamps: false,
    freezeTableName: true,
    // underscored: true,
    paranoid: true
  }
}

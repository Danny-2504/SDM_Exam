const mysql = require('mysql2')

const pool = mysql.createPool({
  host: 'localhost',
  user: 'rootuser',
  password: 'rootuser',
  database: 'mydb',
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
})

module.exports = pool
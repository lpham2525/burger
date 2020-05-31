const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.JAWSDB_URL || process.env.LOCAL_URL)

connection.connect((err) => {
  console.log('connected!')
  if (err) {
    console.error(err)
  }
})

module.exports = connection
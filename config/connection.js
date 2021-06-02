const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.JAWSDB_URL || process.env.LOCAL_URL)

connection.connect((err) => {
  console.log('connected!')
  if (err) {
    console.error("error connecting: " + err.stack)
    return
  } else {
    console.log("connected with id: " + connection.threadId)
  }
})

module.exports = connection


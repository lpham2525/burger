const mysql = require('mysql2')
const connection = mysql.createConnection('mysql://root:rootroot@localhost:3306/burgers_db')

connection.connect((err) => {
  console.log("connected!")
  if(err) {
    console.error(err)
  }
})

module.exports = connection
const connection = require('./connection')

module.exports = {
  selectAll (table, cb) {
    connection.query(`SELECT * FROM ${table}`, (err, data) => {
      if (err) { console.log(err) }
      cb(data)
    })
  },
  insertOne (data, cb) {
    connection.query(`INSERT INTO burgers (burger_name) VALUES (?)`, [data], (err, info) => {
      if (err) { console.log(err) }
      cb(info)
    })
  },
  updateOne (table, changes, where, cb) {
    connection.query(`UPDATE ${table} SET ? WHERE ?`, [changes, where], (err, info) => {
      if (err) { console.log(err) }
      cb(info)
    }),
    deleteOne(table, where, cb ) {
      connection.query(`DELETE FROM ${table} WHERE ?`, where, (err, info) => {
        if (err) { console.log(err)}
        cb(info)
      }
      )
    }
  }
}

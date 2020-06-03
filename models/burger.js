const orm = require('../config/orm.js')

module.exports = {
  getBurgers (cb) {
    orm.selectAll('burgers', burgers => cb(burgers))
  },
  addBurger (burger, cb) {
    console.log(burger)
    orm.insertOne(burger, info => cb(info)
    )
  },
  updateBurger (changes, where, cb) {
    orm.updateOne('burgers', changes, where, info => cb(info))
  }
}

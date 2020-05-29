const orm = require('../config/orm')

module.exports = {
  getBurgers (cb) {
    orm.selectAll('burgers', burgers => cb(burgers))
  },
  addBurger (burger, cb) {
    orm.insertOne('burgers', burger, info => cb(info)
    )
  },
  updateBurger (changes, where, cb) {
    orm.updateOne('burgers', changes, where, info => cb(info))
  }
}

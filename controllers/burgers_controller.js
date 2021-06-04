const Burger = require('../models/burger.js')
const router = require('express').Router()

router.post('/burgers', (req, res) => {
  console.log(req.body)
  Burger.addBurger(req.body.burger_name, info => {
    res.json({ id: info.insertID })
  })
})

router.put('/burgers/:id', (req, res) => {
  const condition = 'id = ' + req.params.id
  console.log('condition', condition)

  Burger.updateBurger({ devoured: req.body.devoured }, { id: req.params.id }, info => {
    if (info.changedRows === 0) {
      return res.status(404).end()
    } else {
      res.status(200).end()
    }
  })
})

  router.delete('/burgers/:id', (req, res) => {
    // const deleted = 'id = ' + req.params.id
    // console.log('deleted: ', deleted)

    Burger.deleteBurger({ id: req.params.id }, info => {
      res.json(info)
      // if (info.changedRows === 0) {
      //   return res.status(404).end()
      // } else {
      //   res.status(200).end()
      // }
    })
    })

  module.exports = router

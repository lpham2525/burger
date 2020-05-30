const { Burger } = require('../models/burger.js')
const router = require('express').Router()

router.get('/burgers', (req, res) => Burger
  .selectAll(info => res.json(info)))

router.post('/burgers', (req, res) => Burger
  .insertOne(req.body, info => res.json(info)))

router.put('/burgers/:id', (req, res) => Burger
  .updateOne(req.body, { id: req.params.id }, info => res.json(info)))

module.exports = router

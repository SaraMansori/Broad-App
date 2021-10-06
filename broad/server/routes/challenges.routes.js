const express = require("express");
const router = express.Router();

const User = require('./../models/User.model')
const Challenge = require('./../models/Challenge.model')

router.get('/', (req, res) => {
  const { id } = req.session.currentUser._id

  Challenge
    .find({ owner: id })
    .then((challenges) => res.status(200).json(challenges))
    .catch((err) => console.error(err))

})

router.post('/create', (req, res) => {
  const { phrase, quantity, year, owner } = req.body

  Challenge
    .create({ phrase, quantity, year, owner })
    .then(res.status(200).json({ message: 'Challenge created successfully' }))
    .catch((err) => console.error(err))

})

router.put('/edit/:id', (req, res) => {
  const { id } = req.params
  const { phrase, quantity, year } = req.body

  Challenge
    .findByIdAndUpdate(id, { phrase, quantity, year })
    .then(res.status(200).json({ message: 'Challenge modified successfully' }))
    .catch((err) => console.error(err))

})

router.delete('/delete/:id', (req, res) => {
  const { id } = req.params

  Challenge
    .findByIdAndDelete(id)
    .then(res.status(200).json({ message: 'Challenge deleted successfully' }))
    .catch((err) => console.error(err))
})

module.exports = router

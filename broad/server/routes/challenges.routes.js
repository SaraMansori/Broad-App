const router = require("express").Router()

const { isLoggedIn, checkId } = require('../middleware')
const User = require('./../models/User.model')
const Challenge = require('./../models/Challenge.model')


router.get('/', isLoggedIn, (req, res) => {
  const { id } = req.session.currentUser._id

  Challenge
    .find({ owner: id })
    .then((challenges) => res.status(200).json(challenges))
    .catch((err) => console.error(err))

})


router.post('/create', isLoggedIn, (req, res) => {
  const { phrase, quantity, year, owner } = req.body

  Challenge
    .create({ phrase, quantity, year, owner })
    .then(res.status(200).json({ message: 'Challenge created successfully' }))
    .catch((err) => console.error(err))

})


router.put('/edit/:id', isLoggedIn, checkId, (req, res) => {
  const { id } = req.params
  const { phrase, quantity, year } = req.body

  Challenge
    .findByIdAndUpdate(id, { phrase, quantity, year })
    .then(res.status(200).json({ message: 'Challenge modified successfully' }))
    .catch((err) => console.error(err))

})


router.delete('/delete/:id', isLoggedIn, checkId, (req, res) => {
  const { id } = req.params

  Challenge
    .findByIdAndDelete(id)
    .then(res.status(200).json({ message: 'Challenge deleted successfully' }))
    .catch((err) => console.error(err))
})


module.exports = router

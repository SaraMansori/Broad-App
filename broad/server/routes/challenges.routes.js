const router = require("express").Router()

const { isLoggedIn, checkId } = require('../middleware')
const Challenge = require('./../models/Challenge.model')


router.get('/', isLoggedIn, (req, res) => {

  const { id } = req.session.currentUser._id

  Challenge
    .find({ owner: id })
    .then((challenges) => res.status(200).json(challenges))
    .catch((err) => console.error(err))
})


router.post('/', isLoggedIn, (req, res) => {

  const { phrase, quantity, year, owner } = req.body

  Challenge
    .create({ phrase, quantity, year, owner })
    .then(res.status(200).json({ message: 'Challenge created successfully' }))
    .catch((err) => console.error(err))
})


router.put('/:id', isLoggedIn, checkId, (req, res) => {

  const { id } = req.params
  const { phrase, quantity, year } = req.body

  Challenge
    .findByIdAndUpdate(id, { phrase, quantity, year }, { new: true })
    .then(res.status(200).json({ message: 'Challenge successfully modified' }))
    .catch((err) => console.error(err))
})


router.delete('/:id', isLoggedIn, checkId, (req, res) => {

  const { id } = req.params

  Challenge
    .findByIdAndDelete(id)
    .then(res.status(200).json({ message: 'Challenge successfully deleted' }))
    .catch((err) => console.error(err))
})


module.exports = router

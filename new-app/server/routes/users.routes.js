const express = require("express");
const router = express.Router();
const User = require('./../models/User.model')

router.get('/', (req, res) => {

  User
    .find()
    .select('username name feedback')
    .then((users) => {
      res.status(200).json({ users })
    })
    .catch(err => res.status(500).json({ code: 500, message: "Error retrieving users", err }))

})

router.get('/:id', (req, res) => {

  const { id } = req.params;
  User
    .findById(id)
    .then((user) => {
      res.status(200).json({ user })
    })
    .catch(err => res.status(500).json({ code: 500, message: "Error retrieving user", err }))


})

router.post('/:id/delete', (req, res) => {

  const { id } = req.params;

  User
    .findByIdAndDelete(id)
    .then(() => {
      res.status(200).json({ message: 'User succesfully deleted' })
    })
    .catch(err => res.status(500).json({ code: 500, message: "Error deleting user", err }))

})

router.post('/:id/edit', (req, res) => {

  const { id } = req.params;
  const { } = req.body //depends on the model

  User
    .findByIdAndUpdate(id, {}, { new: true }) //depends on the model
    .then(() => {
      res.status(200).json({ message: 'User succesfully updated' })
    })
    .catch(err => res.status(500).json({ code: 500, message: "Error updating user", err }))

})

router.post('/:id/vote', (req, res) => { })



module.exports = router
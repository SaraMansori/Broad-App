const express = require("express");
const router = express.Router();

const User = require('./../models/User.model')
const bcrypt = require("bcrypt")
const bcryptSalt = 10
const { isBlank } = require("./../utils")


router.post('/signup', (req, res) => {

  const { username, email, pwd } = req.body

  if (isBlank(username) || isBlank(email) || isBlank(pwd)) {
    res.status(400).json({ code: 400, message: 'Please fill in all the fields' })
    return
  }

  User
    .find({ $or: [{ username }, { email }] })
    .then(users => {

      if (users.length === 2) {
        res.status(400).json({ code: 400, message: 'Username and email already exist' })
        return
      }
      else if (users.length === 1) {
        if (users[0].username === username) {
          res.status(400).json({ code: 400, message: 'Username already exists' })
          return
        }
        else if (users[0].email === email) {
          res.status(400).json({ code: 400, message: 'Email already registered' })
          return
        }
      }

      // const salt = bcrypt.genSaltSync(bcryptSalt)
      // const hashPass = bcrypt.hashSync(pwd, salt)

      User
        .create({ username, email, password: hashPass })
        .then(() => res.json({ code: 200, message: 'User created' }))
        .catch(err => res.status(500).json({ code: 500, message: 'DB error while creating user', err: err.message }))
    })
    .catch(err => res.status(500).json({ code: 500, message: 'DB error while fetching user', err: err.message }))
})


router.post('/login', (req, res) => {

  const { username, pwd } = req.body

  if (isBlank(username) || isBlank(pwd)) {
    res.status(400).json({ code: 400, message: 'Please fill in all the fields' })
    return
  }

  User
    .findOne({ username })
    .then(user => {

      if (!user) {
        res.status(401).json({ code: 401, message: 'Username not registered' })
        return
      }

      if (bcrypt.compareSync(pwd, user.password) === false) {
        res.status(401).json({ code: 401, message: 'Incorrect password' })
        return
      }

      req.session.currentUser = user
      res.json(req.session.currentUser)
    })
    .catch(err => res.status(500).json({ code: 500, message: 'DB error while fetching user', err: err.message }))
})


router.get('/logout', (req, res) => {
  req.session.destroy((err) => res.json({ message: 'Logout successful' }));
})


router.post("/isloggedin", (req, res) => {
  req.session.currentUser ? res.json(req.session.currentUser) : res.status(401).json({ code: 401, message: 'Unauthorized' })
})

module.exports = router

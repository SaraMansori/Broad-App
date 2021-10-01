const express = require("express")
const router = express.Router()

const User = require('./../models/User.model')


router.get('/', (req, res) => {
  res.send('Chat server up and running')
})
router.post('/create/:userId', (req, res) => { })
router.post('/delete/:chatId', (req, res) => { })

module.exports = router

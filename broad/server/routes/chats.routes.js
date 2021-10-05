const express = require("express")
const router = express.Router()

const Chat = require('../models/Chat.model');


router.get('/', (req, res) => {

  const id = req.session.currentUser._id

  Chat
    .find({ participants: id })
    .then(chats => res.status(200).json(chats))
    .catch(err => res.status(500).json({ code: 500, message: "Error retrieving chats", err }))
})


router.post('/', (req, res) => {

  const id = req.session.currentUser._id
  const { otherUserId } = req.body

  Chat
    .create({ participants: [id, otherUserId] })
    .then(() => res.status(200).json({ message: 'Chat successfully created' }))
    .catch(err => res.status(500).json({ code: 500, message: "Error creating chat", err }))
})

// router.get('/user-chats', (req, res) => {

//   const id = req.session.currentUser._id

//   Chat
//     .find({ participants: id })
//     .then(chats => res.status(200).json(chats))
//     .catch(err => res.status(500).json({ code: 500, message: "Error retrieving chat requests", err }))

// })

// router.post('/create/:userId', (req, res) => { })
// router.post('/delete/:chatId', (req, res) => { })

module.exports = router

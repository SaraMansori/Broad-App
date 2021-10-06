const router = require("express").Router()

const { isLoggedIn } = require('../middleware')
const Chat = require('../models/Chat.model')
const Message = require('../models/Message.model')


router.get('/', isLoggedIn, (req, res) => {

  const id = req.session.currentUser._id

  Chat
    .find({ participants: id })
    .populate('messages')
    .then(chats => res.status(200).json(chats))
    .catch(err => res.status(500).json({ code: 500, message: "Error retrieving chats", err }))
})


router.post('/', isLoggedIn, (req, res) => {

  const id = req.session.currentUser._id
  const { otherUserId } = req.body

  Chat
    .create({ participants: [id, otherUserId] })
    .then(() => res.status(200).json({ message: 'Chat successfully created' }))
    .catch(err => res.status(500).json({ code: 500, message: "Error creating chat", err }))

})


router.put('/', isLoggedIn, (req, res) => {

  const { message, chat } = req.body

  Message
    .create(message)
    .then(message => Chat.findByIdAndUpdate({ _id: chat }, { $push: { messages: message } }, { new: true }))
    .then(() => res.status(200).json({ message: 'Message successfully created' }))
    .catch(err => res.status(500).json({ code: 500, message: "Error creating message", err }))

})


// TODO router.delete('/', isLoggedIn, (req, res) => { })


module.exports = router

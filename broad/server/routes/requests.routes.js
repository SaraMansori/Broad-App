const express = require("express");
const router = express.Router();

const Request = require('../models/Request.model');
const User = require("../models/User.model");
const Chat = require("../models/Chat.model");


router.get('/', (req, res) => {

  const id = req.session.currentUser._id

  Request
    .find({ receiver: id, status: 'PENDING' })
    .populate('owner')
    .select('owner type') // filtrar los datos de owner. lean? depende de lo que queramos mostrar en la página de requests
    .then(requests => res.status(200).json(requests))
    .catch(err => res.status(500).json({ code: 500, message: "Error retrieving requests", err }))
})


router.get('/:type', (req, res) => {

  const id = req.session.currentUser._id
  const { type } = req.params
  const { otherUserId } = req.query

  Request
    .findOne({
      $or: [{ receiver: id, owner: otherUserId, type },
      { receiver: otherUserId, owner: id, type }]
    })
    //.select('status receiver owner')
    .then(request => res.status(200).json(request))
    .catch(err => res.status(500).json({ code: 500, message: "Error retrieving request", err }))
})

/* router.get('/chat/accepted', (req, res) => {
  const id = req.session.currentUser._id

  Request
    .find({
      $or: [{ receiver: id, type: 'CHAT', status: 'ACCEPTED' },
      { owner: id, type: 'CHAT', status: 'ACCEPTED' }]
    })
    .then(request => res.status(200).json(request))
    .catch(err => res.status(500).json({ code: 500, message: "Error retrieving chat requests", err }))
}) */

router.post('/', (req, res) => {

  // comprobar si existe ya una request del tipo que se intenta crear, y si es así, no crear otra
  // esto está gestionado desde el front con el cambio de botones, pero hay que hacerlo en back
  const { receiver, type } = req.body
  const owner = req.session.currentUser._id // sustituir por un id para probar en postman

  Request
    .create({ owner, receiver, type })
    .then(() => res.status(200).json({ message: 'Request succesfully created' }))
    .catch(err => res.status(500).json({ code: 500, message: "Error creating request", err }))
})


router.put('/', (req, res) => {

  const { id, status } = req.body

  Request
    .findByIdAndUpdate(id, { status }, { new: true })
    .then(updatedRequest => {

      if (updatedRequest.status === 'REJECTED') {

        // Si eliminamos, luego pueden volver a solicitarlo si no lo gestionamos
        // En amistad tiene sentido, en las otras? (chat, exchange)
        // gestionar por tipos?
        res.status(200).json({ message: 'Not managed yet' }) // falta gestionar para chat y exchange
      }
      else if (updatedRequest.status === 'ACCEPTED') {

        if (updatedRequest.type === 'FRIENDSHIP') {

          const newFriendInOwner = User.findByIdAndUpdate(updatedRequest.owner, { $push: { friends: updatedRequest.receiver } }, { new: true })
          const newFriendInReceiver = User.findByIdAndUpdate(updatedRequest.receiver, { $push: { friends: updatedRequest.owner } }, { new: true })

          Promise.all([newFriendInOwner, newFriendInReceiver])
            .then(() => Request.findByIdAndDelete(id))
            .then(() => res.status(200).json({ message: 'Users became friends successfully' }))
            .catch(err => res.status(500).json({ code: 500, message: "Error adding friends to users", err }))

        } else if (updatedRequest.type === 'CHAT') {

          Chat
            .create({ participants: [updatedRequest.owner, updatedRequest.receiver] })
            .then(() => Request.findByIdAndDelete(id))
            .then(() => res.status(200).json({ message: 'Chat succesfully created' }))
            .catch(err => res.status(500).json({ code: 500, message: "Error creating chat", err }))

        } else {
          res.status(200).json({ message: 'Not managed yet' }) // falta gestionar para chat y exchange
        }

      }
    })
    .catch(err => res.status(500).json({ code: 500, message: "Error updating request", err }))

})


router.delete('/', (req, res) => {

  const id = req.session.currentUser._id
  const { otherUserId, type } = req.body

  Request
    .findOneAndDelete({ receiver: otherUserId, owner: id, type })
    .then(() => res.status(200).json({ message: 'Request succesfully deleted' }))
    .catch(err => res.status(500).json({ code: 500, message: "Error deleting request", err }))
})


module.exports = router

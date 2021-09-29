const express = require("express");
const router = express.Router();

const Request = require('../models/Request.model');
const User = require("../models/User.model");


router.get('/', (req, res) => {

  const id = req.session.currentUser._id

  Request
    .find({ receiver: id })
    .then(requests => res.status(200).json({ requests }))
    .catch(err => res.status(500).json({ code: 500, message: "Error retrieving requests", err }))
})


router.post('/create/:type/:receiver', (req, res) => {

  const { type, receiver } = req.params
  const owner = req.session.currentUser._id // sustituir por un id para probar en postman

  Request
    .create({ owner, receiver, type })
    .then(() => res.status(200).json({ message: 'Request succesfully created' }))
    .catch(err => res.status(500).json({ code: 500, message: "Error creating request", err }))
})


router.put('/:id/edit', (req, res) => {

  const { id } = req.params
  const { status } = 'ACCEPTED' //req.body

  Request
    .findByIdAndUpdate(id, { status: "ACCEPTED" }, { new: true })
    .then(updatedRequest => {

      if (updatedRequest.status === 'REJECTED') {
        // Si eliminamos, luego pueden volver a solicitarlo si no lo gestionamos
        // En amistad tiene sentido, en las otras? (chat, exchange)
        // gestionar por tipos?
      }
      else if (updatedRequest.status === 'ACCEPTED') {

        if (updatedRequest.type === 'FRIENDSHIP') {

          const newFriendInOwner = User.findByIdAndUpdate(updatedRequest.owner, { $push: { friends: updatedRequest.receiver } }, { new: true })
          const newFriendInReceiver = User.findByIdAndUpdate(updatedRequest.receiver, { $push: { friends: updatedRequest.owner } }, { new: true })

          Promise.all([newFriendInOwner, newFriendInReceiver]).then(() => {
            res.status(200).json({ message: 'Users became friends successfully' })
          }) // then borrar request?
            .catch(err => res.status(500).json({ code: 500, message: "Error adding friends to users", err }))
        }

      }
    })
    .catch(err => res.status(500).json({ code: 500, message: "Error updating request", err }))

})


module.exports = router

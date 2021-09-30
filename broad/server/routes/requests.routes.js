const express = require("express");
const router = express.Router();

const Request = require('../models/Request.model');
const User = require("../models/User.model");


router.get('/', (req, res) => {

  const id = req.session.currentUser._id

  Request
    .find({ receiver: id, status: 'PENDING' })
    .populate('owner')
    .select('owner type') // filtrar los datos de owner. lean? depende de lo que queramos mostrar en la página de requests
    .then(requests => res.status(200).json(requests))
    .catch(err => res.status(500).json({ code: 500, message: "Error retrieving requests", err }))
})


router.post('/', (req, res) => {

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

          Promise.all([newFriendInOwner, newFriendInReceiver]).then(() => {
            res.status(200).json({ message: 'Users became friends successfully' })
          }) // then borrar request?
            .catch(err => res.status(500).json({ code: 500, message: "Error adding friends to users", err }))
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

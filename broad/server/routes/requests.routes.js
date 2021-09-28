const express = require("express");
const router = express.Router();

const Request = require('../models/Request.model')


router.get('/', (req, res) => {

  const { id } = req.session.currentUser._id

  Request
    .find({ receiver: id })
    .then(requests => res.status(200).json({ requests }))
    .catch(err => res.status(500).json({ code: 500, message: "Error retrieving requests", err }))
})


router.post('/create', (req, res) => {

  const { owner, receiver, status, type } = req.body

  Request
    .create({ owner, receiver, status, type })
    .then(() => res.status(200).json({ message: 'Request succesfully created' }))
    .catch(err => res.status(500).json({ code: 500, message: "Error creating request", err }))
})


router.put('/:id/edit', (req, res) => {

  const { id } = req.params
  const { status } = req.body

  Request
    .findByIdAndUpdate(id, { status }, { new: true })
    .then(updatedRequest => {

      if (updatedRequest.status === 'REJECTED') {
        // Si eliminamos, luego pueden volver a solicitarlo si no lo gestionamos
        // En amistad tiene sentido, en las otras? (chat, exchange)
      }
      else if (updatedRequest.status === 'ACCEPTED') {

        if (updatedRequest.type === 'FRIENDSHIP') {
          // llamar a modelo de user, encontrar owner y receiver y añadir a cada uno el otro en friends array
          updatedRequest.owner
          updatedRequest.receiver
        }

      }

      res.status(200).json({ message: 'Request succesfully updated' })
    })
    .catch(err => res.status(500).json({ code: 500, message: "Error updating request", err }))

})


module.exports = router

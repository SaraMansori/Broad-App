const express = require("express");
const router = express.Router();
const User = require('./../models/User.model')

router.get('/', (req, res) => {

  const userWantsToRead = req.session.currentUser.books.wantsToRead

  User
    .find({ books: { wantsToGive: userWantsToRead } }) //asegurarnos de que esto funciona y que busca en array en base a otro array que incluya alguno de los valores
    .select('username books.wantsToGive')
    .then((users) => {
      res.status(200).json({ users })
    })
    .catch(err => res.status(500).json({ code: 500, message: "Error retrieving exchanges", err }))

})

router.post('/new-request/:bookId', (req, res) => {
})

router.post('/new/:bookId', (req, res) => {

  const currentUserId = req.session.currentUser._id
  const { bookId } = req.params

  //añadir a la lista del usuario registrado el libro a la seccion de prestados y a la lista del otro usuario a la seccion de me han prestado

  let otherParticipantId = ""

  User
    .findById(currentUserId)
    .select(chat.participants)
    .then((participants) => {
      otherParticipantId = participants.filter((participant) => { participant._id !== currentUserId })
    })
    .catch(err => res.status(500).json({ code: 500, message: "Error retrieving exchanges", err }))


})



module.exports = router
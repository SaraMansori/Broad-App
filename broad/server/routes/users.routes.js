const express = require("express");
const router = express.Router();

const User = require('../models/User.model')
const Rating = require('../models/Rating.model')
const ExchangedBooks = require('../models/ExchangedBook.model')

router.get('/', (req, res) => {

  const id = req.session.currentUser._id

  // lean??? (select método de mongoose)
  const usersRating = Rating.find({ type: 'USER' }).lean().select('score receiver')
  const exchangedBooks = ExchangedBooks.find().lean().select('owner receiver')
  const users = User.find({ _id: { $ne: id } }).select('username locationInfo books favoriteGenres friends')
  //username, city, read books, books exchanged

  Promise.all([usersRating, exchangedBooks, users]).then(data => {

    const [usersRating, exchangedBooks, users] = data

    const usersWithFilteredData = users.map(user => {

      const userScoreArr = usersRating.filter(rating => rating.receiver === user._id)

      const reducer = (previousValue, currentValue) => previousValue + currentValue;

      let sum = 0
      let average = 0

      if (userScoreArr.length !== 0) {
        sum = userScoreArr.reduce(reducer)
        average = (sum / userScoreArr.length).toFixed(1)
      }

      const exchangedBooksByUser = exchangedBooks.filter(book => {
        return book.owner === user._id || book.receiver === user._id
      })

      const readBooks = user.books.filter(book => book.status === 'READ')

      return user = {
        _id: user._id,
        username: user.username,
        readBooks: readBooks,
        city: user.locationInfo.city,
        rating: average, // sobre 10 (tenerlo en cuenta en front)
        timesRated: sum,
        exchangedBooksByUser: exchangedBooksByUser.length,
        favoriteGenres: user.favoriteGenres,
        friends: user.friends
      }

    })

    // filter locationinfo y books
    // util de rating, number of exchanged books?

    res.status(200).json(usersWithFilteredData)
  })
    .catch(err => res.status(500).json({ code: 500, message: "Error retrieving users", err }))

})


router.get('/:id', (req, res) => {

  const { id } = req.params

  // añadir también requests? otro modelo
  // Filtrar por lo que queramos mostrar (vista de usuario logged in y vista de los demás)
  // de friends queremos solo la length, filtrar todo
  // si tal cambiar en el estado de la página de front (que hemos puesto array)
  User
    .findById(id)
    .select('email username profileImage name description locationInfo favoriteGenres books friends')
    .then(user => res.status(200).json({ user }))
    .catch(err => res.status(500).json({ code: 500, message: "Error retrieving user", err }))

})

router.delete('/:id', (req, res) => {

  const { id } = req.params

  User
    .findByIdAndDelete(id)
    .then(() => res.status(200).json({ message: 'User succesfully deleted' }))
    .catch(err => res.status(500).json({ code: 500, message: "Error deleting user", err }))

})

router.put('/:infoToUpdate', (req, res) => {

  const id = req.session.currentUser._id
  const { infoToUpdate } = req.params
  let newUserInfo = {}

  if (infoToUpdate === 'signup-info') {
    // Location se modifica en front
    newUserInfo = { name, description, location, profileImage } = req.body
  } else if (infoToUpdate === 'profile') {
    // Location se modifica en front
    // meter cambio de contraseña?
    newUserInfo = { name, email, username, description, profileImage, location } = req.body
  } else if (infoToUpdate === 'genres') {
    newUserInfo = { favoriteGenres } = req.body
  }

  User
    .findByIdAndUpdate(id, newUserInfo, { new: true })
    .then(updatedUser => {
      req.session.currentUser = updatedUser
      res.status(200).json({ message: 'User succesfully updated' })
    })
    .catch(err => res.status(500).json({ code: 500, message: "Error updating user", err }))

})


router.put('/delete-friend', (req, res) => {

  const id = req.session.currentUser._id
  const { friendId } = req.body

  const deleteFriendInUser = User.findByIdAndUpdate(id, { $pull: { friends: friendId } }, { new: true })
  const deleteUserInFriend = User.findByIdAndUpdate(friendId, { $pull: { friends: id } }, { new: true })
  // eliminar accepted request de amistad entre ambos

  Promise.all([deleteFriendInUser, deleteUserInFriend]).then(() => {
    res.status(200).json({ message: 'Friends successfully eliminated' })
  })
    .catch(err => res.status(500).json({ code: 500, message: "Error eliminating friends", err }))
})


router.post('/:id/vote', (req, res) => { })

module.exports = router

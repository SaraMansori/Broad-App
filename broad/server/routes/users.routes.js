const express = require("express");
const router = express.Router();

const User = require('../models/User.model')
const Rating = require('../models/Rating.model')
const ExchangedBooks = require('../models/ExchangedBook.model');


router.get('/', (req, res) => {

  const id = req.session.currentUser._id

  // lean??? (select método de mongoose)
  const usersRating = Rating.find({ type: 'USER' }).lean().select('score receiver')
  const exchangedBooks = ExchangedBooks.find().lean().select('owner receiver')
  const users = User.find({ _id: { $ne: id } }).select('username locationInfo books favoriteGenres friends profileImage')
  //username, city, read books, books exchanged

  Promise.all([usersRating, exchangedBooks, users])
    .then(data => {

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
          friends: user.friends,
          profileImage: user.profileImage
        }

      })

      // filter locationinfo y books
      // util de rating, number of exchanged books?

      res.status(200).json(usersWithFilteredData)
    })
    .catch(err => res.status(500).json({ code: 500, message: "Error retrieving users", err }))

})

router.put('/update/books', (req, res) => {
  //meter middleware que si no peta si el user no está logged
  const userId = req.session.currentUser._id
  const { book } = req.body
  let hasBook = false

  User
    .findById(userId)
    .select('books')
    .then(user => {

      hasBook = user.books.some(userBook => userBook.id === book.id)

      if (book.status) {

        if (hasBook) {
          const newBookStatus = book.status

          return User.findOneAndUpdate({ _id: userId, books: { $elemMatch: { id: book.id } } },
            { $set: { 'books.$.status': newBookStatus } },
            { new: true, 'upsert': true, 'safe': true }
          )

        } else {
          return User.findByIdAndUpdate(userId, { $push: { books: book } })
        }
      } else if (book.wantsToExchange) {
        if (hasBook) {


          return User.findOneAndUpdate({ _id: userId, books: { $elemMatch: { id: book.id } } },
            { $set: { 'books.$.wantsToExchange': book.wantsToExchange } },
            { new: true, 'upsert': true, 'safe': true }
          )

        } else {

          console.log('the user doesnt have the book')

          return User.findByIdAndUpdate(userId, { $push: { books: book } })
        }
      }


    })
    .then((user) => res.status(200).json(user))
    .catch(err => res.status(500).json({ code: 500, message: "Error updating the user's books", err }))

})


router.delete('/:id', (req, res) => {

  const { id } = req.params

  User
    .findByIdAndDelete(id)
    .then(() => res.status(200).json({ message: 'User succesfully deleted' }))
    .catch(err => res.status(500).json({ code: 500, message: "Error deleting user", err }))

})

//let newUserInfo = req.body --> TEO 

router.put('/edit/:infoToUpdate', (req, res) => {

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

  //revisar si funciona al cambiar las rutas

  const id = req.session.currentUser._id
  const { friendId } = req.body

  const deleteFriendInUser = User.findByIdAndUpdate(id, { $pull: { friends: friendId } }, { new: true })
  const deleteUserInFriend = User.findByIdAndUpdate(friendId, { $pull: { friends: id } }, { new: true })

  Promise.all([deleteFriendInUser, deleteUserInFriend])
    .then(() => res.status(200).json({ message: 'Friends successfully eliminated' }))
    .catch(err => res.status(500).json({ code: 500, message: "Error eliminating friends", err }))
})


router.get('/books-to-exchange', (req, res) => {

  User
    .find({ books: { $elemMatch: { wantsToExchange: true } } })
    .select('books')
    .then(usersWithBooksToExchange => {

      const booksToExchange = [].concat(...usersWithBooksToExchange.map(user => {
        return user.books.filter(book => book.wantsToExchange)
      }))

      res.status(200).json(booksToExchange)
    })
    .catch(err => res.status(500).json({ code: 500, message: "Error retrieving books to exchange", err }))
})


//router.post('/:id/vote', (req, res) => { })


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

module.exports = router

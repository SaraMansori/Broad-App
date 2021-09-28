const express = require("express");
const router = express.Router();

const User = require('./../models/User.model')
const Rating = require('./../models/Rating.model')
const ExchangedBooks = require('./../models/ExchangedBook.model')

router.get('/', (req, res) => {

  // lean??? (select método de mongoose)
  const usersRating = Rating.find({ type: 'USER' }).lean().select('score receiver')
  const exchangedBooks = ExchangedBooks.find().lean().select('owner receiver')
  const users = User.find().select('username locationInfo books favoriteGenres')
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
        username: user.username,
        readBooks: readBooks,
        city: user.locationInfo.city,
        rating: average, // sobre 10 (tenerlo en cuenta en front)
        timesRated: sum,
        exchangedBooksByUser: exchangedBooksByUser.length,
        favoriteGenres: user.favoriteGenres
      }

    })

    // filter locationinfo y books
    // util de rating, number of exchanged books?

    res.status(200).json({ usersWithFilteredData })
  })
    .catch(err => res.status(500).json({ code: 500, message: "Error retrieving users", err }))

})

router.get('/:id', (req, res) => {

  const { id } = req.params;
  User
    .findById(id)
    .then((user) => {
      res.status(200).json({ user })
    })
    .catch(err => res.status(500).json({ code: 500, message: "Error retrieving user", err }))

})

router.delete('/:id/delete', (req, res) => {

  const { id } = req.params;

  User
    .findByIdAndDelete(id)
    .then(() => {
      res.status(200).json({ message: 'User succesfully deleted' })
    })
    .catch(err => res.status(500).json({ code: 500, message: "Error deleting user", err }))

})

router.post('/:id/vote', (req, res) => { })

module.exports = router

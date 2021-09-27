const express = require("express");
const router = express.Router();

const User = require('./../models/User.model')
const Rating = require('./../models/Rating.model')
const ExchangedBooks = require('./../models/ExchangedBook.model')


router.get('/', (req, res) => {

  // lean???
  const usersRating = Rating.find({ type: 'USER' }).lean().select('score receiver')
  const exchangedBooks = ExchangedBooks.find().lean().select('owner receiver')
  // filtrar esto de abajo
  const users = User.find().select({ username, locationInfo, books })
  //username, city, read books, books exchanged

  Promise.all([usersRating, exchangedBooks, users]).then(data => {

    const [usersRating, exchangedBooks, users] = data

    const usersWithFilteredData = users.map(user => {

      const userScoreArr = usersRating.filter(rating => {
        rating.receiver === user._id
      })

      const reducer = (previousValue, currentValue) => previousValue + currentValue;

      if (userScoreArr.length !== 0) {
        const sum = userScoreArr.reduce(reducer)
        const average = (sum / userScoreArr.length).toFixed(1)
      }

      const readBooks = user.books.filter(book => book.status === 'READ')

      return user = {
        username: user.username,
        readBooks: readBooks,
        city: user.locationInfo.city,
        rating: average, // sobre 10 (tenerlo en cuenta en front)
        timesRated: sum,
        // TODO: exchangedBooksNo: 
      }

      /*
      user.books.filter(book => book.status === 'READ')
      user.city = user.locationInfo.city
      delete user.locationInfo
      //delete user.locationInfo.country
      //delete user.locationInfo.address
      */
    })

    // filter locationinfo y books
    // util de rating, number of exchanged books?

    res.status(200).json({ usersRating, exchangedBooks, users })
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

router.post('/:id/delete', (req, res) => {

  const { id } = req.params;

  User
    .findByIdAndDelete(id)
    .then(() => {
      res.status(200).json({ message: 'User succesfully deleted' })
    })
    .catch(err => res.status(500).json({ code: 500, message: "Error deleting user", err }))

})

router.post('/:id/edit', (req, res) => {

  const { id } = req.params;
  const { } = req.body //depends on the model

  User
    .findByIdAndUpdate(id, {}, { new: true }) //depends on the model
    .then(() => {
      res.status(200).json({ message: 'User succesfully updated' })
    })
    .catch(err => res.status(500).json({ code: 500, message: "Error updating user", err }))

})

router.post('/:id/vote', (req, res) => { })



module.exports = router

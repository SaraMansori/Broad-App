const express = require("express");
const router = express.Router();
const User = require('../models/User.model')

router.get('/:userId', (req, res) => {

  const { userId } = req.params;

  User
    .findById(userId)
    .select('username books')
    .then((books) => {
      res.status(200).json({ books })
    })
    .catch(err => res.status(500).json({ code: 500, message: "Error retrieving books", err }))

})

router.post('/:userId/:section/:action/:book_id', (req, res) => {

  const { userId, section, action, book_id } = req.params

  switch (action) {
    case 'add':
      User
        .findByIdAndUpdate(id, { $push: { books: { [section]: book_id } } })
        .then(() => res.status(200).json({ message: 'Book added succesfully' }))
      break;
    case 'remove':
      User
        .findByIdAndUpdate(id, { $pull: { books: { [section]: book_id } } })
        .then(() => res.status(200).json({ message: 'Book removed succesfully' }))
      break;
  }
})

module.exports = router

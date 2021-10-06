const router = require("express").Router()

const { isLoggedIn } = require('../middleware')
const APIHandler = require('../services/APIHandler')
const API = new APIHandler


router.get('/search-book/:text', isLoggedIn, (req, res) => {

  const { text } = req.params

  API
    .getBooks(text)
    .then(books => res.status(200).json(books.data.items))
    .catch(err => res.status(500).json({ code: 500, message: "Error retrieving books", err }))

})


router.get('/search-book-by/:type/:text', isLoggedIn, (req, res) => {

  const { type, text } = req.params
  if (text.length === 0) text = ''

  const types = {
    category: API.getBooksByCategory,
    title: API.getBooksByTitle,
    author: API.getBooksByAuthor,
    isbn: API.getBooksByISBN,
  }

  types[type](text)
    .then(books => res.status(200).json(books.data.items))
    .catch(err => res.status(500).json({ code: 500, message: "Error retrieving books", err }))

})


module.exports = router

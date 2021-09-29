const router = require("express").Router();
const APIHandler = require('../services/APIHandler')
const API = new APIHandler

router.get("/search-book/:text", (req, res) => {

  const { text } = req.params

  API
    .getBooks(text)
    .then(books => res.json(books.data.items))
    .catch(err => console.error(err))

})

router.get("/search-book-by/:type/:text", (req, res) => {

  const { type, text } = req.params
  if (text.length === 0) text = ""

  const types = {
    category: API.getBooksByCategory,
    title: API.getBooksByTitle,
    author: API.getBooksByAuthor,
    isbn: API.getBooksByISBN,
  }

  types[type](text)
    .then((books) => res.json(books.data.items))
    .catch(err => console.error(err))

})

module.exports = router;
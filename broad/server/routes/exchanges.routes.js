const router = require("express").Router()

const { isLoggedIn } = require('../middleware')
const ExchangedBook = require("../models/ExchangedBook.model")
const APIHandler = require('../services/APIHandler')
const API = new APIHandler


router.get('/', isLoggedIn, (req, res) => {

  const id = req.session.currentUser._id

  ExchangedBook
    .find({ $or: [{ receiver: id }, { owner: id }] })
    .select('id owner receiver startDate endDate')
    .then(exchanges => {

      const exchangesCopy = JSON.parse(JSON.stringify(exchanges))

      const promises = exchangesCopy.map(exchange => {

        return API
          .getBookById(exchange.id)
          .then(APIBook => {

            exchange = {
              exchangeId: exchange._id,
              id: exchange.id,
              owner: exchange.owner,
              receiver: exchange.receiver,
              startDate: exchange.startDate,
              title: APIBook.data.volumeInfo.title,
              authors: APIBook.data.volumeInfo.authors,
            }

            if (exchange.endDate) {
              exchange.endDate = exchange.endDate
            } // TODO ?

            if (APIBook.data.volumeInfo.imageLinks?.thumbnail) {
              exchange.image = APIBook.data.volumeInfo.imageLinks.thumbnail
            }

            return exchange
          })
          .catch(err => res.status(500).json({ code: 500, message: "Error retrieving book by id", err }))
      })
      Promise.all(promises).then(results => res.status(200).json(results))
    })
    .catch(err => res.status(500).json({ code: 500, message: "Error retrieving books to exchange", err }))
})


module.exports = router

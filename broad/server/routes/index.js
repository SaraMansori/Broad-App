const router = require("express").Router()

router.use("/auth", require('./auth.routes'))
router.use("/users", require('./users.routes'))
router.use("/exchanges", require('./exchanges.routes'))
//router.use("/user-books", require('./userBooks.routes'))
router.use("/quotes", require('./quotes.routes'))
router.use("/friends", require('./friends.routes'))
router.use("/chat", require('./chat.routes'))
router.use("/challenges", require('./challenges.routes'))
router.use("/requests", require('./requests.routes'))
router.use("/books", require('./books.routes'))
router.use("/uploads", require('./uploads.routes'))

module.exports = router

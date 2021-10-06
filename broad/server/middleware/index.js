const mongoose = require("mongoose")

module.exports = {

  isLoggedIn: (req, res, next) => {
    req.session.currentUser ? next() : res.status(401).json({ code: 401, message: 'Unauthorized' })
  },

  checkId: (req, res, next) => {
    mongoose.Types.ObjectId.isValid(req.params.id) ? next() : res.status(401).json({ code: 400, message: 'Bad Request: invalid ID' })
  },

  /*
  checkRoles: (...roles) => (req, res, next) => {
   roles.includes(req.session.currentUser.role) ? next() : res.status(401).json({ code: 401, message: 'Unauthorized' })
  }
  */

}

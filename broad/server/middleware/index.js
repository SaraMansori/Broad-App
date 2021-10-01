const mongoose = require("mongoose")

module.exports = {

  // HAY QUE ADAPTAR TODOS LOS MIDDLEWARE PARA REACT

  /*
  isLoggedIn: (req, res, next) => {
    req.session.currentUser ? next() : res.render('pages/auth/login', { errorMsg: 'Login to continue' })
  },

  checkRoles: (...roles) => (req, res, next) => {
    roles.includes(req.session.currentUser.role) ? next() : res.redirect('/login')
  },

  // Esto desde front (utils en back)
  checkId: (req, res, next) => {
    mongoose.Types.ObjectId.isValid(req.params.id) ? next() : res.redirect('/')
  },
  */

}

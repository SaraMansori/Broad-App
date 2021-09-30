const { Mongoose } = require("mongoose");

module.exports = {

  // Ejemplo en beyond mern - coasters routes get /:id
  // Desde la ruta enviamos error 400 y en el front, en el catch, gestionamos la redirección o la pag 404.
  isValidId: id => Mongoose.Types.ObjectId.isValid(id),

  //userIsAdmin: user => user.role === 'ADMIN',


  //capitalize: text => text.charAt(0).toUpperCase() + text.substring(1),

  /*
  formatDate: date => {

    let month = '' + (date.getMonth() + 1)
    let day = '' + date.getDate()
    let year = date.getFullYear()

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-')
  },
  */

  // TODO quitar la interrogación para uso final (o quitar email de signup (isblank blabla))

  isBlank: value => value?.length === 0 || !value?.match(/\S/),


  // Crear util para calcular la media de ratings de cada usuario/quote

  // Crear util para sumar libros exchanged de un user? (dados y recibidos)

  /*
  handleValidationError: (err) => {
    const errors = [];

    if (err instanceof mongoose.Error.ValidationError) Object.values(err.errors).forEach(el => errors.push(elm.message))
    
    return errors
  }
  */

}
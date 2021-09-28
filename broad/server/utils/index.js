module.exports = {

  //userIsAdmin: user => user.role === 'ADMIN',


  //capitalize: text => text.charAt(0).toUpperCase() + text.substring(1),


  formatDate: date => {

    let month = '' + (date.getMonth() + 1)
    let day = '' + date.getDate()
    let year = date.getFullYear()

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-')
  },


  isBlank: value => value?.length === 0 || !value?.match(/\S/),


  // Crear util para calcular la media de ratings de cada usuario/quote

  // Crear util para sumar libros exchanged de un user? (dados y recibidos)

}
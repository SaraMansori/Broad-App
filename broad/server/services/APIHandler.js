const axios = require('axios');

class APIHandler {

  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.GOOGLE_BOOKS_API_URL}`,
      withCredentials: true
    })
  }

  getBooks = text => this.instance.get(`?q=${text}&key=${process.env.GOOGLE_BOOKS_API_KEY}`)

  getBooksByCategory = category => this.instance.get(`?q=subject:${category}&key=${process.env.GOOGLE_BOOKS_API_KEY}`)

  getBooksByTitle = title => this.instance.get(`?q=intitle:${title}&key=${process.env.GOOGLE_BOOKS_API_KEY}`)

  getBooksByAuthor = author => this.instance.get(`?q=inauthor:${author}&key=${process.env.GOOGLE_BOOKS_API_KEY}`)

  getBooksByISBN = isbn => this.instance.get(`?q=isbn:${isbn}&key=${process.env.GOOGLE_BOOKS_API_KEY}`)

  getBookById = id => this.instance.get(`/${id}?key=${process.env.GOOGLE_BOOKS_API_KEY}`)

}

module.exports = APIHandler;
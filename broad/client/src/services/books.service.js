import axios from 'axios';

class BookService {
  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.GOOGLE_BOOKS_API_URL}?key=${process.env.GOOGLE_BOOKS_API_URL}`,
      withCredentials: true
    })
  }

  getBooks = () => this.instance.get("/")
  getBooksByCategory = (category) => this.instance.get(`?q=subject:${category}`)
}

export default BookService;

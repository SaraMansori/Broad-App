import axios from 'axios';

class BookService {
  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/books`,
      withCredentials: true
    })
  }

  getBooks = (text) => this.instance.get(`/searchBook/${text}`)
  getBooksByType = (type, text) => this.instance.get(`/search-book-by/${type}/${text}`)

}

export default BookService;

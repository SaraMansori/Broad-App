import axios from 'axios'


class ExchangesService {

  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_BASE_URL}/exchanges`,
      withCredentials: true,
    })
  }

  getExchangedBooks = id => this.instance.get(`/${id}`)

}


export default ExchangesService

import axios from 'axios'


class ExchangesService {

  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_BASE_URL}/exchanges`,
      withCredentials: true,
    })
  }

  getExchangedBooks = () => this.instance.get('/')

}


export default ExchangesService

import axios from 'axios';
//import { generateQueryString } from '../utils/queryParser'

class RequestsService {
  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/requests`,
      withCredentials: true
    })
  }

  getRequests = () => this.instance.get('/')

  manageRequest = (id, status) => this.instance.put('/', { id, status })

  createRequest = (receiver, type, book) => this.instance.post('/', { receiver, type, book })

  deleteRequest = (otherUserId, type) => this.instance.delete('/', { data: { otherUserId, type } })

  getRequest = (otherUserId, type) => this.instance.get(`/${type}?otherUserId=${otherUserId}`)

  getExchangeRequest = (otherUserId, bookId) => this.instance.get(`/exchange?otherUserId=${otherUserId}&bookId=${bookId}`)

}

export default RequestsService;

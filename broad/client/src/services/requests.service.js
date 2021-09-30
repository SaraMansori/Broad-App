import axios from 'axios';

class RequestsService {
  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/requests`,
      withCredentials: true
    })
  }

  getUserRequests = () => this.instance.get('/')

}

export default RequestsService;
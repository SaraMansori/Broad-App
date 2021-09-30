import axios from 'axios';

class RequestsService {
  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/requests`,
      withCredentials: true
    })
  }

  getRequests = () => this.instance.get('/')

  manageRequest = (id, status) => this.instance.put(`${id}/edit`, { status })

}

export default RequestsService;
import axios from 'axios';

class RequestsService {
  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/requests`,
      withCredentials: true
    })
  }

  getRequests = () => this.instance.get('/')

  manageRequest = (id, status) => this.instance.put('/', { id, status })

  createRequest = (receiver, type) => this.instance.post('/', { receiver, type })

  deleteRequest = (otherUserId, type) => this.instance.delete('/', { data: { otherUserId, type } })

  getRequest = (otherUserId, type) => this.instance.get(`/${type}?otherUserId=${otherUserId}`)

  getAcceptedChatRequests = () => this.instance.get(`/chat/accepted`)

}

export default RequestsService;

import axios from 'axios';

class ChatService {
  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/chat`,
      withCredentials: true,
    });
  }

  getChat = () => {
    return this.instance.get(`/edit/signup-info`, {})
  }

}

export default ChatService;

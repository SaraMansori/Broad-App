import axios from 'axios'


class ChatService {
  
  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_BASE_URL}/chats`,
      withCredentials: true,
    })
  }

  getUserChats = () => this.instance.get('/')

  createChat = otherUserId => this.instance.post('/', { otherUserId })

  addMessage = (message, chat) => this.instance.put('/', { message, chat })

}


export default ChatService

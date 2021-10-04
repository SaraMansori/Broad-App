
import { useEffect, useState, useContext } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import ChatItem from './ChatItem'
import UserContext from '../../UserContext'
import RequestsService from '../../services/requests.service'

const ChatPage = () => {

  const loggedUser = useContext(UserContext)
  const requestsService = new RequestsService()
  const [chats, setChats] = useState([])

  /*  useEffect(() => {
     if (loggedUser) {
       requestsService
         .getAcceptedChatRequests()
         .then(res => {
           res.data.forEach(request => {
             return request.owner === loggedUser._id ? setChats(chats.push(request.receiver)) : setChats(chats.push(request.owner))
           })
         })
         .catch(err => console.error(err))
     }
   }, [loggedUser]) */

  return (
    <>
      <Router>
        <Container>
          <h1>Tus chats disponibles</h1>
          <ChatItem />
        </Container>
      </Router>
    </>
  );
}

export default ChatPage;

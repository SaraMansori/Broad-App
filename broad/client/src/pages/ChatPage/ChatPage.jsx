
import { useEffect, useState, useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ChatItem from './ChatItem'
import UserContext from '../../UserContext'
import { useLocation, useHistory } from 'react-router-dom'
import queryString from 'query-string'
import Chat from './Chat'
import ChatsService from '../../services/chats.service'


const ChatPage = () => {

  const { loggedUser } = useContext(UserContext)
  const location = useLocation()
  const data = queryString.parse(location.search)
  let history = useHistory()
  //const usersService = new UsersService()

  const chatsService = new ChatsService()
  const [chats, setChats] = useState([])
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [otherUser, setOtherUser] = useState(undefined)
  const [currentChat, setCurrentChat] = useState(undefined)


  const handleChat = (isOpen, chat, otherUser) => {

    if (isOpen) {
      history.push('/chats')
      setCurrentChat(undefined)
    } else if (!isOpen) {
      setCurrentChat(chat)
      setOtherUser(otherUser)
      history.push(`/chats?user=${otherUser._id}`)
    }
  }

  //const size = isChatOpen ? 6 : 6

  /*   const handleClick = (otherUser, chat, btnStatus) => {
      setIsChatOpen(!btnStatus)
      !data.otherUser ? history.push(`/chats?otherUser=${otherUser._id}`) : history.push(`/chats`)
      setChat(chat)
    } */

  const changeActiveChatUser = user => setOtherUser(user)

  useEffect(() => {
    if (loggedUser) {
      chatsService
        .getUserChats()
        .then(res => {
          setChats(res.data)
        })
        .catch(err => console.error(err))
    }
  }, [loggedUser])

  useEffect(() => {
    setIsChatOpen(!!data)
  }, [data])

  return (
    <>
      <Container>
        <h1>Tus chats disponibles</h1>
        <Row>
          <Col md={6}>
            {chats.map((chat, i) =>
              <ChatItem key={`${chat}-${i}`} setIsChatOpen={setIsChatOpen} chat={chat} currentChat={currentChat} handleChat={handleChat} changeActiveChatUser={changeActiveChatUser} isChatOpen={isChatOpen} otherUser={otherUser} />
            )}
          </Col>
          <Col md={6}>
            {isChatOpen && currentChat &&
              <Chat otherUser={otherUser} chat={currentChat} />
            }
          </Col>
        </Row>
      </Container>
    </>
  )

}


export default ChatPage

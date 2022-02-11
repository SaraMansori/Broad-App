
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

  const handleClick = () => {
    history.push(`/chats`)
    setCurrentChat(undefined)
  }

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
    <div style={{ marginBottom: '6rem' }}>
      <Container>
        <h1 className='mb-5'>Your chats 💬</h1>
        <Row>
          <Col style={{ maxHeight: '100%' }} md={6}>
            {chats.map((chat, i) =>
              <ChatItem key={`${chat}-${i}`} setIsChatOpen={setIsChatOpen} chat={chat} currentChat={currentChat} handleChat={handleChat} changeActiveChatUser={changeActiveChatUser} isChatOpen={isChatOpen} otherUser={otherUser} />
            )}
          </Col>
          <Col style={{ maxHeight: '100%' }} md={6}>
            {isChatOpen && currentChat &&
              <Chat style={{ maxHeight: '100%' }} otherUser={otherUser} chat={currentChat} handleClick={handleClick} />
            }
            {!isChatOpen &&
              <p>Chat Animation</p>
            }
          </Col>
        </Row>
      </Container>
    </div>
  )

}


export default ChatPage

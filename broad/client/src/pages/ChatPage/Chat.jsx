import { OuterContainer, ChatContainer, MessageBox } from '../../components/styledComponents/ChatStyle'
import InfoBar from './InfoBar/InfoBar'
import Input from './Input'
import Messages from './Messages'
import { useLocation } from 'react-router-dom'
import React, { useState, useEffect, useContext } from 'react'
import UserContext from '../../UserContext'
import io from 'socket.io-client'
import ChatsService from '../../services/chats.service'

let socket


const Chat = ({ chat, otherUser, handleClick }) => {

  const ENDPOINT = 'http://localhost:5005'
  const location = useLocation()
  let chatsService = new ChatsService()

  const [room, setRoom] = useState('')
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')

  const { loggedUser } = useContext(UserContext)


  const setSocketConfig = () => {
    const username = loggedUser.username

    socket = io(ENDPOINT, {
      cors: {
        origin: "http://localhost:5005",
        credentials: true
      }, transports: ['websocket']
    })
    const roomName = [...otherUser._id.split(""), ...loggedUser._id.split("")].sort().join("")
    setRoom(`${roomName}`)

    socket.emit('join', { username, room: room }, () => {
      setInitialMessages()
    })

    socket.on('message', (message) => {
      updateMessages(message)
    })
  }
  const setInitialMessages = () => setMessages(chat.messages)
  const sendMessage = (e) => {

    e.preventDefault()

    const parsedMessage = {
      text: message,
      owner: loggedUser._id
    }

    if (message) {
      socket.emit('sendMessage', message, () => {
        setMessage('')
        updateMessages(parsedMessage)
      })
    }

    chatsService
      .addMessage(parsedMessage, chat._id)
      .then(res => console.log(res))
      .catch(err => console.error(err))

  }
  const updateMessages = (message) => setMessages([...messages, message])



  useEffect(() => {
    //config socket
    if (loggedUser?.username && otherUser) {

      setSocketConfig()

      return () => {
        socket.disconnect();
        socket.off()
        setMessages([])
      }

    }

  }, [ENDPOINT, location.search, loggedUser, otherUser])


  return loggedUser ? (
    <OuterContainer>
      <ChatContainer>

        <InfoBar otherUser={otherUser} handleClick={handleClick} />
        <MessageBox>
          <Messages style={{ backgroundColor: 'red' }} prevMessages={chat?.messages} messages={messages} username={loggedUser.username} />
        </MessageBox>
        <Input message={message} sendMessage={sendMessage} setMessage={setMessage} />

      </ChatContainer>
    </OuterContainer>
  ) : "cargando.."

}


export default Chat

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
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  const { loggedUser } = useContext(UserContext)

  const sendMessage = (e) => {

    e.preventDefault()

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''))
    }

    const parsedMessage = {
      text: message,
      owner: loggedUser._id
    }

    chatsService
      .addMessage(parsedMessage, chat._id)
      .then(res => console.log(res))
      .catch(err => console.error(err))

  }

  useEffect(() => {

    if (loggedUser?.username && otherUser) {

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
      })

      return () => {
        socket.disconnect();
        socket.off()
        setMessages([])
      }

    }

  }, [ENDPOINT, location.search, loggedUser, otherUser])

  useEffect(() => {
    if (loggedUser?.username && socket) {

      socket.on('message', (message) => {
        setMessages([...messages, message])
      })

      //     /*  socket.on("roomData", ({ users }) => {
      //        setUsers(users)
      //      }) */
    }

  }, [messages, loggedUser, socket])

  return loggedUser ? (
    <OuterContainer>
      <ChatContainer>

        <InfoBar otherUser={otherUser} handleClick={handleClick} />
        <MessageBox>
          <Messages style={{ backgroundColor: 'red' }} messages={messages} username={loggedUser.username} />
        </MessageBox>
        <Input message={message} sendMessage={sendMessage} setMessage={setMessage} />

      </ChatContainer>
    </OuterContainer>
  ) : "cargando.."

}


export default Chat

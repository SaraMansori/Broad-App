import { OuterContainer, ChatContainer, MessageBox } from '../../components/styledComponents/ChatStyle'
import InfoBar from './InfoBar/InfoBar'
import Input from './Input'
import Messages from './Messages'
import { useLocation } from 'react-router-dom'
import React, { useState, useEffect, useContext } from 'react'
import UserContext from '../../UserContext'
import queryString from 'query-string'
import io from 'socket.io-client'


let socket;
const Chat = ({ chat, otherUser, handleClick }) => {

  const ENDPOINT = 'http://localhost:5005'
  const location = useLocation()

  const [room, setRoom] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  const { loggedUser } = useContext(UserContext)

  const sendMessage = (e) => {

    e.preventDefault()

    if (message) {
      // console.log(message, "Vale jefa, no se moleste por favor.")
      socket.emit('sendMessage', message, () => setMessage(''))
    }
  }

  useEffect(() => {

    if (loggedUser?.username && otherUser) {

      const username = loggedUser.username
      // const data = queryString.parse(location.search)
      // const otherParticipant = chat.participants.find(participant => participant !== loggedUser._id)

      socket = io(ENDPOINT, {
        cors: {
          origin: "http://localhost:5005",
          credentials: true
        }, transports: ['websocket']
      })
      console.log("HE CREATO EL SOCKET MADAFAKA")
      const roomName = [...otherUser._id.split(""), ...loggedUser._id.split("")].sort().join("")
      setRoom(`${roomName}`)

      socket.emit('join', { username, room: roomName }, () => {
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
  ) : "cargando..";
}

export default Chat;
import React, { useState, useEffect, useContext } from 'react'
import UserContext from '../../UserContext'
import queryString from 'query-string'
import io from 'socket.io-client'
import { OuterContainer, ChatContainer } from '../../components/styledComponents/ChatStyle'

import { useLocation } from 'react-router-dom'
import { Card, Button, Row, Col } from 'react-bootstrap';


const ChatPage = () => {
  let socket;
  const ENDPOINT = 'http://localhost:5005'


  const location = useLocation()
  const loggedUser = useContext(UserContext)
  //const loggedUsername = loggedUser?.username

  //const [room, setRoom] = useState('')
  //const [username, setUsername] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [isChatOpen, setIsChatOpen] = useState(false)


  useEffect(() => {

    if (loggedUser?.username) {

      const username = loggedUser.username
      const room = 'room'
      const data = queryString.parse(location.search)

      // eslint-disable-next-line react-hooks/exhaustive-deps
      socket = io(ENDPOINT, {
        cors: {
          origin: "http://localhost:5005",
          credentials: true
        }, transports: ['websocket']
      })

      //setRoom('room')
      socket.emit('join', { username, room }, () => {
      })

      return () => {
        socket.disconnect();
        socket.off()
      }

    }

  }, [ENDPOINT, location.search, loggedUser])

  useEffect(() => {
    if (loggedUser?.username) {
      socket.on('message', (message) => {
        setMessages(...messages, message)
      })
    }
  }, [messages])



  const handleClick = () => {
    setIsChatOpen(!isChatOpen)
  }

  const size = isChatOpen ? 6 : 12

  //style={{ height: '80vh' }}

  const sendMessage = (e) => {

    e.preventDefault()

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''))
    }
  }

  console.log(message, messages)

  return (
    <>

      <Row>
        <Col md={size}>
          <Card body>
            <p>Your Name: {loggedUser?.username}</p>
            <p>This is some text within a card body.</p>
            <Button onClick={() => handleClick()}>{`${isChatOpen ? 'Close' : 'Open'} Chat`}</Button>
          </Card>
        </Col>

        {isChatOpen &&
          <Col md={size}>
            <OuterContainer>
              <ChatContainer>
                <input value={message} onChange={(e) => { setMessage(e.target.value) }}
                  onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null} />
              </ChatContainer>
            </OuterContainer>
          </Col>}
      </Row>

    </>
  );
}

export default ChatPage;

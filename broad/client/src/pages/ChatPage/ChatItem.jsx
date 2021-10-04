import React, { useState, useEffect, useContext } from 'react'
import UserContext from '../../UserContext'
import queryString from 'query-string'
import io from 'socket.io-client'
import { OuterContainer, ChatContainer } from '../../components/styledComponents/ChatStyle'
import InfoBar from './InfoBar/InfoBar'


import { useLocation } from 'react-router-dom'
import { Card, Button, Row, Col, Form } from 'react-bootstrap';

let socket;

const ChatPage = () => {


  const ENDPOINT = 'http://localhost:5005'

  const location = useLocation()
  const loggedUser = useContext(UserContext)

  const [room, setRoom] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [isChatOpen, setIsChatOpen] = useState(false)

  useEffect(() => {

    if (loggedUser?.username) {

      const username = loggedUser.username
      const data = queryString.parse(location.search)

      socket = io(ENDPOINT, {
        cors: {
          origin: "http://localhost:5005",
          credentials: true
        }, transports: ['websocket']
      })

      setRoom('room')
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
        setMessages([...messages, message])
      })
    }
  }, [messages, loggedUser])

  // useEffect(() => {
  // if (loggedUser?.username) {

  //   socket.on('sendMessage', (message) => {
  //     setMessages([...messages, message])
  //   })
  // }
  // }, [messages])


  const handleClick = () => {
    setIsChatOpen(!isChatOpen)
  }

  const size = isChatOpen ? 6 : 12

  const sendMessage = (e) => {

    e.preventDefault()

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''))
    }
  }

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
                <InfoBar room={room} handleClick={handleClick} />

                <Form.Group>
                  <Row>
                    <div className="col-10">
                      <Form.Control
                        style={{ resize: "none", width: "100%" }} as="textarea" rows={3} placeHolder="Type a message..."
                        value={message}
                        onChange={(e) => { setMessage(e.target.value) }}
                        onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null} />
                    </div>
                    <div className="col-2">
                      <Button style={{ width: "100%", height: "100%", padding: "0" }}>Send</Button>
                    </div>
                  </Row>
                </Form.Group>

                {/* <input value={message} onChange={(e) => { setMessage(e.target.value) }}
                  onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null} /> */}
              </ChatContainer>
            </OuterContainer>
          </Col>}
      </Row>

    </>
  );
}

export default ChatPage;

/*
import React, { useState, useEffect, useContext } from 'react'
import UserContext from '../../UserContext'
import queryString from 'query-string'
import io from 'socket.io-client'
import Link from 'react-router-dom'
import { Card, Button, Row, Col } from 'react-bootstrap';


const ChatPage = () => {

  const loggedUser = useContext(UserContext)

  useEffect(() => {
    const ENDPOINT = 'process.env.REACT_APP_API_URL'
    //const data = queryString.parse(location.search)
    //console.log(data)
    //console.log(location.search)

    socket = io(ENDPOINT)

    console.log(socket)
  }, [])

  let socket;

  const [loggedUserName, setName] = useState(loggedUser?.username)
  const [room, setRoom] = useState('')
  const [isChatOpen, setIsChatOpen] = useState(false)

  const handleClick = () => {
    setIsChatOpen(!isChatOpen)
  }

  return (
    <>
      <h1>Ventana de Chat</h1>
      {isChatOpen ?
        <Row>
          <Col md={6}>
            <Card body>
              <p>Your Name: {loggedUser?.username}</p>
              <p>This is some text within a card body.</p>
              <Button onClick={() => handleClick()}>Close Chat</Button>
            </Card>
          </Col>
          <Col md={6}>
            <Card style={{ height: '80vh' }}>
              <p>Whatever</p>
            </Card>
          </Col>
        </Row> :
        <Row>
          <Col md={12}>
            <Card body>
              <p>Your Name: {loggedUser?.username}</p>
              <p>This is some text within a card body.</p>
              <Button onClick={() => handleClick()}>Open Chat</Button>
            </Card>
          </Col>
        </Row>
      }
    </>
  );
}

export default ChatPage;
*/
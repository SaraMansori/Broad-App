/*
import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import { Link, useLocation } from 'react-router-dom'
import { Card, Button, Row, Col } from 'react-bootstrap';


const ChatPage = (props) => {
  let socket;

  const location = useLocation()
  const ENDPOINT = 'http://localhost:5005'
  const username = props.loggedUser?.username
  const [loggedUserName, setName] = useState(username)


  useEffect(() => {
    const data = queryString.parse(location.search)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    socket = io(ENDPOINT, {
      cors: {
        origin: "http://localhost:5005",
        credentials: true
      }, transports: ['websocket']
    })

    console.log(username)
    setName(username)

    socket.emit('join', { username }, () => {
    })

    return () => {
      socket.emit('disconnect');

      socket.off()
    }

  }, [ENDPOINT, location.search])


  const [isChatOpen, setIsChatOpen] = useState(false)

  const handleClick = () => {
    setIsChatOpen(!isChatOpen)
  }

  const size = isChatOpen ? 6 : 12

  return (
    <>

      <Row>
        <Col md={size}>
          <Card body>
            <p>Your Name: {loggedUserName}</p>
            <p>This is some text within a card body.</p>
            <Button onClick={() => handleClick()}>{`${isChatOpen ? 'Close' : 'Open'} Chat`}</Button>
          </Card>
        </Col>

        {isChatOpen &&
          <Col md={size}>
            <Card style={{ height: '80vh' }}>
              <p>Whatever</p>
            </Card>
          </Col>}

      </Row>


      {/* <Row>
          <Col md={size}>
            <Card body>
              <p>Your Name: {props.loggedUser?.username}</p>
              <p>This is some text within a card body.</p>
              <Button onClick={() => handleClick()}>Open Chat</Button>
            </Card>
          </Col>
        </Row> */}

    </>
  );
}

export default ChatPage;
*/
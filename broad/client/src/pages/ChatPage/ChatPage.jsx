
import ChatItem from './ChatItem'
import { Container } from 'react-bootstrap'

import { BrowserRouter as Router } from 'react-router-dom'



const ChatPage = () => {

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

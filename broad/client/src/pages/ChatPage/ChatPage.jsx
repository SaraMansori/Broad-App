
import ChatItem from './ChatItem'
import { Container } from 'react-bootstrap'
import { OuterContainer, ChatContainer } from '../../components/styledComponents/ChatStyle'

import { BrowserRouter as Router, Route } from 'react-router-dom'



const ChatPage = (props) => {

  return (
    <>
      <Router>
        <Container>
          <h1>Tus chats disponibles</h1>
          <ChatItem loggedUser={props.loggedUser} />
        </Container>
      </Router>
    </>
  );
}

export default ChatPage;

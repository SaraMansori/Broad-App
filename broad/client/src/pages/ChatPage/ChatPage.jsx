import ChatItem from './ChatItem'
import { Container } from 'react-bootstrap'



const ChatPage = () => {

  return (
    <>
      <Container>
        <h1>Tus chats disponibles</h1>
        <ChatItem />
      </Container>
    </>
  );
}

export default ChatPage;
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from './Message'

const Messages = ({ messages, username }) => {
  return (
    <ScrollToBottom>
      <div style={{ maxHeight: "60vh" }}>
        {messages.map((message, i) =>
          <div key={i}>
            <Message message={message} username={username} />
          </div>)}
      </div>
    </ ScrollToBottom>
  );
}

export default Messages;
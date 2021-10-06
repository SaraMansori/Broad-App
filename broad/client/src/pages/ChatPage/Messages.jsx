import ScrollToBottom from 'react-scroll-to-bottom'
import React, { useContext } from 'react'
import Message from './Message'
import UserContext from '../../UserContext'

const Messages = ({ messages, otherUser }) => {

  const { loggedUser } = useContext(UserContext)
  const displayMessages = (messagesToShow) => messagesToShow.map((message, i) => <Message key={`message${loggedUser}${i}`} message={message} otherUser={otherUser} />)

  return (
    <ScrollToBottom initialScrollBehavior='smooth' mode='bottom' >
      <div style={{ maxHeight: "60vh" }}>

        {displayMessages(messages)}

      </div>
    </ScrollToBottom>
  )

}


export default Messages

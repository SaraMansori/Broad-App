import ScrollToBottom from 'react-scroll-to-bottom'
import React, { useContext } from 'react'
import Message from './Message'
import UserContext from '../../UserContext'

const Messages = ({ prevMessages, messages }) => {

  console.log('messaaageees', messages)

  const { loggedUser } = useContext(UserContext)

  const parsedPrevMessages = prevMessages.map(message => {

    return {
      user: message.owner,
      text: message.text
    }
  })

  console.log(parsedPrevMessages)

  const displayMessages = (messagesToShow) => messagesToShow.map((message, i) => <Message key={i} message={message} username={loggedUser.username} />)

  return (
    <ScrollToBottom >
      <div style={{ maxHeight: "60vh" }}>

        {displayMessages(messages)}

      </div>
    </ScrollToBottom>
  )

}


export default Messages

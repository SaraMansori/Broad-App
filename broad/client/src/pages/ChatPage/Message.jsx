import { MessageContainerEnd, MessageContainerStart, PurpleMessage, LightMessage, AdminMessage } from "../../components/styledComponents/ChatStyle"

const Message = ({ message: { user, text }, username }) => {

  let isSentByCurrentUser = false
  let isSentByAdmin = false
  const trimmedUsername = username.trim().toLowerCase()

  if (user === 'admin') {
    isSentByAdmin = true
  }

  if (user === trimmedUsername) {
    isSentByCurrentUser = true
  }

  return (
    isSentByCurrentUser ?

      (
        <MessageContainerEnd>
          <LightMessage text={text}>
            <p className="messageText colorWhite">{text}</p>
          </LightMessage>
        </MessageContainerEnd>
      )

      :

      (isSentByAdmin ?

        (
          <AdminMessage text={text}>
            <p className="messageText colorWhite">{text}</p>
          </AdminMessage>
        )

        :

        (
          <MessageContainerStart>
            <PurpleMessage>
              <p className="sentText colorDark pl-10">{text}</p>
            </PurpleMessage>
          </MessageContainerStart>
        )
      )
  )

}

export default Message;
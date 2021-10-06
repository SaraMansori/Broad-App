import { MessageContainerEnd, MessageContainerStart, PurpleMessage, LightMessage, AdminMessage } from "../../components/styledComponents/ChatStyle"
import ReactEmoji from 'react-emoji'


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
        <div>
          <MessageContainerEnd>
            <LightMessage className="mb-4" text={text}>
              <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
            </LightMessage>
          </MessageContainerEnd>
        </div>
      )

      :

      (isSentByAdmin ?

        (
          <div >
            <AdminMessage className="mb-4" text={text}>
              <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
            </AdminMessage>
          </div>
        )

        :

        (
          <div>
            <MessageContainerStart>
              <PurpleMessage className="mb-4">
                <p className="sentText colorDark pl-10 mb-4">{ReactEmoji.emojify(text)}</p>
              </PurpleMessage>
            </MessageContainerStart>
          </div>
        )
      )
  )

}


export default Message

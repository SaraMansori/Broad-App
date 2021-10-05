import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../../UserContext'
import { useLocation, useHistory } from 'react-router-dom'
import UsersService from '../../services/users.service'
import queryString from 'query-string'

import { Card, Button } from 'react-bootstrap';

const ChatItem = ({ chat, handleChat, currentChat }) => {

  const { loggedUser } = useContext(UserContext)
  const chatUserId = chat.participants.find(participant => participant !== loggedUser._id)
  const usersService = new UsersService()
  //const [users, setUsers] = useState('');

  const [otherUser, setOtherUser] = useState(undefined)
  const [isThisChatOpen, setIsThisChatOpen] = useState(false)

  let history = useHistory()
  const location = useLocation()
  const data = queryString.parse(location.search)

  useEffect(() => {
    console.log(isThisChatOpen)
    setIsThisChatOpen(chat === currentChat)
  }, [data])

  useEffect(() => {
    if (loggedUser) {
      usersService
        .getUserInfo(chatUserId)
        .then(res => {
          setOtherUser(res.data.user)
        })
        .catch(err => console.error(err))
    }

  }, [loggedUser])


  return (
    <>
      {loggedUser &&
        <div className="d-flex">
          <Card style={{ width: '100%' }} body>
            <h5>Chat with: {otherUser?.username}</h5>
            {isThisChatOpen ?
              (
                <Button onClick={() => { handleChat(true, chat, otherUser) }}>
                  Close Chat
                </Button>
              )
              :
              (
                <Button onClick={() => { handleChat(false, chat, otherUser) }}>
                  Open Chat
                </Button>
              )
            }
          </Card>
        </div>
      }
    </>
  )
}

export default ChatItem;

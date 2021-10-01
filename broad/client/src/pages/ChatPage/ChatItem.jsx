
import React, { useState } from 'react'
import Link from 'react-router-dom'

const ChatPage = () => {

  const [name, setName] = useState('')
  const [room, setRoom] = useState('')

  return (
    <>
      <h1>Ventana de Chat</h1>
    </>
  );
}

export default ChatPage;
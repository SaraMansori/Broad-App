import React from 'react';
import RequestItem from './RequestItem'


const RequestsList = ({ getRequests, requests }) => {

  const friendshipRequests = requests.filter(request => request.type === 'FRIENDSHIP')
  const chatRequests = requests.filter(request => request.type === 'CHAT')
  const exchangeRequests = requests.filter(request => request.type === 'EXCHANGE')

  const displayRequests = requests => requests.map(request => {
    return <RequestItem key={request._id} {...request} getRequests={getRequests} />
  })

  return (
    <>
      {
        friendshipRequests.length > 0 &&
        <>
          <h2>Friendship Requests</h2>
          {displayRequests(friendshipRequests)}
        </>
      }

      {
        chatRequests.length > 0 &&
        <>
          <h2>Chat Requests</h2>
          {displayRequests(chatRequests)}
        </>
      }

      {
        exchangeRequests.length > 0 &&
        <>
          <h2>Exchange Requests</h2>
          {displayRequests(exchangeRequests)}
        </>
      }
    </>
  )

}


export default RequestsList;

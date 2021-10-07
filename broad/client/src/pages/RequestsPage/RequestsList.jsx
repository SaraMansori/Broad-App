import { Container, Row } from 'react-bootstrap'
import RequestItem from './RequestItem'


const RequestsList = ({ getRequests, requests }) => {

  const friendshipRequests = requests.filter(request => request.type === 'FRIENDSHIP')
  const exchangeRequests = requests.filter(request => request.type === 'EXCHANGE')

  const displayRequests = requestsArr => requestsArr.map(request => {
    return <RequestItem key={request._id} {...request} getRequests={getRequests} />
  })

  return (
    <>
      {
        friendshipRequests.length > 0 &&
        <>
          <h2 className="mt-5">Friendship Requests</h2>
          {displayRequests(friendshipRequests)}
        </>
      }

      {
        exchangeRequests.length > 0 &&
        <>
          <h2 className="mt-5">Exchange Requests</h2>
          {displayRequests(exchangeRequests)}
        </>
      }
    </>
  )

}


export default RequestsList

import { Container, Row } from 'react-bootstrap'
import RequestItem from './RequestItem'


const RequestsList = ({ getRequests, requests }) => {

  const friendshipRequests = requests.filter(request => request.type === 'FRIENDSHIP')
  const exchangeRequests = requests.filter(request => request.type === 'EXCHANGE')

  const displayRequests = requestsArr => requestsArr.map(request => {
    return <RequestItem key={request._id} {...request} getRequests={getRequests} />
  })

  return (
    <Container>
      {
        friendshipRequests.length > 0 &&
        <>
          <h2>Friendship Requests</h2>
          {displayRequests(friendshipRequests)}
        </>
      }

      {
        exchangeRequests.length > 0 &&
        <>
          <h2>Exchange Requests</h2>
          {displayRequests(exchangeRequests)}
        </>
      }
    </Container>
  )

}


export default RequestsList;

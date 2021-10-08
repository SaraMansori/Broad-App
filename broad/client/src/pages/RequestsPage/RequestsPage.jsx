import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import RequestsService from '../../services/requests.service'
import RequestsList from './RequestsList'

const requestsService = new RequestsService()
const RequestsPage = props => {

  const [requests, setRequests] = useState(null)

  const getRequests = () => {

    requestsService
      .getRequests()
      .then(res => setRequests(res.data))
      .catch(err => console.error(err))
  }

  useEffect(() => {
    getRequests()
  }, [])

  return (
    <Container>
      <h1 className="mb-5">My Requests</h1>
      {requests?.length ?
        <RequestsList getRequests={getRequests} requests={requests} />
        :
        <p>No pending requests.</p>
      }
    </Container>
  )

}


export default RequestsPage

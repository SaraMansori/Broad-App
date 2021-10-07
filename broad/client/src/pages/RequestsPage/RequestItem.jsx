import { Link } from 'react-router-dom'
import { Button, Row, Col } from 'react-bootstrap'
import RequestsService from '../../services/requests.service'

const requestsService = new RequestsService()


const RequestsItem = ({ _id, owner, book, getRequests }) => {

  const changeRequestStatus = e => {

    e.preventDefault()

    const status = e.target.dataset.status

    requestsService
      .manageRequest(_id, status)
      .then(() => getRequests())
      .catch(err => console.error(err))
  }

  return (
    <Row>
      <Col md={3} style={{ marginTop: '10px' }}>
        <Row className='request-card mb-3'>
          <p><b>{book?.title}</b></p>
          <Col className='col-3'>
            <Link className='plain-link' to={`/users/${owner._id}`}>{owner.username}</Link>
          </Col>
          <Col className='col-8'>
            <Button onClick={changeRequestStatus} data-status="ACCEPTED" variant="secondary" style={{ marginRight: '3px' }}>Accept</Button>
            <Button onClick={changeRequestStatus} data-status="REJECTED" variant="primary">Reject</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  )

}


export default RequestsItem

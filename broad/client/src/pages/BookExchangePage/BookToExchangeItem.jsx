import { useState, useEffect, useContext, } from 'react'
import UserContext from '../../UserContext'
import { Button, Card, Row, Col } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { CHATS } from '../../utils/paths'
import defaultImages from '../../utils/defaultImages.js'
import RequestsService from '../../services/requests.service'
import ChatsService from '../../services/chats.service'

const requestsService = new RequestsService();
const chatsService = new ChatsService();


const BookToExchangeItem = ({ id, owner, ownerId, title, authors, image }) => {

  const [exchangeRequest, setExchangeRequest] = useState(null)
  const [buttonToShow, setButtonToShow] = useState('')
  const [chatExists, setChatExists] = useState(false)

  const { loggedUser } = useContext(UserContext)
  const currentUserId = loggedUser?._id
  let history = useHistory()
  const type = 'EXCHANGE'

  useEffect(() => {
    existExchangeRequest()
    checkChat()
  }, [])

  useEffect(() => {
    selectButtonToShow()
  }, [exchangeRequest])


  const handleClick = (e, promise) => {

    e.preventDefault();

    promise
      .then(() => {
        existExchangeRequest()
      })
      .catch(err => console.error(err))
  }


  const checkChat = () => {

    chatsService
      .getUserChats()
      .then(res => res.data.forEach(chat => chat.participants.includes(ownerId) && setChatExists(true)))
      .catch(err => console.error(err))
  }


  const createChat = e => {

    e.preventDefault();

    chatsService
      .createChat(ownerId)
      .then(() => history.push(`${CHATS}`))
      .catch(err => console.error(err))
  }


  const existExchangeRequest = () => {

    requestsService
      .getExchangeRequest(ownerId, id)
      .then(res => {

        if (res.data) {
          setExchangeRequest(res.data)
        } else {
          setExchangeRequest(null)
          setButtonToShow('')
        }
      })
      .catch(err => console.error(err));
  }


  const userIsOwner = () => exchangeRequest.owner === currentUserId
  const userIsReceiver = () => exchangeRequest.owner === ownerId


  const selectButtonToShow = () => {
    if (exchangeRequest?.status === 'PENDING' && userIsOwner()) {
      setButtonToShow('PENDING OWNER')
    } else if (exchangeRequest?.status === 'PENDING' && userIsReceiver()) {
      setButtonToShow('PENDING RECEIVER')
    } else if (exchangeRequest?.status === 'REJECTED' && userIsOwner()) {
      setButtonToShow('REJECTED OWNER')
    } else if (exchangeRequest?.status === 'REJECTED' && userIsReceiver()) {
      setButtonToShow('REJECTED RECEIVER')
    }
  }


  return (
    <Card>
      <Row>

        <Col md={2}>
          <Card.Img variant="top" src={image ? image : defaultImages.bookCover} />
        </Col>

        <Col md={10}>
          <Card.Body>
            <Card.Title>Title: {title}</Card.Title>
            <Card.Text>
              {authors &&
                <p>Author: {
                  (authors.length > 1 ?
                    authors.map((author, index) => index !== authors.length - 1 ? `${author}, ` : author)
                    :
                    authors[0])}
                </p>
              }
              <p>Owner : {owner}</p>
            </Card.Text>

            {!chatExists &&
              <Button
                onClick={e => createChat(e)}
                variant="primary">
                Start Chat
              </Button>
            }

            {chatExists &&
              <Button
                as={Link} to={CHATS}
                variant="primary">
                Open Chat
              </Button>
            }

            {!exchangeRequest &&
              <Button
                onClick={e => handleClick(e, requestsService.createRequest(ownerId, type, { id, title }))}
                variant="primary">
                Send Exchange Request
              </Button>
            }

            {(buttonToShow === 'PENDING OWNER' || buttonToShow === "REJECTED OWNER") &&
              <Button
                onClick={e => handleClick(e, requestsService.deleteRequest(ownerId, type))}
                variant="primary">
                Cancel Request
              </Button>
            }

            <br />
          </Card.Body>
        </Col>

      </Row>
    </Card>
  )

}


export default BookToExchangeItem

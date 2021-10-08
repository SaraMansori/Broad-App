import { useState, useEffect, useContext, } from 'react'
import UserContext from '../../UserContext'
import { Button, Card, Row, Col } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { CHATS } from '../../utils/paths'
import defaultImages from '../../utils/defaultImages.js'
import RequestsService from '../../services/requests.service'
import ChatsService from '../../services/chats.service'

const requestsService = new RequestsService()
const chatsService = new ChatsService()


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

    e.preventDefault()

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

    e.preventDefault()

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
      .catch(err => console.error(err))
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
    <Col>
      <Card style={{ height: '100%' }}>
        <Card.Img className="p-4" style={{ maxHeight: '200px', objectFit: 'contain' }} variant="top" src={image ? image : defaultImages.bookCover} />
        <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Card.Title><b>{title?.length < 15 ? title : title}</b></Card.Title>

          {authors &&
            <Card.Text>
              {
                (authors?.length > 1 ?
                  authors.map((author, index) => index !== authors.length - 1 ? `${author}, ` : author)
                  :
                  authors[0])
              }

            </Card.Text>
          }

          <Card.Text>
            <p><b>Owner:</b> {owner}</p>
          </Card.Text>

          <div className="mt-2" >
            {!chatExists &&
              <Button
                onClick={e => createChat(e)}
                variant="info"
                style={{ width: '100%', marginBottom: '0.5rem' }}>
                Start Chat
              </Button>
            }

            {chatExists &&
              <Button
                as={Link} to={CHATS}
                variant="secondary"
                style={{ width: '100%' }}>
                Open Chat
              </Button>
            }

            {!exchangeRequest &&
              <Button
                onClick={e => handleClick(e, requestsService.createRequest(ownerId, type, { id, title }))}
                variant="primary"
                style={{ width: '100%', marginBottom: '0.5rem' }}>
                Send Exchange Request
              </Button>
            }

            {(buttonToShow === 'PENDING OWNER' || buttonToShow === "REJECTED OWNER") &&
              <Button
                onClick={e => handleClick(e, requestsService.deleteRequest(ownerId, type))}
                variant="danger" style={{ color: 'white', width: '100%' }}>
                Cancel Request
              </Button>
            }
          </div>
        </Card.Body>
      </Card>
    </Col>
  )

}


export default BookToExchangeItem

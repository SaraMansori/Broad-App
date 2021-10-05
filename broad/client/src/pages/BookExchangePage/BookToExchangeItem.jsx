import { useState, useEffect, useContext } from 'react';
import UserContext from '../../UserContext'
import { Button, Card, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import defaultImages from '../../utils/defaultImages.js'
import RequestsService from '../../services/requests.service';
import ChatsService from '../../services/chats.service';

const requestsService = new RequestsService();
const chatsService = new ChatsService();


const BookToExchangeItem = ({ getBooksToExchange, id, owner, ownerId, title, authors, image }) => {

  const [chatRequest, setChatRequest] = useState(null)
  const [buttonToShow, setButtonToShow] = useState('')
  const [chatExists, setChatExists] = useState(false)

  const loggedUser = useContext(UserContext)
  const currentUserId = loggedUser?._id
  const type = 'CHAT'

  useEffect(() => {
    existChatRequest()
  }, [])

  useEffect(() => {
    selectButtonToShow()
  }, [chatRequest])

  // useEffect(() => {
  //   checkChat()
  // }, [id, ownerId])


  const handleChat = (e, promise) => {

    e.preventDefault();

    promise
      .then(() => {
        existChatRequest()
        getBooksToExchange()
      })
      .catch(err => console.error(err));
  }


  const checkChat = () => {

    chatsService
      .getUserChats()
      .then(res => res.data.forEach(chat => chat.participants.includes(ownerId) && setChatExists(true)))
      .catch(err => console.error(err))
  }


  const existChatRequest = () => {

    requestsService
      .getRequest(ownerId, type)
      .then(res => {
        if (res.data) {
          setChatRequest(res.data)
        } else {
          setChatRequest(null)
          setButtonToShow('')
        }
      })
      .catch(err => console.error(err));
  }


  const userIsOwner = () => chatRequest.owner === currentUserId
  const userIsReceiver = () => chatRequest.owner === ownerId


  const selectButtonToShow = () => {
    if (chatRequest?.status === 'PENDING' && userIsOwner()) {
      setButtonToShow('PENDING OWNER')
    } else if (chatRequest?.status === 'PENDING' && userIsReceiver()) {
      setButtonToShow('PENDING RECEIVER')
    } else if (chatRequest?.status === 'REJECTED' && userIsOwner()) {
      setButtonToShow('REJECTED OWNER')
    } else if (chatRequest?.status === 'REJECTED' && userIsReceiver()) {
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
              <p>Author: {
                authors && (
                  authors?.length > 1 ?
                    authors.map((author, index) => index !== authors.length - 1 ? `${author}, ` : author)
                    :
                    authors[0]
                )
              }
              </p>
              <p>Owner : {owner}</p>
            </Card.Text>

            {!chatExists && !chatRequest &&
              <Button
                onClick={e => handleChat(e, requestsService.createRequest(ownerId, type))}
                variant="primary">
                Send Chat Request
              </Button>
            }

            {(buttonToShow === 'PENDING OWNER' || buttonToShow === "REJECTED OWNER") &&
              <Button
                onClick={e => handleChat(e, requestsService.deleteRequest(ownerId, type))}
                variant="primary">
                Cancel Request
              </Button>
            }

            {(buttonToShow === 'PENDING RECEIVER' || buttonToShow === 'REJECTED RECEIVER') &&
              <Button
                onClick={e => handleChat(e, requestsService.manageRequest(chatRequest._id, 'ACCEPTED'))}
                variant="primary">
                Accept
              </Button>
            }

            {buttonToShow === 'PENDING RECEIVER' &&
              <Button
                onClick={e => handleChat(e, requestsService.manageRequest(chatRequest._id, 'REJECTED'))}
                variant="primary">
                Reject
              </Button>
            }

            {chatExists &&
              <Button
                // Cambiar por enlace al chat
                //onClick={e => handleFriendship(e, usersService.deleteFriend(user._id))}
                variant="primary">
                Go to chat
              </Button>
            }

            <br />
          </Card.Body>
        </Col>

      </Row>
    </Card>
  );

}


export default BookToExchangeItem;

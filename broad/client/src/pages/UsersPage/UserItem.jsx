import { useState, useEffect, useContext } from 'react';
import UserContext from '../../UserContext'
import { Button, Card, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import UsersService from '../../services/users.service';
import RequestsService from '../../services/requests.service';

const usersService = new UsersService();
const requestsService = new RequestsService();


const UsersItem = ({ getUsers, user }) => {

  // props user: _id, username, readBooks, city, rating, timesRated,
  // exchangedBooksByUser, favoriteGenres, number of friends, profileImage

  const [friendshipRequest, setFriendshipRequest] = useState(undefined)
  const [buttonToShow, setButtonToShow] = useState('')
  const [areFriends, setAreFriends] = useState(false)

  const loggedUser = useContext(UserContext)
  const currentUserId = loggedUser?._id
  const type = 'FRIENDSHIP'

  useEffect(() => {
    existFriendshipRequest()
  }, [])

  useEffect(() => {
    selectButtonToShow()
  }, [friendshipRequest])

  useEffect(() => {
    checkFriendship()
  }, [user])


  const handleFriendship = (e, promise) => {

    e.preventDefault();

    promise
      .then(() => {
        existFriendshipRequest()
        getUsers()
      })
      .catch(err => console.error(err));
  }


  const checkFriendship = () => setAreFriends(user.friends.includes(currentUserId))


  const existFriendshipRequest = () => {

    requestsService
      .getFriendshipRequest(user._id)
      .then(res => {
        if (res.data) {
          setFriendshipRequest(res.data)
        } else {
          setFriendshipRequest(null)
          setButtonToShow("")
        }
      })
      .catch(err => console.error(err));
  }

  const userIsOwner = () => friendshipRequest.owner === currentUserId
  const userIsReceiver = () => friendshipRequest.owner === user._id

  const selectButtonToShow = () => {
    if (friendshipRequest?.status === 'PENDING' && userIsOwner()) {
      setButtonToShow('PENDING OWNER')
    } else if (friendshipRequest?.status === 'PENDING' && userIsReceiver()) {
      setButtonToShow('PENDING RECEIVER')
    } else if (friendshipRequest?.status === 'REJECTED' && userIsOwner()) {
      setButtonToShow('REJECTED OWNER')
    } else if (friendshipRequest?.status === 'REJECTED' && userIsReceiver()) {
      setButtonToShow('REJECTED RECEIVER')
    }
  }


  return (
    <Card>
      <Row>

        <Col md={2}>
          <Card.Img variant="top" src={user.profileImage} />
        </Col>

        <Col md={10}>
          <Card.Body>
            <Card.Title>{user.username}</Card.Title>
            <Link to={`/users/${user._id}`}>Visit Profile</Link>
            <br />

            {!areFriends && !friendshipRequest &&
              <Button
                onClick={e => handleFriendship(e, requestsService.createRequest(user._id, type))}
                variant="primary">
                Add Friend
              </Button>
            }

            {(buttonToShow === 'PENDING OWNER' || buttonToShow === "REJECTED OWNER") &&
              <Button onClick={e => handleFriendship(e, requestsService.deleteRequest(user._id, type))}
                variant="primary">
                Cancel Request
              </Button>
            }

            {(buttonToShow === 'PENDING RECEIVER' || buttonToShow === 'REJECTED RECEIVER') &&
              <Button onClick={e => handleFriendship(e, requestsService.manageRequest(friendshipRequest._id, 'ACCEPTED'))}
                variant="primary">
                Accept
              </Button>
            }

            {buttonToShow === 'PENDING RECEIVER' &&
              <Button onClick={e => handleFriendship(e, requestsService.manageRequest(friendshipRequest._id, 'REJECTED'))}
                variant="primary">
                Reject
              </Button>
            }

            {areFriends &&
              <Button onClick={e => handleFriendship(e, usersService.deleteFriend(user._id))}
                variant="primary">
                Delete Friend
              </Button>
            }
          </Card.Body>
        </Col>

      </Row>
    </Card>
  );

}


export default UsersItem;

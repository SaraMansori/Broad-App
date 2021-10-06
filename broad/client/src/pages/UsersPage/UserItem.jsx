import { useState, useEffect, useContext } from 'react'
import UserContext from '../../UserContext'
import { Button, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import UsersService from '../../services/users.service'
import RequestsService from '../../services/requests.service'
import { ProfilePicture } from '../../components/styledComponents/styledPages/ProfileStyle'

const usersService = new UsersService()
const requestsService = new RequestsService()


const UsersItem = ({ getUsers, user }) => {

  // props user: _id, username, readBooks, city, rating, timesRated,
  // exchangedBooksByUser, favoriteGenres, number of friends, profileImage

  const [friendshipRequest, setFriendshipRequest] = useState(null)
  const [buttonToShow, setButtonToShow] = useState('')
  const [areFriends, setAreFriends] = useState(false)

  const { loggedUser } = useContext(UserContext)
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
      .catch(err => console.error(err))
  }


  const checkFriendship = () => setAreFriends(user.friends.includes(currentUserId))


  const existFriendshipRequest = () => {

    requestsService
      .getRequest(user._id, type)
      .then(res => {
        if (res.data) {
          setFriendshipRequest(res.data)
        } else {
          setFriendshipRequest(null)
          setButtonToShow('')
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
    <Col md={3}>
      <Card className='user-card'>

        <ProfilePicture variant="top" image={user.profileImage || 'https://icon-library.com/images/generic-user-icon/generic-user-icon-19.jpg'} />

        <Card.Body>
          <Card.Title>{user.username}</Card.Title>
          <Link className='plain-link' to={`/users/${user._id}`}>Visit Profile</Link>
          <br />

          {!areFriends && !friendshipRequest &&
            <Button
              onClick={e => handleFriendship(e, requestsService.createRequest(user._id, type))}
              variant="primary">
              Add Friend
            </Button>
          }

          {(buttonToShow === 'PENDING OWNER' || buttonToShow === "REJECTED OWNER") &&
            <Button
              onClick={e => handleFriendship(e, requestsService.deleteRequest(user._id, type))}
              variant="primary">
              Cancel Request
            </Button>
          }

          {(buttonToShow === 'PENDING RECEIVER' || buttonToShow === 'REJECTED RECEIVER') &&
            <Button
              onClick={e => handleFriendship(e, requestsService.manageRequest(friendshipRequest._id, 'ACCEPTED'))}
              variant="primary">
              Accept
            </Button>
          }

          {buttonToShow === 'PENDING RECEIVER' &&
            <Button
              onClick={e => handleFriendship(e, requestsService.manageRequest(friendshipRequest._id, 'REJECTED'))}
              variant="primary">
              Reject
            </Button>
          }

          {areFriends &&
            <Button
              onClick={e => handleFriendship(e, usersService.deleteFriend(user._id))}
              variant="primary">
              Delete Friend
            </Button>
          }
        </Card.Body>


      </Card>
    </Col>
  )

}


export default UsersItem

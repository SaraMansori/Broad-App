import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import UsersService from '../../services/users.service';
import RequestsService from '../../services/requests.service';

const usersService = new UsersService();
const requestsService = new RequestsService();


const UsersItem = ({ getUsers, user, loggedUser, storeUser }) => {

  // props user: _id, username, readBooks, city, rating, timesRated,
  // exchangedBooksByUser, favoriteGenres, friends

  const [friendshipRequest, setFriendshipRequest] = useState(undefined)
  const [buttonToShow, setButtonToShow] = useState('')
  const [areFriends, setAreFriends] = useState(false)

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
    <>
      <Link to={`/users/${user._id}`}>{user.username}</Link>

      {!areFriends && !friendshipRequest &&
        <Button
          onClick={(e) => handleFriendship(e, requestsService.createRequest(user._id, type))}
          variant="contained" color="primary">
          Add Friend
        </Button>
      }

      {(buttonToShow === 'PENDING OWNER' || buttonToShow === "REJECTED OWNER") &&
        <Button onClick={(e) => handleFriendship(e, requestsService.deleteRequest(user._id, type))}
          variant="contained" color="primary">
          Cancel Request
        </Button>
      }

      {(buttonToShow === 'PENDING RECEIVER' || buttonToShow === 'REJECTED RECEIVER') &&
        <Button onClick={(e) => handleFriendship(e, requestsService.manageRequest(friendshipRequest._id, 'ACCEPTED'))}
          variant="contained" color="primary">
          Accept
        </Button>
      }

      {buttonToShow === 'PENDING RECEIVER' &&
        <Button onClick={(e) => handleFriendship(e, requestsService.manageRequest(friendshipRequest._id, 'REJECTED'))}
          variant="contained" color="primary">
          Reject
        </Button>
      }

      {areFriends &&
        <Button onClick={(e) => handleFriendship(e, usersService.deleteFriend(user._id))}
          variant="contained" color="primary">
          Delete Friend
        </Button>
      }

      <br />
      <br />
    </>
  );

}


export default UsersItem;

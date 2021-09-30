import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import UsersService from '../../services/users.service';
import RequestsService from '../../services/requests.service';

const usersService = new UsersService();
const requestsService = new RequestsService();


const UsersItem = ({ getUsers, user, loggedUser, storeUser }) => {

  // props user: _id, username, readBooks, city, rating, timesRated,
  // exchangedBooksByUser, favoriteGenres, friends

  const currentUserId = loggedUser?._id
  const type = 'FRIENDSHIP'

  const handleFriendship = (e, promise) => {

    e.preventDefault();

    promise
      .then(() => getUsers()) // ????? sería algo de requests, para ver si existe?
      .catch(err => console.error(err));
  }

  return (
    <>
      <Link to={`/users/${user._id}`}>{user.username}</Link>
      {/* {if (user.friends.includes(currentUserId) && )} */}
      <Button
        onClick={(e) => handleFriendship(e, requestsService.createRequest(user._id, type))}
        variant="contained" color="primary">
        Add Friend
      </Button>

      <Button onClick={(e) => handleFriendship(e, requestsService.deleteRequest(user._id, type))}
        variant="contained" color="primary">
        Cancel Request
      </Button>

      {/* hay que crear nueva ruta de back para encontrar request con ids de users y tipo friendship*/}
      <Button onClick={(e) => handleFriendship(e, requestsService.manageRequest(user._id, 'ACCEPTED'))}
        variant="contained" color="primary">
        Accept
      </Button>

      <Button onClick={(e) => handleFriendship(e, usersService.deleteFriend(user._id))}
        variant="contained" color="primary">
        Delete Friend
      </Button>

      <br />
      <br />
    </>
  );

}


export default UsersItem;

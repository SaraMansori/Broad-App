import React from 'react';
import UserItem from './UserItem'


const UsersList = ({ getUsers, users, loggedUser, storeUser }) => {

  const displayUsers = users => users.map(user => {
    return <UserItem key={user._id} user={user} getUsers={getUsers} loggedUser={loggedUser} storeUser={storeUser} />
  })

  return (
    users.length > 0 &&
    <>
      {displayUsers(users)}
    </>
  );

}


export default UsersList;

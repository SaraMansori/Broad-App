import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap'
import UsersService from '../../services/users.service';
import UsersList from './UsersList'

const usersService = new UsersService();


const UsersPage = ({ loggedUser, storeUser }) => {

  const [users, setUsers] = useState(null)

  const getUsers = () => {
    usersService
      .getUsers()
      .then(res => setUsers(res.data))
      .catch(err => console.error(err))
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <Container>
      <h1>Broad Users</h1>
      {users?.length ?
        <UsersList getUsers={getUsers} users={users} loggedUser={loggedUser} storeUser={storeUser} />
        :
        <p>No users to show.</p>
      }
    </Container>
  );

}


export default UsersPage;

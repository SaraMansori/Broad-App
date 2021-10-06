import React, { useState, useEffect, useContext } from 'react'
import UserContext from '../UserContext'
import UsersService from '../services/users.service'
import { Container, Row, Button } from 'react-bootstrap'
import { Header, ProfilePicture } from '../components/styledComponents/styledPages/ProfileStyle'


const Profile = () => {

  const usersService = new UsersService();
  const { loggedUser } = useContext(UserContext)

  const [userInfo, setUserInfo] = useState({
    email: '',
    username: '',
    description: '',
    profileImage: '',
    name: '',
    locationInfo: {},
    favoriteGenres: [],
    books: [],
    friends: [],
  });

  /*  DONT NEED THE CALL BECAUSE WE HAVE ALL THE INFO IN LOGGEDUSER
   
      useEffect(() => {
      console.log(loggedUser)
      if (loggedUser)
        usersService
          .getUserInfo(loggedUser._id)
          .then(response => {
            // setUserInfo(???);
            console.log(response)
          });
    }, [loggedUser]); */

  return loggedUser ? (
    <Container className="mb-5" style={{ height: '100vh', borderRadius: '15px' }}>
      <Row style={{ height: '100%' }}>

        <Header className="col-12 header p-5">
        </Header>

        <div className="col-4" style={{ background: '#F4E7DE', height: '100%' }}>
          <div className="ml-5 mt-5 d-flex align-items-center justify-content-between flex-column p-5" style={{ background: '#805D93', height: '80%', borderRadius: '15px' }} >

            <div className="info">
              <ProfilePicture image={loggedUser.profileImage || 'https://icon-library.com/images/generic-user-icon/generic-user-icon-19.jpg'} />
              <div className="info mt-5" style={{ color: 'white', fontSize: '2rem' }}>
                <p>Username: {loggedUser.username}</p>
                <p>Name: {loggedUser.name}</p>
                <p>Friends: {loggedUser.friends.length}</p>
                <p>Books: {loggedUser.books.length}</p>
              </div>
            </div>

            <Button style={{ width: '100%', alignSelf: 'flex-end' }} variant="secondary" size="lg"> Edit Profile </Button>

          </div>
        </div>

        <div className="col-8" style={{ background: '#F4E7DE' }}>
          <div className="ml-5 p-5  mt-5" style={{ background: '#805D93', height: '80%', borderRadius: '15px', color: 'white' }} >
            <h3>Books To Read</h3>
            <h3>Reading</h3>
            <h3>Read</h3>
            <h3>Available for exchange</h3>
          </div>
        </div>
      </Row>
    </Container>
  )
    : (
      <h3>Loading...</h3>
    )

}


export default Profile

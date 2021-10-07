import { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { Header, ProfilePicture } from '../../components/styledComponents/styledPages/ProfileStyle'
import UsersService from '../../services/users.service'


const usersService = new UsersService()


const UserDetailsPage = props => {

  const [user, setUser] = useState(undefined)
  const { id } = useParams()

  const getUser = () => {

    usersService
      .getUserInfo(id)
      .then(res => setUser(res.data))
      .catch(err => console.error(err))
  }

  useEffect(() => {
    getUser(id)
  }, [])


  return user ?
    <Container className="mb-5" style={{ height: '100vh', borderRadius: '15px' }}>
      <Row style={{ height: '100%' }}>

        <Header className="col-12 header p-5"></Header>

        <div className="col-md-4 col-sm-12 mb-3" style={{ background: '#F4E7DE', height: '100%' }}>
          <div className="mr-5 mt-5 d-flex align-items-center justify-content-between flex-column p-5" style={{ background: '#805D93', height: '80%', borderRadius: '15px' }} >

            <div className="info">
              <ProfilePicture image={user.profileImage || 'https://icon-library.com/images/generic-user-icon/generic-user-icon-19.jpg'} />
              <div className="info mt-5" style={{ color: 'white', fontSize: '2rem' }}>
                <p>Username: {user.username}</p>
                {user.name !== 'unknown' && <p>Name: {user.name}</p>}
                <p>Friends: {user.friends.length}</p>
                <p>Books: {user.books.length}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-8 col-sm-12 mt-5" style={{ background: '#F4E7DE' }}>
          <div className="ml-5 p-5 " style={{ background: '#805D93', height: '100%', borderRadius: '15px', color: 'white' }} >
            <h1 className="mb-5">My Books 📚</h1>
            {/* TODO Create pages for the following */}
            <Link className="plain-link-profile" to='#'><h3>→ I Want To Read</h3></Link>
            <Link className="plain-link-profile" to='#'><h3>→ Reading</h3></Link>
            <Link className="plain-link-profile" to='#'><h3>→ Read</h3></Link>
            <Link className="plain-link-profile" to={`/${id}/exchanged`}><h3>→ Exchanged Books</h3></Link>
          </div>
        </div>
      </Row>
    </Container>
    :
    <p>Loading User Details...</p>

}


export default UserDetailsPage

import { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Header, ProfilePicture } from '../../components/styledComponents/styledPages/ProfileStyle'
import UsersService from '../../services/users.service'


const usersService = new UsersService()


const UserDetailsPage = (props) => {

    const [user, setUser] = useState(null)
    const userId = props.match.params.id
    const getUser = (userId) => {
        usersService
            .getUserInfo(userId)
            .then(res => {
                setUser(res.data)
            })
            .catch(err => console.error(err))
    }

    useEffect(() => {
        getUser(userId)
    }, [])

    return user ? (
        <Container className="mb-5" style={{ height: '100vh', borderRadius: '15px' }}>
            <Row style={{ height: '100%' }}>

                <Header className="col-12 header p-5"></Header>

                <div className="col-md-4 col-sm-12 mb-3" style={{ background: '#F4E7DE', height: '100%' }}>
                    <div className="mr-5 mt-5 d-flex align-items-center justify-content-between flex-column p-5" style={{ background: '#805D93', height: '80%', borderRadius: '15px' }} >

                        <div className="info">
                            <ProfilePicture image={user.profileImage || 'https://icon-library.com/images/generic-user-icon/generic-user-icon-19.jpg'} />
                            <div className="info mt-5" style={{ color: 'white', fontSize: '2rem' }}>
                                <p>Username: {user.username}</p>
                                <p>Name: {user.name}</p>
                                <p>Friends: {user.friends.length}</p>
                                <p>Books: {user.books.length}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-8 col-sm-12" style={{ background: '#F4E7DE' }}>
                    <div className="ml-5 p-5 mt-5" style={{ background: '#805D93', height: '80%', borderRadius: '15px', color: 'white' }} >
                        <h3>Books To Read</h3>
                        <h3>Reading</h3>
                        <h3>Read</h3>
                        <h3>Available for exchange</h3>
                    </div>
                </div>
            </Row>
        </Container>
    )
        :
        (<p>Loading User Details...</p>)

}


export default UserDetailsPage

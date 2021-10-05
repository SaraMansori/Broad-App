import React, { useContext } from 'react';
import UserContext from '../../UserContext'
import ImgLogo from '../styledComponents/atomicComponents/ImgLogo';
import { Link, useHistory } from 'react-router-dom'
import { HOMEPAGE, SIGNUP, LOGIN, PROFILE, CHATS, BOOK_RESULTS } from '../../utils/paths';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap/'
import SearchBar from '../styledComponents/atomicComponents/SearchBar';
import AuthService from '../../services/auth.service'

const Navtop = props => {

  const authService = new AuthService();
  const { loggedUser, storeUser } = useContext(UserContext);
  let history = useHistory();

  const logout = (e) => {

    e.preventDefault();

    authService
      .logout()
      .then(() => {
        storeUser(undefined)
        history.push(`/`)
      })
      .catch(err => console.error(err))

  }

  // const mediaMatch = window.matchMedia('(max-width: 991)')
  // const [displaySearchBar, setDisplaySearchBar] = useState(true)

  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" style={{ marginBottom: '30px', zIndex: '5' }}>
      <Container fluid style={{ height: '45px' }}>
        <Navbar.Brand style={{ marginTop: '0px', marginRight: '4rem', padding: '0px' }} as={Link} to={HOMEPAGE}><ImgLogo /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse style={{ backgroundColor: '#805d93', padding: '5px', borderRadius: '10px' }}>
          <Nav id="responsive-navbar-nav" className="me-auto">
            <Nav.Link as={Link} to="/book-exchange">Swap!</Nav.Link>
            <Nav.Link as={Link} to="/book-results/+">Discover Books</Nav.Link>
            <Nav.Link as={Link} to="/users">Community</Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <SearchBar />
          </Nav>
          {loggedUser &&
            <Nav>
              <Navbar.Text style={{ color: 'white', marginRight: '3rem' }}>Welcome {loggedUser.username} ! </Navbar.Text>
            </Nav>
          }

          {loggedUser ?
            (<Nav>
              <NavDropdown title="Profile" align="end">
                <NavDropdown.Item as={Link} to={PROFILE}>My Profile</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={CHATS}>My chats</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logout}>Log Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>) :
            (<Nav>
              <Nav.Link as={Link} to={LOGIN}>Log In</Nav.Link>
              <Nav.Link as={Link} to={SIGNUP}>Sign Up</Nav.Link>
            </Nav>
            )
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navtop;
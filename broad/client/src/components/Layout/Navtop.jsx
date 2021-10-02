import ImgLogo from '../styledComponents/atomicComponents/ImgLogo';
import { Link } from 'react-router-dom'
import { HOMEPAGE, SIGNUP, LOGIN, PROFILE, BOOK_RESULTS } from '../../utils/paths';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap/'
import SearchBar from '../styledComponents/atomicComponents/SearchBar';
import AuthService from '../../services/auth.service'

const authService = new AuthService();

const logout = (e) => {

  e.preventDefault();

  authService
    .logout()
    .then(() => console.log('User logged out!'))
    .catch(err => console.error(err))

}



const Navtop = (props) => {

  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" style={{ marginBottom: '50px' }}>
      <Container fluid style={{ height: '45px', paddingRight: '15px', paddingLeft: '15px' }}>
        <Navbar.Brand as={Link} to={HOMEPAGE}><ImgLogo /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="#">Swap</Nav.Link>
            <Nav.Link as={Link} to="#">Discover Books</Nav.Link>
            <Nav.Link as={Link} to="#">Quotes</Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <SearchBar />
          </Nav>
          {props.loggedUser ?
            (<Nav>
              <NavDropdown title="Profile" align="end">
                <NavDropdown.Item as={Link} to={PROFILE}>My Profile</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#">Messages</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logout}>Log Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>) :
            (<Nav>
              <Nav.Link as={Link} to={LOGIN}>Log In</Nav.Link>
              <Nav.Link as={Link} to={SIGNUP}>Sign Up</Nav.Link>
            </Nav>
            )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navtop;
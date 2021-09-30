import React, { useState } from 'react';
import BookService from '../../services/books.service.js'
import { useHistory } from "react-router-dom";
import ImgLogo from '../ImgLogo';
import { HOMEPAGE, SIGNUP, LOGIN, PROFILE, BOOK_RESULTS } from '../../utils/paths';
import { Container, Navbar, Nav, NavDropdown, InputGroup, Button, FormControl } from 'react-bootstrap/'
import SearchBar from '../SearchBar.jsx';


const Navtop = (props) => {

  /*   const bookService = new BookService()
    const [text, setText] = useState('')
    let history = useHistory();
  
    const clearState = () => {
      setText("");
    };
  
    const handleInput = e => {
      setText(e.target.value);
    };
  
    const handleSubmit = e => {
      e.preventDefault();
      setText('')
      history.push(`/book-results/${text}`)
  
      bookService
        .getBooksByType('title', text.replaceAll(" ", "+"))
        .then((res) => {
          console.log(res.data)
        })
        .catch(err => console.error(err))
  
      clearState()
    } */

  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container fluid style={{ paddingRight: '15px', paddingLeft: '15px', paddingBottom: '7px', paddingTop: '7px' }}>
        <Navbar.Brand href={HOMEPAGE}><ImgLogo /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Swap</Nav.Link>
            <Nav.Link href="#">Discover Books</Nav.Link>
            <Nav.Link href="#">Quotes</Nav.Link>
          </Nav>
          <Nav className="me-auto">

            <SearchBar />
          </Nav>
          {props.loggedUser ?
            (<Nav>
              <NavDropdown title="Profile" id="collapsible-nav-dropdown" align="end">
                <NavDropdown.Item href={PROFILE}>My Profile</NavDropdown.Item>
                <NavDropdown.Item href="#">Messages</NavDropdown.Item>
                <NavDropdown.Item href="#">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Log Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>) :
            (<Nav>
              <Nav.Link href={LOGIN}>Log In</Nav.Link>
              <Nav.Link href={SIGNUP}>Sign Up</Nav.Link>
            </Nav>
            )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navtop;
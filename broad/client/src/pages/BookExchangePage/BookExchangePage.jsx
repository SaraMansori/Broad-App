import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap'
import BooksToExchangeList from './BooksToExchangeList'
// import RequestsService from '../../services/requests.service';

// const requestsService = new RequestsService();


const BookExchangePage = props => {

  const [booksToExchange, setBooksToExchange] = useState(null)

  /*
  const getBooksToExchange = () => {

    requestsService
      .getRequests()
      .then(res => setRequests(res.data))
      .catch(err => console.error(err))
  }

  useEffect(() => {
    getRequests()
  }, [])
  */

  return (
    <Container>
      <h1>Available Books To Exchange</h1>
      {booksToExchange?.length ?
        {/* <BooksToExchangeList getBooksToExchange={getBooksToExchange} booksToExchange={booksToExchange} /> */ }
        :
        <p>No books available.</p>
      }
    </Container>
  );

}


export default BookExchangePage;

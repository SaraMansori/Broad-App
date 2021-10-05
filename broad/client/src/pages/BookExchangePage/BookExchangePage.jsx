import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap'
import BooksToExchangeList from './BooksToExchangeList'
import UsersService from '../../services/users.service';

const usersService = new UsersService();


const BookExchangePage = props => {

  const [booksToExchange, setBooksToExchange] = useState(null)
  const [shouldRefresh, setShouldRefresh] = useState(false)
  const getBooksToExchange = () => {

    usersService
      .getBooksToExchange()
      .then(res => setBooksToExchange(res.data))
      .catch(err => console.error(err))
  }

  useEffect(() => {
    getBooksToExchange()
    setShouldRefresh(!shouldRefresh)
  }, [])

  return (
    <Container>
      <h1>Available Books To Exchange</h1>
      {booksToExchange?.length ?
        <BooksToExchangeList shouldRefresh={shouldRefresh} getBooksToExchange={getBooksToExchange} booksToExchange={booksToExchange} />
        :
        <p>No books available.</p>
      }
    </Container>
  );

}


export default BookExchangePage;

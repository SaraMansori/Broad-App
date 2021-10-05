import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap'
import ExchangedBooksList from './ExchangedBooksList'
import ExchangesService from '../../services/exchangedBooks.service';

const exchangesService = new ExchangesService();


const ExchangedBooksPage = props => {

  const [exchangedBooks, setExchangedBooks] = useState(null)

  useEffect(() => {
    getExchangedBooks()
  }, [])


  const getExchangedBooks = () => {

    exchangesService
      .getExchangedBooks()
      .then(res => setExchangedBooks(res.data))
      .catch(err => console.error(err))
  }


  return (
    <Container>
      <h1>Exchanged Books</h1>
      {exchangedBooks?.length ?
        <ExchangedBooksList getExchangedBooks={getExchangedBooks} exchangedBooks={exchangedBooks} />
        :
        <p>No books exchanged yet.</p>
      }
    </Container>
  );

}


export default ExchangedBooksPage;

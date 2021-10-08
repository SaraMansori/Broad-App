import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import ExchangedBooksList from './ExchangedBooksList'
import ExchangesService from '../../services/exchanges.service'
import { useParams } from 'react-router'

const exchangesService = new ExchangesService()


const ExchangedBooksPage = props => {

  const [exchangedBooks, setExchangedBooks] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    console.log()
    getExchangedBooks()
  }, [id])


  const getExchangedBooks = () => {

    exchangesService
      .getExchangedBooks(id)
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
  )

}


export default ExchangedBooksPage

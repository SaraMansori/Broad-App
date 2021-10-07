import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import BooksToExchangeList from './BooksToExchangeList'
import UsersService from '../../services/users.service'
import SearchBar from '../../components/styledComponents/atomicComponents/SearchBar'

const usersService = new UsersService()


const BookExchangePage = props => {

  const [booksToExchange, setBooksToExchange] = useState(null)

  useEffect(() => {
    getBooksToExchange()
  }, [])


  const getBooksToExchange = () => {

    usersService
      .getBooksToExchange()
      .then(res => setBooksToExchange(res.data))
      .catch(err => console.error(err))
  }


  return (
    <Container>
      <h1 className="mb-5 text-center">Available Books To Exchange</h1>

      <SearchBar />

      {booksToExchange?.length ?
        <BooksToExchangeList getBooksToExchange={getBooksToExchange} booksToExchange={booksToExchange} />
        :
        <p>No books available.</p>
      }
    </Container>
  )

}


export default BookExchangePage

import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import BooksToExchangeList from './BooksToExchangeList'
import UsersService from '../../services/users.service'
import SearchBar from '../../components/styledComponents/atomicComponents/SearchBar'
import SearchBarFilters from '../../components/styledComponents/atomicComponents/SearchBarFilters'

const usersService = new UsersService()


const BookExchangePage = props => {

  const [booksToExchange, setBooksToExchange] = useState(null)
  const [searchType, setSearchType] = useState('')

  useEffect(() => {
    getBooksToExchange()
  }, [])


  const getBooksToExchange = () => {

    usersService
      .getBooksToExchange()
      .then(res => setBooksToExchange(res.data))
      .catch(err => console.error(err))
  }

  const handleRadioClick = (e) => {
    setSearchType(e.target.value)
  }

  return (
    <Container>
      <h1 className="mb-5 text-center">Available Books To Exchange</h1>

      <SearchBar type={'exchange'} />
      <SearchBarFilters type={'exchange'} handleRadioClick={handleRadioClick} />

      {booksToExchange?.length ?
        <BooksToExchangeList getBooksToExchange={getBooksToExchange} booksToExchange={booksToExchange} />
        :
        <p>Looking for books...</p>
      }
    </Container>
  )

}


export default BookExchangePage

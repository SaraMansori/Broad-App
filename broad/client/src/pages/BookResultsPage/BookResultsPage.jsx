import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useParams, useLocation } from "react-router-dom"
import BookService from '../../services/books.service'
import SearchBar from '../../components/styledComponents/atomicComponents/SearchBar'
import SearchBarFilters from '../../components/styledComponents/atomicComponents/SearchBarFilters'
import BookItem from '../BookResultsPage/BookItem'

const bookService = new BookService()

const BookResultsPage = () => {

  const { text } = useParams()
  const [searchType, setSearchType] = useState('title')
  const [books, setBooks] = useState([])

  let location = useLocation()


  const getBooksByType = () => {

    bookService
      .getBooksByType(searchType, text.replaceAll(" ", "+"))
      .then(res => {
        setBooks(res.data)
      })
      .catch(err => console.error(err))
  }

  const handleRadioClick = (e) => {
    setSearchType(e.target.value)
  }

  useEffect(() => {
    getBooksByType()
  }, [text, location])

  return (
    <Container>
      <Row>
        <Col style={{ marginBottom: '10px' }}>
          <h1 className='mb-5 text-center'>These are your results</h1>
          <SearchBar type='books' searchType={searchType} />
          <SearchBarFilters handleRadioClick={handleRadioClick} />

        </Col>
      </Row>

      {books ?

        <Row xs={1} md={3} className="g-5">
          {books.map((book, i) => (
            <BookItem key={`${book}-${i}`} book={book} />
          ))}
        </Row>
        :
        <p>No books found.</p>
      }

    </Container>
  )
}


export default BookResultsPage

import { useState, useEffect } from 'react'
import { Form, Container, Row, Col } from 'react-bootstrap'
import { useParams } from "react-router-dom"
import BookService from '../../services/books.service'
import SearchBar from '../../components/styledComponents/atomicComponents/SearchBar'
import BookItem from '../BookResultsPage/BookItem'


const BookResultsPage = () => {

  const type = 'radio'

  const [searchType, setSearchType] = useState('title')
  const [books, setBooks] = useState([])

  let bookService = new BookService()

  const { text } = useParams();

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
  }, [text])

  return (
    <Container>
      <Row>
        <Col style={{ marginBottom: '10px' }}>
          <h1 className='mb-5'>These are your results</h1>

          <SearchBar searchType={searchType} />

          <Form className='mt-2 mb-5' >
            <Form.Check
              inline
              label="Search By Title"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
              value={"title"}
              onClick={e => handleRadioClick(e)}
            />
            <Form.Check
              inline
              label="Search By Author"
              name="group1"
              type={type}
              value={"author"}
              id={`inline-${type}-2`}
              onClick={e => handleRadioClick(e)}
            />
            <Form.Check
              inline
              label="Search By Genre"
              name="group1"
              type={type}
              value={"category"}
              id={`inline-${type}-2`}
              onClick={e => handleRadioClick(e)}
            />
            <Form.Check
              inline
              label="Search By ISBN"
              name="group1"
              type={type}
              value={"isbn"}
              id={`inline-${type}-2`}
              onClick={e => handleRadioClick(e)}
            />
          </Form>
        </Col>
      </Row>

      {books &&

        <Row xs={1} md={3} className="g-5">
          {books.map((book, i) => (
            <BookItem key={`${book}-${i}`} book={book} />
          ))}
        </Row>
      }

    </Container>
  )
}


export default BookResultsPage

import { useState, useEffect } from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import defaultImages from '../../utils/defaultImages.js'
import BooksService from '../../services/books.service';

const booksService = new BooksService();


const BookToExchangeItem = ({ getBooksToExchange, id, owner }) => {

  // A veces salen todos, a veces algunos, depende de la recarga... loading...

  const [book, setBook] = useState(null)
  
  const getBookById = () => {

    booksService
      .getBookById(id)
      .then(res => setBook(res.data.volumeInfo))
      .catch(err => console.error(err))
  }

  useEffect(() => {
    getBookById()
  }, [book])

  return (
    book ?
    <Card>
      <Row>

        <Col md={2}>
          <Card.Img variant="top" src={book?.imageLinks?.thumbnail ? book.imageLinks.thumbnail : defaultImages.bookCover} />
        </Col>

        <Col md={10}>
          <Card.Body>
            <Card.Title>{book?.title}</Card.Title>
            <Card.Text>
              {/* Author: {authors?.map((author, id) => <span key={`author_${book.id}_${id}`}>{author}</span>)} */}
              Owner : {owner}
            </Card.Text>
            <Button variant="primary">Start Chat</Button>
            <br />
          </Card.Body>
        </Col>

      </Row>
    </Card>
    :
    <p>Loading...</p>
  );

}


export default BookToExchangeItem;

import { Button, Card, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import defaultImages from '../../utils/defaultImages.js'
import BooksService from '../../services/books.service';

const booksService = new BooksService();


const BookToExchangeItem = ({ id, owner, title, authors, image }) => {

  return (
    <Card>
      <Row>

        <Col md={2}>
          <Card.Img variant="top" src={image ? image : defaultImages.bookCover} />
        </Col>

        <Col md={10}>
          <Card.Body>
            <Card.Title>Title: {title}</Card.Title>
            <Card.Text>
              <p>Author: {
                authors.length > 1 ?
                  authors.map((author, index) => index !== authors.length - 1 ? `${author}, ` : author)
                  :
                  authors[0]
              }
              </p>
              <p>Owner : {owner}</p>
            </Card.Text>
            <Button variant="primary">Start Chat</Button>
            {/* TODO que cambie el botón en función de si ya existe chat o no
            por ejemplo: start chat / open chat */}
            <br />
          </Card.Body>
        </Col>

      </Row>
    </Card>
  );

}


export default BookToExchangeItem;

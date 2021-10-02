import { Card, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';


const BookToExchangeItem = ({ getBooksToExchange, booksToExchange }) => {

  // esto trae id de los libros, hay que llamar a la API de Google para traer la info

  return (
    <Card>
      <Row>

        <Col md={2}>
          <Card.Img variant="top" src={'/'} />
        </Col>

        <Col md={10}>
          <Card.Body>
            <Card.Title>{}</Card.Title>
            <Link to={`/`}>Visit Profile</Link>
            <br />
          </Card.Body>
        </Col>

      </Row>
    </Card>
  );

}


export default BookToExchangeItem;

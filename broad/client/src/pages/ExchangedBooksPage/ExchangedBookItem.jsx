import { Card, Row, Col } from 'react-bootstrap'
import defaultImages from '../../utils/defaultImages.js'


const ExchangedBookItem = ({ owner, receiver, id, title, authors, image, endDate, exchangeId }) => {


  /* exchangeId necesario para crear un botón de intercambio finalizado que actualice 
  el exchange y añada una endDate. Una vez haya endDate, se activará el rating de user 
  router.put en exchanges routes */


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
              {authors &&
                <p>Author: {
                  (authors.length > 1 ?
                    authors.map((author, index) => index !== authors.length - 1 ? `${author}, ` : author)
                    :
                    authors[0])}
                </p>
              }
            </Card.Text>
            <br />
          </Card.Body>
        </Col>

      </Row>
    </Card>
  )

}


export default ExchangedBookItem

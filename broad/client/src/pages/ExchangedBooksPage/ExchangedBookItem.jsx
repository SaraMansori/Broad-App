import { Card, Row, Col } from 'react-bootstrap'
import defaultImages from '../../utils/defaultImages.js'


const ExchangedBookItem = ({ owner, receiver, id, title, authors, image, endDate, exchangeId }) => {


  /* exchangeId necesario para crear un botón de intercambio finalizado que actualice 
  el exchange y añada una endDate. Una vez haya endDate, se activará el rating de user 
  router.put en exchanges routes */


  return (
    <Col>
      <Card style={{ height: '100%' }}>
        <Card.Img className="p-4" style={{ maxHeight: '200px', objectFit: 'contain' }} variant="top" src={image ? image : defaultImages.bookCover} />
        <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Card.Title><b>{title}</b></Card.Title>

          {authors &&
            <Card.Text>
              {
                (authors?.length > 1 ?
                  authors.map((author, index) => index !== authors.length - 1 ? `${author}, ` : author)
                  :
                  authors[0])
              }

            </Card.Text>
          }

        </Card.Body>
      </Card>
    </Col>
    // <Card>
    //   <Row>

    //     <Col md={2}>
    //       <Card.Img variant="top" src={image ? image : defaultImages.bookCover} />
    //     </Col>

    //     <Col md={10}>
    //       <Card.Body>
    //         <Card.Title>Title: {title}</Card.Title>
    //         <Card.Text>
    //           {authors &&
    //             <p>Author: {
    //               (authors.length > 1 ?
    //                 authors.map((author, index) => index !== authors.length - 1 ? `${author}, ` : author)
    //                 :
    //                 authors[0])}
    //             </p>
    //           }
    //         </Card.Text>
    //         <br />
    //       </Card.Body>
    //     </Col>

    //   </Row>
    // </Card>
  )

}


export default ExchangedBookItem

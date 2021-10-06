import { useState, useContext, useEffect } from 'react'
import UserContext from '../../UserContext'
import { Col, Card, Dropdown, Button } from 'react-bootstrap';
import defaultImages from '../../utils/defaultImages.js'
import UsersService from '../../services/users.service'

const BookItem = ({ book }) => {

  const { loggedUser, storeUser } = useContext(UserContext)

  const [wantToExchange, setWantToExchange] = useState(false)

  useEffect(() => {
    if (loggedUser) {
      setWantToExchange(loggedUser.books.some(userBook => userBook.id === book.id && userBook.wantsToExchange))
    }
  }, [loggedUser])

  const bookId = book.id
  const { imageLinks, title, authors } = book.volumeInfo

  let publishedDate = book.volumeInfo.publishedDate?.length !== 0 ? book.volumeInfo.publishedDate : 'Unknown'

  let usersService = new UsersService()

  /*   const clearState = () => {
      setWantToExchange(false)
    } */

  const handleExchangeClick = (e) => {
    const book = {
      id: bookId,
      wantsToExchange: !wantToExchange
    }

    usersService
      .updateUserBooks(book)
      .then(res => {
        console.log(res.data)
        storeUser(res.data)
        //setWantToExchange(!wantToExchange)
      })
      .catch(err => console.error(err))
  }

  const handleBookChangeClick = (e) => {

    const book = {
      id: bookId,
      status: e.target.dataset.status,
      //startDate: null,
      //finishDate: null,
      //wantsToExchange: false
    }

    usersService
      .updateUserBooks(book)
      .then(res => {
        storeUser(res.data)
        //en un futuro actualizar estado para que el boton cambie dependiendo de lo que haya en la bbdd
      })
      .catch(err => console.error(err))
  }

  return (
    <Col>
      <Card style={{ height: '100%' }}>
        <Card.Img className="p-4" style={{ maxHeight: '200px', objectFit: 'contain' }} variant="top" src={imageLinks?.thumbnail ? imageLinks.thumbnail : defaultImages.bookCover} />
        <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Card.Title>{title?.length < 15 ? title : title}</Card.Title>

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

          <Card.Text>
            Published: {publishedDate}
          </Card.Text>

          <div className="buttonsList">

            <Button style={{ width: '100%' }} variant="secondary" onClick={(e) => handleExchangeClick(e)}>
              {!wantToExchange ? 'I have this book and want to exchange it' : `I don't want to exchange this book anymore`}
            </Button>

            <Dropdown >
              <Dropdown.Toggle variant="primary" style={{ width: '100%' }} className="mt-2">
                Add to my library
              </ Dropdown.Toggle>
              <Dropdown.Menu variant="dark" style={{ width: '100%' }}>
                <Dropdown.Item data-status="WANTSTOREAD" onClick={(e) => handleBookChangeClick(e)}>Want to Read</Dropdown.Item>
                <Dropdown.Item data-status="READING" onClick={(e) => handleBookChangeClick(e)}>Reading</Dropdown.Item>
                <Dropdown.Item data-status="READ" onClick={(e) => handleBookChangeClick(e)}>Read</Dropdown.Item>
              </ Dropdown.Menu>
            </ Dropdown>

          </div>


        </ Card.Body>
      </ Card>
    </ Col>
  )

}

export default BookItem;
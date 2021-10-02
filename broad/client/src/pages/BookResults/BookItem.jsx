import { useState, useContext } from 'react'
import UserContext from '../../UserContext'
import { Card, DropdownButton, Dropdown, Button } from 'react-bootstrap';
import defaultImages from '../../utils/defaultImages.js'
import UsersService from '../../services/users.service'

const BookItem = ({ book }) => {

  const loggedUser = useContext(UserContext)

  const [wantToExchange, setWantToExchange] = useState(false)
  const [user, setUser] = useState(loggedUser)

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
      wantsToExchange: wantToExchange
    }

    usersService
      .updateUserBooks(book)
      .then(res => {
        setUser(res.data)
        setWantToExchange(!wantToExchange)
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
        setUser(res.data)
        console.log(res.data)
        //en un futuro actualizar estado para que el boton cambie dependiendo de lo que haya en la bbdd
      })
      .catch(err => console.error(err))
  }

  return (
    <Card style={{ width: '80vw' }}>
      <Card.Img
        style={{ width: '20%' }}
        variant="top"
        src={imageLinks?.thumbnail ? imageLinks.thumbnail : defaultImages.bookCover} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>

        <Card.Text>
          Author: {authors?.map((author, id) => <span key={`author_${book.id}_${id}`}>{author}</span>)}
        </Card.Text>

        <Card.Text>
          Published Year: {publishedDate}
        </Card.Text>

        <div id="bookId" className="book-buttons d-flex">

          <DropdownButton variant="primary" title="Add to my library">

            <Dropdown.Item data-status="WANTSTOREAD" onClick={(e) => handleBookChangeClick(e)}>Want to Read</Dropdown.Item>
            <Dropdown.Item data-status="READING" onClick={(e) => handleBookChangeClick(e)}>Reading</Dropdown.Item>
            <Dropdown.Item data-status="READ" onClick={(e) => handleBookChangeClick(e)}>Read</Dropdown.Item>

          </DropdownButton>

          {!wantToExchange ?
            <Button onClick={(e) => handleExchangeClick(e)} variant="secondary">
              I have this book and want to exchange it
            </Button>
            :
            <Button onClick={(e) => handleExchangeClick(e)} variant="secondary">
              I don't want to exchange this book anymore
            </Button>
          }

        </div>

      </Card.Body>
    </Card>
  );
}

export default BookItem;
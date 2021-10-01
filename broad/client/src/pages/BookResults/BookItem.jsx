import { Card, DropdownButton, Dropdown, Button } from 'react-bootstrap';
import defaultImages from '../../utils/defaultImages.js'
import UsersService from '../../services/users.service'


const BookItem = ({ book, loggedUser }) => {

  const bookId = book.id
  const { imageLinks, title, authors } = book.volumeInfo

  let publishedDate = book.volumeInfo.publishedDate?.length !== 0 ? book.volumeInfo.publishedDate : 'Unknown'

  let usersService = new UsersService()

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
        console.log(res)
      })
      .catch(err => console.error(err))
  }

  return (
    <Card key={`resultcard-${bookId}`} style={{ width: '80vw' }}>
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

          <DropdownButton
            variant="primary"
            id="dropdown-basic-button"
            title="Add to my library">



            <Dropdown.Item data-status="WANTSTOREAD" onClick={(e) => handleBookChangeClick(e)}>Want to Read</Dropdown.Item>
            <Dropdown.Item data-status="READING" onClick={(e) => handleBookChangeClick(e)}>Reading</Dropdown.Item>
            <Dropdown.Item data-status="READ" onClick={(e) => handleBookChangeClick(e)}>Read</Dropdown.Item>

          </DropdownButton>

          <Button variant="secondary">
            Want to Exchange
          </Button>

        </div>

      </Card.Body>
    </Card>
  );
}

export default BookItem;
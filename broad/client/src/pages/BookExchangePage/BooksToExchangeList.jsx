import BookToExchangeItem from './BookToExchangeItem'
import { Row } from 'react-bootstrap'


const BooksToExchangeList = ({ getBooksToExchange, booksToExchange, text }) => {

  const filteredBooks = booksToExchange.filter(book => book.title.includes(text))
  console.log(filteredBooks)

  const displayBooksToExchange = () => booksToExchange.map(bookToExchange => {
    return <BookToExchangeItem
      key={`${bookToExchange.id} - ${bookToExchange.owner}`}
      {...bookToExchange}
      getBooksToExchange={getBooksToExchange}
    />
  })

  return (
    booksToExchange.length > 0 &&
    <Row xs={1} md={3} className="g-5 mt-2 mb-5">
      {displayBooksToExchange(booksToExchange)}
    </Row>
  )

}


export default BooksToExchangeList

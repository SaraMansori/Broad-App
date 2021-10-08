import { useContext } from 'react'
import UserContext from '../../UserContext'
import ExchangedBookItem from './ExchangedBookItem'
import { Row } from 'react-bootstrap'


const ExchangedBooksList = ({ exchangedBooks, getExchangedBooks }) => {

  const { loggedUser } = useContext(UserContext)
  const currentUserId = loggedUser?._id

  const booksUserIsOwner = exchangedBooks.filter(exchangedBooks => exchangedBooks.owner === currentUserId)
  const booksUserIsReceiver = exchangedBooks.filter(exchangedBooks => exchangedBooks.receiver === currentUserId)

  const displayExchangedBooks = exchangedBooksArr => exchangedBooksArr.map(exchangedBook => {
    return <ExchangedBookItem key={exchangedBook._id} {...exchangedBook} getExchangedBooks={getExchangedBooks} />
  })

  return (
    <>
      {
        booksUserIsOwner?.length > 0 &&
        <>
          <h2 className="mt-5">Lent Books</h2>
          <Row xs={1} md={3} className="g-5 mt-2 mb-5">
            {displayExchangedBooks(booksUserIsOwner)}
          </Row>
        </>
      }

      {
        booksUserIsReceiver?.length > 0 &&
        <>
          <h2 className="mt-5">Borrowed Books</h2>
          <Row xs={1} md={3} className="g-5 mt-2 mb-5">
            {displayExchangedBooks(booksUserIsReceiver)}
          </Row>
        </>
      }
    </>
  )

}


export default ExchangedBooksList

import { useContext } from 'react'
import UserContext from '../../UserContext'
import ExchangedBookItem from './ExchangedBookItem'


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
          <h2>Lent Books</h2>
          {displayExchangedBooks(booksUserIsOwner)}
        </>
      }

      {
        booksUserIsReceiver?.length > 0 &&
        <>
          <h2>Borrowed Books</h2>
          {displayExchangedBooks(booksUserIsReceiver)}
        </>
      }
    </>
  )

}


export default ExchangedBooksList

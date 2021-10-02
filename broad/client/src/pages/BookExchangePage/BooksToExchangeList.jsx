import BookToExchangeItem from './BookToExchangeItem'


const BooksToExchangeList = ({ getBooksToExchange, booksToExchange }) => {

  const displayBooksToExchange = () => booksToExchange.map(bookToExchange => {
    return <BookToExchangeItem key={bookToExchange._id} {...bookToExchange} getBooksToExchange={getBooksToExchange} />
  })

  return (
    booksToExchange.length > 0 &&
    <>
      {displayBooksToExchange(booksToExchange)}
    </>
  );

}


export default BooksToExchangeList;

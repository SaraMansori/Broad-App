import BookToExchangeItem from './BookToExchangeItem'


const BooksToExchangeList = ({ shouldRefresh, getBooksToExchange, booksToExchange }) => {

  const displayBooksToExchange = () => booksToExchange.map(bookToExchange => {
    return <BookToExchangeItem
      key={`${bookToExchange.id} - ${bookToExchange.owner}`}
      {...bookToExchange}
      shouldRefresh={shouldRefresh}
      getBooksToExchange={getBooksToExchange}
    />
  })

  return (
    booksToExchange.length > 0 &&
    <>
      {displayBooksToExchange(booksToExchange)}
    </>
  );

}


export default BooksToExchangeList;

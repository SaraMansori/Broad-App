import BookToExchangeItem from './BookToExchangeItem'


const BooksToExchangeList = ({ booksToExchange }) => {

  const displayBooksToExchange = () => booksToExchange.map(bookToExchange => {
    return <BookToExchangeItem
      key={`${bookToExchange.id} - ${bookToExchange.owner}`}
      {...bookToExchange}
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

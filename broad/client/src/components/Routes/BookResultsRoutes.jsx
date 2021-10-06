import { BOOK_RESULTS_TEXT, BOOK_RESULTS_TITLE, BOOK_RESULTS_AUTHOR, BOOK_RESULTS_ISBN, BOOK_RESULTS_CATEGORY } from '../../utils/paths'
import { Route } from 'react-router-dom'
import BookResultsPage from '../../pages/BookResultsPage/BookResultsPage'

const BookResultsRoutes = () => {

  return (
    <>
      <Route exact path={BOOK_RESULTS_TEXT} render={() => <BookResultsPage searchType='text' />} />
      <Route exact path={BOOK_RESULTS_TITLE} render={() => <BookResultsPage searchType='title' />} />
      <Route exact path={BOOK_RESULTS_AUTHOR} render={() => <BookResultsPage searchType='author' />} />
      <Route exact path={BOOK_RESULTS_ISBN} render={() => <BookResultsPage searchType='isbn' />} />
      <Route exact path={BOOK_RESULTS_CATEGORY} render={() => <BookResultsPage searchType='category' />} />
    </>
  )

}


export default BookResultsRoutes

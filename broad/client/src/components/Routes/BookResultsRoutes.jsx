import { BOOK_RESULTS } from '../../utils/paths'
import { Route } from 'react-router-dom'
import BookResultsPage from '../../pages/BookResultsPage/BookResultsPage'

const BookResultsRoutes = () => {

  return (
    <>
      <Route exact path={BOOK_RESULTS} render={() => <BookResultsPage searchType='text' />} />
    </>
  )

}


export default BookResultsRoutes

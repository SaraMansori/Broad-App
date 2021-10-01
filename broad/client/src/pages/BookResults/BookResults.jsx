import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import BookService from '../../services/books.service'
import SearchBar from '../../components/styledComponents/atomicComponents/SearchBar';
import BookItem from '../BookResults/BookItem'

const BookSearch = props => {

  const type = 'radio'

  const [searchType, setSearchType] = useState('title')
  const [books, setBooks] = useState([])

  let bookService = new BookService()

  const { text } = useParams();

  const getBooksByType = () => {

    bookService
      .getBooksByType(searchType, text.replaceAll(" ", "+"))
      .then(res => {
        setBooks(res.data)
      })
      .catch(err => console.error(err))
  }

  const handleRadioClick = (e) => {
    setSearchType(e.target.value)
  }

  useEffect(() => {
    getBooksByType()
  }, [text, props])

  return (
    <>
      <h1>These are your results</h1>

      <SearchBar searchType={searchType} />

      <Form>
        <Form.Check
          inline
          label="Search By Title"
          name="group1"
          type={type}
          id={`inline-${type}-1`}
          value={"title"}
          onClick={e => handleRadioClick(e)}
        />
        <Form.Check
          inline
          label="Search By Author"
          name="group1"
          type={type}
          value={"author"}
          id={`inline-${type}-2`}
          onClick={e => handleRadioClick(e)}
        />
        <Form.Check
          inline
          label="Search By Genre"
          name="group1"
          type={type}
          value={"category"}
          id={`inline-${type}-2`}
          onClick={e => handleRadioClick(e)}
        />
        <Form.Check
          inline
          label="Search By ISBN"
          name="group1"
          type={type}
          value={"isbn"}
          id={`inline-${type}-2`}
          onClick={e => handleRadioClick(e)}
        />
      </Form>

      {books &&
        books.map(book => {

          return (

            <BookItem book={book} loggedUser={props.loggedUser} />

          )
        })
      }

    </>
  );
}

export default BookSearch;
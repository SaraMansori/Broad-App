import React, { useState, useEffect } from 'react';
import { Card, DropdownButton, Dropdown, Button, Form } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import BookService from '../services/books.service'
import defaultImages from '../utils/defaultImages.js'
import SearchBar from '../components/SearchBar';

const BookSearch = props => {

  const type = 'radio'

  const [searchType, setSearchType] = useState('title')
  const [books, setBooks] = useState([])

  let bookService = new BookService()
  const { text } = useParams();

  const getBooksByType = () => {

    bookService
      .getBooksByType(searchType, text.replaceAll(" ", "+"))
      .then((res) => {
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

          const { id } = book
          const { imageLinks, title, authors } = book.volumeInfo

          return (

            <Card key={`resultcard-${id}`} style={{ width: '80vw' }}>
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
                  Published Year: 1999
                </Card.Text>

                <div className="book-buttons d-flex">

                  <DropdownButton
                    variant="primary"
                    menuVariant="primary"
                    id="dropdown-basic-button"
                    title="Add to my library">

                    <Dropdown.Item onClick={() => console.log('clicked')}>Want to Read</Dropdown.Item>
                    <Dropdown.Item onClick={console.log('clicked')}>Reading</Dropdown.Item>
                    <Dropdown.Item onClick={console.log('clicked')}>Read</Dropdown.Item>

                  </DropdownButton>

                  <Button variant="secondary">
                    Want to Exchange
                  </Button>

                </div>

              </Card.Body>
            </Card>
          )
        })
      }

    </>
  );
}

export default BookSearch;
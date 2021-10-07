import { Form } from 'react-bootstrap'

const SearchBarFilters = ({ type, handleRadioClick }) => {
  return (
    <Form className='mt-2 mb-5' >
      <Form.Check
        inline
        label="Search By Title"
        name="group1"
        type='radio'
        id={`inline-radio-1`}
        value={"title"}
        onClick={e => handleRadioClick(e)}
      />
      <Form.Check
        inline
        label="Search By Author"
        name="group1"
        type='radio'
        value={"author"}
        id={`inline-radio-2`}
        onClick={e => handleRadioClick(e)}
      />
      {type !== 'exchange' &&
        <>
          <Form.Check
            inline
            label="Search By Genre"
            name="group1"
            type='radio'
            value={"category"}
            id={`inline-radio-2`}
            onClick={e => handleRadioClick(e)}
          />
          <Form.Check
            inline
            label="Search By ISBN"
            name="group1"
            type='radio'
            value={"isbn"}
            id={`inline-radio-2`}
            onClick={e => handleRadioClick(e)}
          />
        </>
      }
    </Form>
  );
}

export default SearchBarFilters;
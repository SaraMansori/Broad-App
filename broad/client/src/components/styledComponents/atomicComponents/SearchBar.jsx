import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import { InputGroup, Button, FormControl } from 'react-bootstrap/'


const SearchBar = (props) => {

	const [text, setText] = useState('')
	let history = useHistory()

	const clearState = () => {
		setText('')
	};

	const handleInput = e => {
		setText(e.target.value)
	};

	const handleSubmit = (e) => {

		if (props.type === 'books') {

			e.preventDefault()

			if (!props.searchType) {
				text ? history.push(`/book-results/title/${text}`) : history.push(`/book-results/+`)
			} else {
				text ? history.push(`/book-results/${props.searchType}/${text}`) : history.push(`/book-results/${props.searchType}/+`)
			}

			clearState()

		} else if (props.type === 'exchange') {

			if (!props.searchType) {
				text ? history.push(`/book-exchange/title/${text}`) : history.push(`/book-exchange/`)
			} else {
				text ? history.push(`/book-exchange/${props.searchType}/${text}`) : history.push(`/book-results/${props.searchType}/+`)
			}
		}

	}


	return (
		<form onSubmit={handleSubmit}>

			<InputGroup>
				<FormControl
					placeholder={props.type === 'exchange' ? "Find the books you want to exchange..." : "Find your favorite books..."}
					aria-label="search"
					aria-describedby="search"
					style={{ width: '42vw' }}
					name="text" value={text} onChange={e => handleInput(e)}
				/>
				<Button type='submit' variant='secondary'>
					Search
				</Button>
			</InputGroup>

		</form>
	)

}


export default SearchBar

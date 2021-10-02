import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import { InputGroup, Button, FormControl } from 'react-bootstrap/'

const SearchBar = (props) => {

	const [text, setText] = useState('')
	const [searchType, setSearchType] = useState(props.searchType)

	useEffect(() => {
		setSearchType(props.searchType)
	}, [props.searchType])

	let history = useHistory();

	const clearState = () => {
		setText("");
	};

	const handleInput = e => {
		setText(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		setText('')

		if (!searchType) {
			text ? history.push(`/book-results/title/${text}`) : history.push(`/book-results/+`)
		} else {
			text ? history.push(`/book-results/${searchType}/${text}`) : history.push(`/book-results/${searchType}/+`)
		}

		clearState()
	}

	return (
		<form onSubmit={handleSubmit}>

			<InputGroup>
				<FormControl
					placeholder="Find your favorite books..."
					aria-label="search"
					aria-describedby="search"
					style={{ width: '42vw' }}
					name="text" value={text} onChange={e => handleInput(e)}
				/>
				<Button type='submit' variant="secondary" style={{ color: 'white' }} id="button-addon2">
					Search
				</Button>
			</InputGroup>

		</form>
	);
};

export default SearchBar;

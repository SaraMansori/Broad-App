import React, { useState, useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Button } from '@mui/material';
import { ColorLensTwoTone, Search as SearchIcon } from '@material-ui/icons';
import { InputBase } from '@material-ui/core';
import { useHistory } from "react-router-dom";

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(3),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '50vw',
		},
	},
}));

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
			console.log('no search type')
			text ? history.push(`/book-results/title/${text}`) : history.push(`/book-results/+`)
		} else {
			console.log('searchtype found')
			text ? history.push(`/book-results/${searchType}/${text}`) : history.push(`/book-results/${searchType}/+`)
		}

		clearState()
	}

	return (
		<form onSubmit={handleSubmit}>

			<Search>
				<SearchIconWrapper>
					<SearchIcon />
				</SearchIconWrapper>
				<StyledInputBase
					placeholder="Search Book…"
					inputProps={{ 'aria-label': 'search' }}
					name="text" value={text} onChange={e => handleInput(e)}
				/>
				<Button type="submit" variant="contained" style={{ height: "100%" }} >Search Book</Button>
			</Search>

		</form>
	);
};

export default SearchBar;

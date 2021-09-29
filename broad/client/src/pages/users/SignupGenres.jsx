import React, {useState} from 'react';
import {Container, Button} from '@mui/material';
import UsersService from '../../services/users.service';
import genres from '../../utils/bookGenres';

const usersService = new UsersService();

const SignupGenres = props => {
	const [favoriteGenres, setSignupGenresData] = useState([]);
	const id = props.loggedUser?._id;

	const clearState = () => {
		setSignupGenresData({favoriteGenres: []});
	};

	const handleClick = e => {
		const currentGenre = e.target.innerText;

		if (!favoriteGenres.includes(currentGenre)) {
			setSignupGenresData(favoriteGenres => [...favoriteGenres, currentGenre]);
		} else {
			setSignupGenresData(favoriteGenres =>
				favoriteGenres.filter(genre => genre !== currentGenre)
			);
		}
	};

	const handleSubmit = e => {
		e.preventDefault();

		usersService
			.updateFavoriteGenres(id, favoriteGenres)
			.then(res => {
				console.log(res);
				clearState();
			})
			.catch(err => console.error(err));
	};

	return (
		<Container>
			<h3>GENRES</h3>
			<form onSubmit={handleSubmit}>
				{genres.map((genre, i) => {
					return (
						<Button
							onClick={e => handleClick(e)}
							key={`genre${i}`}
							variant={
								favoriteGenres.includes(genre) ? 'contained' : 'outlined'
							}
						>
							{genre}
						</Button>
					);
				})}

				<Button type="submit" fullWidth variant="contained" color="primary">
					SUBMIT
				</Button>
			</form>
		</Container>
	);
};

export default SignupGenres;

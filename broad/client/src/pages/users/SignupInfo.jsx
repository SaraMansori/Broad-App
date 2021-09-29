import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import {FormControlLabel} from '@mui/material';
import {Button, Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';
import UsersService from '../../services/users.service';
import {SIGNUP} from '../../utils/paths';

const usersService = new UsersService();

const SignupInfo = props => {
	console.log(props); // me dice que loggedUser es undefined
	const id = props.loggedUser?._id;

	const [formData, setFormData] = useState({
		name: '',
		description: '',
		profileImage: '',
		location: '',
	});

	const clearState = () => {
		setFormData({name: '', description: '', profileImage: '', location: ''});
	};

	const handleInput = e => {
		const {name, value} = e.target;
		setFormData({...formData, [name]: value});
	};

	const handleSubmit = e => {
		e.preventDefault();

		const {name, description, profileImage, location} = formData;

		usersService
			.login(name, description, profileImage, location)
			.then(() => clearState())
			.catch(err => console.error(err));
	};

	return (
		<>
			<h3>Complete your data</h3>
			<form onSubmit={handleSubmit}>
				<TextField
					// variant="outlined"
					// margin="normal"
					// required
					fullWidth
					// id="email"
					// label="Email Address"
					// name="email"
					// autoComplete="email"
					// autoFocus
					id="outlined-multiline-static"
					label="Description"
					multiline
					rows={4}
					onChange={handleInput}
				/>
				<TextField
					variant="outlined"
					margin="normal"
					// required
					fullWidth
					// id="name"
					label="Name"
					name="name"
					autoComplete="name"
					type="text"
					autoFocus
					value={formData.name}
					onChange={handleInput}
				/>
				<TextField
					variant="outlined"
					margin="normal"
					// required
					fullWidth
					// id="location"
					label="Location"
					name="pwd"
					autoComplete="location"
					type="location"
					autoFocus
					value={formData.pwd}
					onChange={handleInput}
				/>
				<Button type="submit" fullWidth variant="contained" color="primary">
					SAVE
				</Button>
			</form>
			<Link to="/signup/genres">
				<Button variant="outlined" color="primary">
					Skip
				</Button>
			</Link>
		</>
	);
};

export default SignupInfo;

import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import {FormControlLabel} from '@mui/material';
import {Checkbox, Button, Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';
import AuthService from '../../services/auth.service';
import {SIGNUP} from '../../utils/paths';

const authService = new AuthService();

const LoginForm = props => {
	const [formData, setFormData] = useState({username: '', pwd: ''});

	const clearState = () => {
		setFormData({username: '', pwd: ''});
	};

	const handleInput = e => {
		const {name, value} = e.target;
		setFormData({...formData, [name]: value});
	};

	const handleSubmit = e => {
		e.preventDefault();

		const {username, pwd} = formData;

		authService
			.login(username, pwd)
			.then(() => clearState()) // añadir redirect to /home
			.catch(err => console.error(err));
	};

	return (
		<>
			<h3>Log In</h3>
			<form onSubmit={handleSubmit}>
				{/* <TextField
					variant="outlined"
					margin="normal"
					required
					fullWidth
					id="email"
					label="Email Address"
					name="email"
					autoComplete="email"
					autoFocus
				/> */}
				<TextField
					variant="outlined"
					margin="normal"
					required
					fullWidth
					id="username"
					label="Username"
					name="username"
					autoComplete="username"
					type="text"
					autoFocus
					value={formData.username}
					onChange={handleInput}
				/>
				<TextField
					variant="outlined"
					margin="normal"
					required
					fullWidth
					id="password"
					label="Password"
					name="pwd"
					autoComplete="password"
					type="password"
					autoFocus
					value={formData.pwd}
					onChange={handleInput}
				/>
				<FormControlLabel
					control={<Checkbox value="remember" color="primary" />}
					label="Remember me"
				/>
				<Button type="submit" fullWidth variant="contained" color="primary">
					Log In
				</Button>
			</form>

			<Grid container>
				<Grid item xs>
					<Link href="#" variant="body2">
						Forgot password?
					</Link>
				</Grid>
				<Grid item>
					<Link to={SIGNUP} variant="body2">
						Don't have an account? Sign Up
					</Link>
				</Grid>
			</Grid>
		</>
	);
};

export default LoginForm;

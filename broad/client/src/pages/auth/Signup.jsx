import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import {Container, FormControlLabel} from '@mui/material';
import {Checkbox, Button, Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';
import AuthService from '../../services/auth.service';

const authService = new AuthService();

const SignupForm = () => {
	const [formData, setFormData] = useState({email: '', username: '', pwd: ''});

	const clearState = () => {
		setFormData({email: '', username: '', pwd: ''});
	};

	const handleChange = e => {
		const {value, name} = e.target;
		setFormData({...formData, [name]: value});
	};

	const handleSubmit = e => {
		e.preventDefault();

		const {email, username, pwd} = formData;

		authService
			.signup(email, username, pwd)
			.then(user => {
				clearState();
			})
			.catch(err => console.error(err));
	};

	return (
		<Container>
			<h3>Sign Up</h3>
			<form onSubmit={handleSubmit}>
				<TextField
					variant="outlined"
					margin="normal"
					required
					fullWidth
					id="email"
					label="Email Address"
					name="email"
					autoComplete="email"
					autoFocus
					value={formData.email}
					onChange={e => handleChange(e)}
				/>
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
					onChange={e => handleChange(e)}
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
					onChange={e => handleChange(e)}
				/>
				<FormControlLabel
					control={<Checkbox value="remember" color="primary" />}
					label="Remember me"
					//manage the onchange
				/>
				<Button type="submit" fullWidth variant="contained" color="primary">
					Sign In
				</Button>
			</form>

			<Grid container>
				<Grid item xs>
					<Link href="#" variant="body2">
						Forgot password?
					</Link>
				</Grid>
				<Grid item xs>
					<Link href="/signup" variant="body2">
						{"Don't have an account? Sign Up"}
					</Link>
				</Grid>
			</Grid>
		</Container>
	);
};

export default SignupForm;

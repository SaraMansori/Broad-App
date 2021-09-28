import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import {Container, FormControlLabel} from '@mui/material';
import {Checkbox, Button, Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';
import AuthService from '../../services/auth.service';

const authService = new AuthService();

const LoginForm = props => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const clearState = () => {
		setUsername('');
		setPassword('');
	};
};

function Login() {
	return (
		<Container>
			<h3>Log In</h3>
			<form>
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
					<Link href="/signup" variant="body2">
						{"Don't have an account? Sign Up"}
					</Link>
				</Grid>
			</Grid>
		</Container>
	);
}

export default Login;

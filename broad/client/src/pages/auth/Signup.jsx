import * as React from 'react';
import TextField from '@mui/material/TextField';
import {Container, FormControlLabel} from '@mui/material';
import {Checkbox, Button, Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';

function Signup() {
	return (
		<Container>
			<h3>Sign In</h3>
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
					Sign In
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

export default Signup;

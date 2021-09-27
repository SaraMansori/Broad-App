import * as React from 'react';
import TextField from '@mui/material/TextField';
import {Container, FormControlLabel} from '@mui/material';
import Checkbox from '@material-ui/core/Checkbox';

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
			</form>
		</Container>
	);
}

export default Signup;

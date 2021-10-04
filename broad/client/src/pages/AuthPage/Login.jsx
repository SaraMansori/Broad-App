import React, { useState } from 'react';
import { InputGroup, Button, FormControl, Container } from 'react-bootstrap/'
import { Link } from 'react-router-dom';
import AuthService from '../../services/auth.service';
import { SIGNUP } from '../../utils/paths';

const authService = new AuthService();

const LoginForm = props => {
	const [formData, setFormData] = useState({ username: '', pwd: '' });

	const clearState = () => {
		setFormData({ username: '', pwd: '' });
	};

	const handleInput = e => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = e => {
		e.preventDefault();

		const { username, pwd } = formData;

		authService
			.login(username, pwd)
			.then(res => {
				props.storeUser(res.data);
				clearState();
			}) // añadir redirect to /home
			.catch(err => console.error(err));
	};

	return (
		<Container className='d-flex justify-content-center flex-column align-items-center'>
			<h3>Log In</h3>
			<form onSubmit={handleSubmit}>
				<InputGroup style={{ display: 'inline-block' }}>

					<FormControl
						style={{ width: '300px', margin: '15px' }}
						placeholder="Username..."
						aria-label="username"
						aria-describedby="username"
						name="username"
						type="text"
						value={formData.username}
						onChange={e => handleInput(e)}
					/>


					<FormControl
						style={{ width: '300px', margin: '15px' }}
						placeholder="Password..."
						aria-label="password"
						aria-describedby="password"
						name="password"
						type="text"
						value={formData.pwd}
						onChange={e => handleInput(e)}
					/>

					<Button className='block-button' type="submit" variant="primary">
						Log In
					</Button>
				</InputGroup>
			</form>


			<Link className='plain-link' to={'#'}>
				Forgot password?
			</Link>


			<Link className='plain-link' to={SIGNUP}>
				Don't have an account? Sign Up
			</Link>


		</Container>
	);
};

export default LoginForm;

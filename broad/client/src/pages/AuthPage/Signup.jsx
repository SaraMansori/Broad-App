import React, { useState, useContext } from 'react'
import UserContext from '../../UserContext';
import { InputGroup, Button, FormControl, Container } from 'react-bootstrap/'
import { Link, useHistory } from 'react-router-dom'
import AuthService from '../../services/auth.service'
import { LOGIN } from '../../utils/paths'

const authService = new AuthService()

const SignupForm = () => {
	const [formData, setFormData] = useState({ email: '', username: '', pwd: '' })

	let history = useHistory();
	const { storeUser } = useContext(UserContext)

	const clearState = () => {
		setFormData({ email: '', username: '', pwd: '' })
	};

	const handleChange = e => {
		const { value, name } = e.target;
		setFormData({ ...formData, [name]: value })
	};

	const handleSubmit = e => {
		e.preventDefault();

		const { email, username, pwd } = formData;

		authService
			.signup(email, username, pwd)
			.then(res => {
				storeUser(res.data.user)
				history.push('/')
				clearState()
			})
			.catch(err => console.error(err))
	};

	return (
		<Container className='d-flex justify-content-center flex-column align-items-center'>
			<h3>Sign Up</h3>
			<form onSubmit={handleSubmit}>
				<InputGroup style={{ display: 'inline-block' }}>

					<FormControl
						style={{ width: '300px', margin: '15px' }}
						placeholder="E-mail..."
						aria-label="email"
						aria-describedby="email"
						name="email"
						type="text"
						value={formData.email}
						onChange={e => handleChange(e)}
					/>


					<FormControl
						style={{ width: '300px', margin: '15px' }}
						placeholder="Username..."
						aria-label="username"
						aria-describedby="username"
						name="username"
						type="text"
						value={formData.username}
						onChange={e => handleChange(e)}
					/>

					<FormControl
						style={{ width: '300px', margin: '15px' }}
						placeholder="Password..."
						aria-label="password"
						aria-describedby="password"
						name="pwd"
						type="password"
						value={formData.pwd}
						onChange={e => handleChange(e)}
					/>

					<Button className='block-button' type="submit" variant="primary">
						Sign up
					</Button>
				</InputGroup>
			</form>


			<h6>
				Already have an account?
			</h6>


			<Button className='block-button' as={Link} to={LOGIN} type="submit" variant="primary">
				Log in
			</Button>


		</Container>)
}

export default SignupForm;

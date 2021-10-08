import React, { useState, useContext } from 'react'
import UserContext from '../../UserContext'
import { InputGroup, Button, FormControl, Container } from 'react-bootstrap/'
import { Link, useHistory } from 'react-router-dom'
import AuthService from '../../services/auth.service'
import { LOGIN } from '../../utils/paths'
import toast, { Toaster } from 'react-hot-toast';

const authService = new AuthService()
const wrongPassword = () => toast.error("Wrong password, please try again.")



const SignupForm = () => {

	const [formData, setFormData] = useState({ email: '', username: '', pwd: '' })
	const [toasts, setToasts] = useState()

	let history = useHistory()
	const { storeUser } = useContext(UserContext)

	const clearState = () => {
		setFormData({ email: '', username: '', pwd: '' })
	}

	const handleChange = e => {
		const { value, name } = e.target
		setFormData({ ...formData, [name]: value })
	}

	const handleSubmit = e => {

		e.preventDefault()

		const { email, username, pwd } = formData

		authService
			.signup(email, username, pwd)
			.then(res => {
				storeUser(res.data.user)
				/* 				if (res.code === 401) {
									setToasts(wrongPassword)
								} */
				history.push('/signup/genres')
				clearState()
			})
			.catch(err => err => console.error(err))
	}

	return (
		<Container className='d-flex justify-content-center flex-column align-items-center'>
			{toasts}
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
						Sign Up
					</Button>

				</InputGroup>
			</form>

			<h6>Already have an account?</h6>

			<Button className='block-button' as={Link} to={LOGIN} type="submit" variant="primary">
				Log In
			</Button>

		</Container>
	)

}


export default SignupForm

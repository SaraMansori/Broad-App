import { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { Container, Button, Row, Col } from 'react-bootstrap'
import UsersService from '../../services/users.service'
import genres from '../../utils/bookGenres'

const usersService = new UsersService()


const SignupGenresPage = props => {

	const [favoriteGenres, setSignupGenresData] = useState([])

	let history = useHistory()

	const clearState = () => {
		setSignupGenresData([])
	}


	const handleClick = e => {
		const currentGenre = e.target.innerText;

		if (!favoriteGenres.includes(currentGenre)) {
			setSignupGenresData(favoriteGenres => [...favoriteGenres, currentGenre])
		} else {
			setSignupGenresData(favoriteGenres =>
				favoriteGenres.filter(genre => genre !== currentGenre)
			)
		}
	}


	const handleSubmit = e => {
		e.preventDefault()

		usersService
			.updateFavoriteGenres(favoriteGenres)
			.then(() => {
				clearState()
				history.push('/signup/info')
			})
			.catch(err => console.error(err))
	}

	return (
		<Container>
			<Row className="d-flex justify-content-center">
				<Col md={6} xs={12}>
					<h2 className="mb-5">Choose your favorite genres</h2>

					<form onSubmit={handleSubmit}>
						<div className='buttonsList' style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
							{genres.map((genre, i) => {
								return (
									<Button
										onClick={e => handleClick(e)}
										key={`genre${i}`}
										style={{ flexGrow: '1' }}
										variant={
											favoriteGenres?.includes(genre) ? 'primary' : 'secondary'
										}
									>
										{genre}
									</Button>
								)
							})}
						</div>

						<Button type="submit" className="mt-4" style={{ width: '100%' }} variant="primary">
							SUBMIT
						</Button>

						<Link to="/signup/info" className='plain-link mt-4' style={{ width: '100%', margin: 'auto' }} as={Link} to={'#'} type="submit" variant="primary">
							<p style={{ textAlign: 'center' }}>Skip</p>
						</Link>
					</form>
				</Col>
			</Row>
		</Container>
	)
}


export default SignupGenresPage

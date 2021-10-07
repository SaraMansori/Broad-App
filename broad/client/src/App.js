import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './components/Routes'
import { UserProvider } from './UserContext'
import Navbar from './components/Layout/Navtop'
import AuthService from './services/auth.service'
import './Css/App.css'

const authService = new AuthService()

const App = props => {

  const [loggedUser, setLoggedUser] = useState(undefined)

  const storeUser = user => setLoggedUser(user)

  const fetchUser = () => {
    authService.isLoggedIn()
      .then(res => storeUser(res.data))
      .catch(err => storeUser(null))
  }

  useEffect(() => {
    fetchUser()
  }, [])


  return (
    <>
      <Router>
        <UserProvider value={{ loggedUser, storeUser, fetchUser }}>
          <Navbar {...props} />

          {loggedUser !== undefined && <Routes {...props} />}

          {/* <Footer /> */}
        </UserProvider>
      </Router>
    </>
  )

}


export default App

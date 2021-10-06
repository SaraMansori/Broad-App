import axios from 'axios'


class AuthService {

  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/auth`,
      withCredentials: true
    })
  }

  signup = (email, username, pwd) => this.instance.post("/signup", { email, username, pwd })

  login = (username, pwd) => this.instance.post("/login", { username, pwd })

  logout = () => this.instance.get("/logout")

  isLoggedIn = () => this.instance.post("/is-logged-in")

  refreshSession = () => this.instance.post("/refresh-session")

}


export default AuthService

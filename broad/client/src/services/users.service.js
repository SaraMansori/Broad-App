import axios from 'axios';

class UsersService {
  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/users`,
      withCredentials: true
    })
  }

  signupInfo = (id, name, description, profileImage, location) => {
    this.instance.post(`/${id}/edit/signup-info`, { name, description, profileImage, location })
  }
  updateFavoriteGenres = (id, favoriteGenres) => {
    this.instance.put(`/${id}/edit/genres`, { favoriteGenres })
  }

}

export default UsersService;
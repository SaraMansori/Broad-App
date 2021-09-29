import axios from 'axios';

class UsersService {
  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/users`,
      withCredentials: true
    })
  }

  getSignupInfo = (id, name, description, profileImage, location) => {
    return this.instance.put(`/${id}/edit/signup-info`, { name, description, profileImage, location })
  }
  updateFavoriteGenres = (id, favoriteGenres) => {
    return this.instance.put(`/${id}/edit/genres`, { favoriteGenres })
  }

}

export default UsersService;
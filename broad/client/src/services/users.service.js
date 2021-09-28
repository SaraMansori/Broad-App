import axios from 'axios';

class UsersService {
  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/users`,
      withCredentials: true
    })
  }

  updateFavoriteGenres = (id, favoriteGenres) => this.instance.put(`/${id}/edit/genres`, { favoriteGenres })

}

export default UsersService;
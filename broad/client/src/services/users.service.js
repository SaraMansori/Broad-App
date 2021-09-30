import axios from 'axios';

class UsersService {
  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/users`,
      withCredentials: true,
    });
  }

  getSignupInfo = (id, name, description, profileImage, location) => {
    return this.instance.post(`/${id}/edit`, { name, description, profileImage, location });
  };

  updateFavoriteGenres = (id, favoriteGenres) => {
    return this.instance.put(`/${id}/edit`, { favoriteGenres });
  };

  updateUserBooks = (userId, book) => {
    return this.instance.put(`/${userId}/edit,`, { book })
  }

  getUserInfo = id => this.instance.get(`/${id}`);
}

export default UsersService;

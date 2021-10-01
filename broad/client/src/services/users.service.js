import axios from 'axios';

class UsersService {
  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/users`,
      withCredentials: true,
    });
  }

  getSignupInfo = (name, description, profileImage, location) => {
    return this.instance.put(`/signup-info`, { name, description, profileImage, location })
  }

  updateFavoriteGenres = (favoriteGenres) => {
    return this.instance.put(`/genres`, { favoriteGenres })
  }

  getUsers = () => this.instance.get('/')

  deleteFriend = friendId => this.instance.put('/delete-friend', { friendId })

  updateUserBooks = (book) => {
    return this.instance.put(`/update-books,`, { book })
  }

  getUserInfo = id => this.instance.get(`/${id}`);

}

export default UsersService;

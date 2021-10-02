import axios from 'axios';

class UsersService {
  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/users`,
      withCredentials: true,
    });
  }

  updateSignupInfo = (name, description, profileImage, location) => {
    return this.instance.put(`/edit/signup-info`, { name, description, profileImage, location })
  }

  updateFavoriteGenres = (favoriteGenres) => {
    return this.instance.put(`/edit/genres`, { favoriteGenres })
  }

  getUsers = () => this.instance.get('/')

  deleteFriend = friendId => this.instance.put('/delete-friend', { friendId })

  updateUserBooks = book => this.instance.put(`/update/books`, { book })

  getUserInfo = id => this.instance.get(`/${id}`);

  getBooksToExchange = () => this.instance.get('/books-to-exchange')

}

export default UsersService;

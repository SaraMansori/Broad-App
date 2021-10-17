# Broad

#### App demo: https://broad-books.herokuapp.com/

### Description

**Broad** is a single page application (SPA) to to facilitate access to books for users and encourage reading.

### App functionalities

The app allows users to keep track of the books they have read, are reading or want to read, and gives them the possibility to talk to other users in order to exchange books with them. It uses Google Books API to show books information.

### Server Install

```sh
npm install
```

### Server Usage

```sh
npm run dev
```

### Server .env variables needed

- PORT=5005
- ORIGIN=http://localhost:3000
- DB_REMOTE
- SESS_SECRET
- CLOUDINARY_NAME
- CLOUDINARY_KEY
- CLOUDINARY_SECRET
- GOOGLE_BOOKS_API_URL=https://www.googleapis.com/books/v1/volumes
- GOOGLE_BOOKS_API_KEY

### Client Install

```sh
npm install
```

### Client Usage

```sh
npm run start
```

### Client .env variables needed

- REACT_APP_API_URL=http://localhost:5005/api

### Endpoints

|	Method	|	Path	|	Description	|
|	-	|	-	|	-	|
|	POST	|	/api/auth/signup	|	A new user is added to the database if the input fields are not empty and the user does not exist yet, otherwise the user gets an error message. A link to log in page is also available to the user.	|
|	POST	|	/api/auth/login	|	If the data introduced corresponds to a registered user and the password is correct, the user is logged in, otherwise the user gets an error message.	|
|	GET	|	/api/auth/logout	|	Ends the current session.	|
|	POST	|	/api/auth/refresh-session	|	Refresh user session by bringing updated user info from database.	|
|	POST	|	/api/auth/is-logged-in	|	Verifies if a user is logged in.	|
|	GET	|	/api/books/:text	|	Brings from Google Books API books that match with the text written in the search bar.	|
|	GET	|	/api/books/search-book-by/:type/:text	|	Brings from Google Books API books that match with the type of search (by author, genre, title or ISBN) and the text written in the search bar.	|
|	GET	|	/api/chats/	|	Brings all chats where the logged user is a participant.	|
|	POST	|	/api/chats/	|	Creates a new chat conversation between two users.	|
|	PUT	|	/api/chats/	|	Creates new messages and updates the chat where they were sent.	|
|	GET	|	/api/exchanges/	|	Brings all exchanges made by the current user (lent and borrowed books) from database with selected data from Google Books API.	|
|	GET	|	/api/requests/	|	Brings current user's PENDING requests.	|
|	GET	|	/api/requests/exchange	|	Check if a specific book exchange request already has been created by the logged user.	|
|	GET	|	/api/requests/:type	|	Check if a request exists between two users. Currently using for friendship requests.	|
|	POST	|	/api/requests/	|	Create new request with PENDING status by default.	|
|	PUT	|	/api/requests/	|	Update request status to ACCEPTED or REJECTED and manages the logic depending on the request type (add friends and delete request if ACCEPTED and type FRIENDSHIP | Create exchanged book, update book availability in owner and deleting request if ACCEPTED and type EXCHANGE | Changing status to REJECTED).	|
|	DELETE	|	/api/requests/	|	Deletes request.	|
|	GET	|	/api/users/	|	Brings all users but the logged in one.	|
|	PUT	|	/api/users/update/books	|	Modifies the user by adding or changing information about a book (e.g. if a user wants to exchange a book, wants to read or is currently reading another one, etc.).	|
|	DELETE	|	/api/users/:id	|	Deletes user.	|
|	PUT	|	/api/users/edit/:infoToUpdate	|	Updates user info (favourite genres, username, profile image, description…).	|
|	PUT	|	/api/users/delete-friend	|	Deletes friendship between two users, that is, both users are deleted from each others array of friends.	|
|	GET	|	/api/users/books-to-exchange	|	Brings all available books to exchange but the ones that the logged in user is offering to exchange.	|
|	GET	|	/api/users/:id	|	Brings data from a specific user.	|

### Technologies

- React
- MongoDB
- Express
- Node
- Javascript (ES6)
- HTML & CSS
- Sass

### Additional info

This project has been developed by Sara Mansori, Vanessa Zagone and Laura de Cos as the final project of Ironhack's Web Development Bootcamp and it has been created in two weeks.
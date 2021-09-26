# Broad

### Endpoints

|	Method	|	Path	|	Description	|
|	------	|	----	|	-----------	|
|	POST	|	/api/auth/signup	|	A new user is added to the database if the input fields are not empty and the user does not exist yet, otherwise the user gets an error message. A link to log in page is also available to the user.	|
|	POST	|	/api/auth/login	|	If the data introduced corresponds to a registered user and the password is correct, the user is logged in, otherwise the user gets an error message.	|
|	GET	|	/api/auth/logout	|	Ends the current session.	|
|	POST	|	/api/auth/isloggedin	|	Verifies if a user is logged in and sends the information to the frontend.	|
|	GET	|	api/users	|		|
|	GET	|	api/users/:id	|		|
|	POST	|	api/users/:id/delete	|	Selects	|
|	POST	|	api/users/:id/edit	|		|
|	POST	|	api/users/:id/vote	|		|
|	GET	|	api/user-books/:id	|		|
|	POST	|	api/user-books/:id/:section/:action/:book_id	|		|
|	GET	|	api/exchanges	|		|
|	GET	|	api/exchanges/new/:bookId	|		|
|	GET	|	/api/quotes	|	Obtener todas las quotes	|
|	POST	|	/api/quotes/create	|		|
|	POST	|	/api/quotes/edit	|		|
|	POST	|	/api/quotes/delete	|		|
|	GET	|	/api/quotes/:userId	|	Published, pending…	|
|	POST	|	/api/quotes/addFavorite/:id	|		|
|	POST	|	/api/quotes/deleteFavorite/:id	|		|
|	POST	|	/api/quotes/vote/:id	|		|
|	GET	|	/api/friends	|	Todos los amigos del logged in user	|
|	POST	|	/api/friends/add/:id	|		|
|	POST	|	/api/friends/accept/:id	|		|
|	POST	|	/api/friends/reject/:id	|		|
|	POST	|	/api/friends/delete/:id	|		|
|	GET	|	/api/chat	|	Todos los chats del usuario	|
|	POST	|	/api/chat/create/:userId	|	id del usuario que envía la request	|
|	POST	|	/api/chat/delete/:chatId	|		|
|	GET	|	/api/challenges	|	Todos los challenges del usuario	|
|	POST	|	/api/challenges/create/:id	|		|
|	POST	|	/api/challenges/edit/:id	|		|
|	POST	|	/api/challenges/delete/:id	|		|

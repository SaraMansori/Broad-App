require("dotenv/config");
require("./db");

const { addUser, removeUser, getUser, getUsersInRoom } = require('./utils/chatUsers')

const express = require("express");
const socketio = require("socket.io")
const http = require("http")

const app = express();
const server = http.createServer(app)
const io = socketio(server)

io.on('connect', (socket) => {

  console.log('We have a new connection')

  socket.on('join', ({ username, room }, callback) => {

    console.log(socket.id, username, room)

    const { error, user } = addUser({ id: socket.id, username, room })

    if (error) return callback(error)

    socket.emit('message', { user: 'admin', text: `${user.username}, welcome to the chat` })
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined the chat` })

    socket.join(user.room)

    callback()
  })

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id)

    io.to(user.room).emit('message', { user: user.username, text: message })

    callback()
  })

  socket.on('disconnect', () => {
    console.log('User has left')
  })
})

require("./config")(app);
require('./config/session.config')(app);

const allRoutes = require("./routes");
app.use("/api", allRoutes);

require("./error-handling")(app);

module.exports = server;

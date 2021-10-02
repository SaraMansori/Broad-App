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

  socket.on('join', ({ username }, callback) => {
    console.log(username)


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

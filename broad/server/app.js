require("dotenv/config")
require("./db")

const { addUser, removeUser, getUser, getUsersInRoom } = require('./utils/chatUsers')

const express = require("express")
const socketio = require("socket.io")
const http = require("http")
const cors = require("cors")

const app = express()
const server = http.createServer(app)
const io = socketio(server)
const path = require('path')

io.on('connect', socket => {

  socket.on('join', ({ username, room }, callback) => {

    const { error, user } = addUser({ id: socket.id, username, room })

    if (error) return callback(error)

    socket.emit('message', { user: 'admin', text: `${user.username}, welcome to the chat` })
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.username} has joined the chat` })

    socket.join(user.room)

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) })

    callback()
  })

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id)
    io.to(user.room).emit('message', { user: user.username, text: message, hasBeenRead: false })

    callback()
  })

  socket.on('disconnect', () => {
    const user = removeUser(socket.id)
    if (user) {
      io.to(user.room).emit('message', { user: 'admin', text: `${user.username} has left the chat` })
    }
  })
})

require("./config")(app)
require('./config/session.config')(app)

app.use(express.static(path.join(__dirname, "public")))
const allRoutes = require("./routes")
app.use("/api", allRoutes)
app.use(cors())

app.use((req, res) => res.sendFile(__dirname + "/public/index.html"))

module.exports = server

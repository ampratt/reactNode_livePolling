var express = require('express')

// usable instance of an express app
let app = express()

// server files from static public dir
app.use(express.static('./public'))
app.use(express.static('./node_modules/bootstrap/dist'))

// port
let server = app.listen(3000)

// socket server to also listen on port 3000
let io = require('socket.io').listen(server)

// event hanler for socket connect
io.sockets.on('connection', (socket) => {
	console.log("Connected: %s", socket.id)
})

console.log("Polling server is running at 'http://localhost:3000'")
var express = require('express')

let connections = []

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

	// handle disconnection
	socket.once('disconnect', () => {
		connections.splice(connections.indexOf(socket), 1)
		socket.disconnect() // client may be gone, but force remove from server side
		console.log("Disconnected: %s sockets remaining.", connections.length)
	})


	connections.push(socket) // add connected socket to list
	console.log("Connected: %s sockets connected", connections.length)
})

console.log("Polling server is running at 'http://localhost:3000'")
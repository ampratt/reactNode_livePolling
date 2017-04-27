var express = require('express')
// usable instance of an express app
let app = express()

let connections = []
let title = 'Untitled Presentation'


// server files from static public dir
app.use(express.static('./public'))
app.use(express.static('./node_modules/bootstrap/dist'))

// port
let server = app.listen(3000)

// socket server to also listen on port 3000
let io = require('socket.io').listen(server)

// event handler for socket connect
io.sockets.on('connection', (socket) => {

	// handle disconnection
	socket.once('disconnect', () => {
		connections.splice(connections.indexOf(socket), 1)
		socket.disconnect() // client may be gone, but force remove from server side
		console.log("Disconnected: %s sockets remaining.", connections.length)
	})

	// throw 'title' info to client
	socket.emit('welcome', {
		title: title
	})

	connections.push(socket) // add connected socket to list
	console.log("Connected: %s sockets connected", connections.length)
})

console.log("Polling server is running at 'http://localhost:3000'")
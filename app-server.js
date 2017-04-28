let express = require('express')
let _ = require('underscore') 
// usable instance of an express app
const app = express()

let connections = []
let title = 'Untitled Presentation'
let audience = []


// server files from static public dir
app.use(express.static('./public'))
app.use(express.static('./node_modules/bootstrap/dist'))

// port
let server = app.listen(3000)

// socket server to also listen on port 3000
let io = require('socket.io').listen(server)

// event handler for socket connect
io.on('connection', (socket) => {

	// handle disconnection
	socket.once('disconnect', () => {
		// remove member fro audience list
		let member =_.findWhere(audience, { id: this.id })
		if (member) {
			audience.splice(audience.indexOf(member),1)
			// notify audience of member change
			io.sockets.emit('audience', audience)
			console.log("Left: %s (%s audience members)", member.name, audience.length)
		}


		connections.splice(connections.indexOf(socket), 1)
		socket.disconnect() // client may be gone, but force remove from server side
		console.log("Disconnected: %s sockets remaining.", connections.length)
	})

	socket.on('join', (payload) => {
		// 'this' refers to current socket
		let newMember = {
			id: this.id,
			name: payload.name
		}
		// respond to client
		socket.emit('joined', newMember)
		audience.push(newMember)
		// broadcast event to all connected sockets
		io.sockets.emit('audience', audience)
		console.log("Audience Joined: %s", payload.name)
	})

	// throw 'title' info to client
	socket.emit('welcome', {
		title: title
	})

	connections.push(socket) // add connected socket to list
	console.log("Connected: %s sockets connected", connections.length)
})

console.log("Express polling server is running at 'http://localhost:3000'")
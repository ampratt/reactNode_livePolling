var express = require('express')

// usable instance of an express app
let app = express()

// server files from static public dir
app.use(express.static('./public'))
app.use(express.static('./node_modules/bootstrap/dist'))

// port
app.listen(3000)

console.log("Polling server is running at 'http://localhost:3000'")
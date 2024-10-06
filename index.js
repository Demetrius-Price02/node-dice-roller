const express = require('express')
app = express()

const port = process.env.PORT || 3000
const majorVersion = 1
const minorVersion = 3

// Use Express to publish static HTML, CSS, and JavaScript files that run in the browser. 
app.use(express.static(__dirname + '/static'))
app.use(cors({ origin: '*' }))

// Return rnadom number between 1 and 6.
app.get('/d6', (request, response) => {
	console.log('Calling "/d6" on the Node.js server.')
	response.type('text/plain')
	let ran = Math.floor(Math.random() * 6 + 1)
	response.send(ran.toString)
})
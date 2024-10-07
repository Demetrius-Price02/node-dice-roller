const express = require('express')
app = express()

const cors = require("cors")

var url = require('url');

const port = process.env.PORT || 3000
const majorVersion = 1
const minorVersion = 3

// Use Express to publish static HTML, CSS, and JavaScript files that run in the browser. 
app.use(express.static(__dirname + '/static'))
app.use(cors({ origin: '*' }))

// Return rnadom number between 1 and 6.
app.get('/d6', (request, response) => {
	console.log('Calling "/d6" on the Node.js server.')
	const ran = Math.floor(Math.random() * 6 + 1)
	response.json({Number: ran})
})

// Custom 404 page.
app.use((request, response) => {
	response.type('text/plain')
	response.status(404)
	response.send('404 - Not Found')
  })
  
  // Custom 500 page.
  app.use((err, request, response, next) => {
	console.error(err.message)
	response.type('text/plain')
	response.status(500)
	response.send('500 - Server Error')
  })

app.listen(port, () => console.log(
	`Express started at \"http://localhost:${port}\"\n` +
	`press Ctrl-C to terminate.`)
  )
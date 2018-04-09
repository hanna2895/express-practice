const express = require('express'); // need to require express in our file to be able to use it -> imports the express module into our app
const app = express();

// Now attached to app, we have a bunch of methods to start our server and send responses to the client

app.get('/', (request, response) => {
	response.send("Hi I'm the server")
});

app.get('/anythingWeWant', (request, response) => {
	response.send("whatever we want")	
})

app.get('/whatever', (request, response) => {
	response.send("lol here's a thing")	
})

app.get('/tacos', (request, response) => {
	response.send('tacos')	
})

app.listen(3000, () => {
	console.log('server is listening on Port 3000');
})
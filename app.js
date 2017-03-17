var express = require('express');
var path = require('path');
var swaggerJSDoc = require('swagger-jsdoc');
var ticketController = require('./controllers/ticketController');
var userController = require('./controllers/userController');

// Instantiate an Express Object to use the Express Framework functionalities...
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

// initialize swagger-jsdoc
var swaggerSpec = swaggerJSDoc({
  // import swaggerDefinitions
  swaggerDefinition: {
    info: {
      title: 'Node Swagger API',
      version: '1.0.0',
      description: 'Demonstrating how to describe a RESTful API with Swagger',
    },
    host: 'localhost:80',
    basePath: '/',
  },
  // path to the API docs
  apis: ['./controllers/*.js'],
});

app.set('title', 'Portal do Colaborador');
// app.set('view cache','false');
// console.log('App cache value is set to : ',app.get('view cache'));

// fire controllers
ticketController(app);
// userController(app);
app.use(userController);

//
app.get('/swagger.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});


// start the web server
app.listen(80);
console.log('Running the http server on port 80...');

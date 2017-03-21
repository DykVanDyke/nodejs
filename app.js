var express = require('express');
var path = require('path');
var swaggerJSDoc = require('swagger-jsdoc');
var ticketController = require('./controllers/ticketController');
var userController = require('./controllers/userController');
var server_port = 3080;

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
    host: 'localhost:'+server_port,
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
app.get('/', function(req,res) {
  res.setHeader('Content-Type', 'text/html');
  var HTMLstring = "  <body>    \
  <h1>Index of a RESTful API</h1> \
    <ul> \
      <li>API description: <a href='/api-docs/index.html'>Swagger-UI</a> </li> \
      <li>API description: <a href='/swagger.json'>JSON</a> </li></li> \
    </ul> \
    <p>Don't forget to update URL/PORT number on line 41 from file public\\api-docs\\index.html for SWAGGER-UI to work...</p> \
  </body> ";
  res.send(HTMLstring);
});
//
app.get('/swagger.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});


// start the web server
app.listen(server_port);
console.log('Running the http server on port '+server_port+'...');

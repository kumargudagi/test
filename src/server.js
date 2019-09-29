
const express = require('express');
const http = require('http');
const appRoute = require('./routes/appRoute')
const bodyParser = require ('body-parser')
const cors = require('cors')
const dbconnection = require('./db/connection');
const app = express();
const httpServer = http.createServer(app);

  
 
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cors());
  appRoute.initialize(app);
  dbconnection.dbConnection()

  // socket.socketSetup(httpServer);
  // app.listen(3000);
  httpServer.listen(3000);
  console.log('chat-service is listening on port ' + 3000);



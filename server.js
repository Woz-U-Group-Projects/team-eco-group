var express = require('express');

const app = require('./app'); //importing app from app.js

const port = 5000; //declaring the port for our server to listen to requests on

app.listen(port, () => console.log(`Server is running on port ${port}`)); 
//this echo's the ports to let you know where our project is running
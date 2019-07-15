const express = require('express'); //including express in our project

const app = express(); //initializing express so it's easier to use in our file

const port = 5000; //declaring the port for our server to listen to requests on

// allow access originating from our client!
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
  });

//this will house the logic for our requests and responses
app.get('/api/v1', (req, res) => {

    //Here is where we could include the logic for the API like receiving and authenticating login info.
    const customers = [
        {id: 0, firstName: 'Express API has been connected to frontend!'},
        {id: 1, firstName: 'John', lastName: 'Doe'},
        {id: 2, firstName: 'Steve', lastName: 'Smith'},
        {id: 3, firstName: 'Mary', lastName: 'Joe'}
    ];

    res.json(customers); //this responds with our customer object in JSON
});

app.listen(port, () => console.log(`Server is running on port ${port}`)); 
//this echo's the ports to let you know where our project is running
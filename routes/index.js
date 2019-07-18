var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const mysql2 = require('mysql2');
const models = require('../models');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Password1!',
  database: 'recyclingdb'
});

connection.connect(function (err) {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('Yay! You are connected to the database!');
})

//v1 example - basic API connectivity
//returns static JSON
router.get('/api/v1', (req, res, next) => {

  //Here is where we could include the logic for the API like receiving and authenticating login info.
  const customers = [
    { id: 0, firstName: 'Express API has been connected to frontend!' },
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Steve', lastName: 'Smith' },
    { id: 3, firstName: 'Mary', lastName: 'Joe' }
  ];

  res.json(customers); //this responds with our customer object in JSON
});

// API v2 - first SQL database connection
router.get('/api/v2', (req, res, next) => {

  //Here is where we could include the logic for the API like receiving and authenticating login info.
  const query = `SELECT * from donor LIMIT 10`;

  connection.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });

});

// API v3 with Sequelize
router.get('/api/v3', (req, res, next) => {
  models.donor.findAll({}).then(donorsList => 
    res.json(donorsList)
  );

});

// router.get("/", function(req, res, next) {
//   models.Fruit.findAll().then(fruits => res.json(fruits));
// });

// router.post("/", function(req, res, next) {
//   console.log(req.body);
//   let newFruit = new models.Fruit();
//   newFruit.name = req.body.name;
//   newFruit.save().then(fruit => res.json(fruit));
// });

// module.exports = router;

//  should return all rows in the database that match the query string, which in this case is SELECT * from actor LIMIT 10
// const query = `SELECT * from actor LIMIT 10`;
// connection.query(query, (err, results) => {
//   if (err) throw err;
//   console.log(results);
// });

// db.all(query, (err, row) => {
//   if (err) throw err;
//   console.log(row);
// });

// router.get('/actor/:id', function(req, res, next) {
//   //add code here
// });

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
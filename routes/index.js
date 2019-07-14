var express = require('express');
var router = express.Router();
const mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Password1!',
  database: 'recyclingdb'
});

connection.connect(function(err) {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('Yay! You are connected to the database!');
})

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
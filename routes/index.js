var express = require('express');
var router = express.Router();

// includes for our database
const mysql = require('mysql');
const mysql2 = require('mysql2');
const models = require('../models');

// includes for Square integration
var uuid = require('uuid/v4');
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'EAAAEIXEuttn_8-jKSLcpoIgmfeo2yqHlJGzGdIg-SOSmlDN8OmiHU6tvMoh-6o2';

// for v2 of our API
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
//no functionality, just returns a test string.
router.get('/api/v1/test', (req, res, next) => {

  res.send('Express API is ready'); //this responds with our customer object in JSON
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

// API v3 get all donors (with Sequelize)
router.get('/api/v3', (req, res, next) => {
  models.donor.findAll({}).then(donorsList =>
    res.json(donorsList)
  );

});

/* GET /api/v3/donors/ - return entire table of donors
   GET /api/v3/donors/:id - return donor by ID
   GET /api/v3/donors?search=searchfield - search first & last name
   GET /api/v3/videolinks/ - all links sorted from highest to lowest
   POST /api/v3/videolinks/:id/upvote - upvote link
   POST /api/v3/videolinks/:id/downvote - downvote link
   */

// API v3 Square POST
router.post('/api/v3/transact', (req, res, next) => {
  var apiInstance = new SquareConnect.TransactionsApi();
  var locationId = "CBASECNAvp9EvcDkIVIyQdNH-VsgAQ";

  var req_body = {
    idempotency_key: uuid(),
    amount_money: { amount: 1.00, currency: "USD" },
    card_nonce: req.body.nonce,
  };

  apiInstance.charge(locationId, req_body).then(function (data) {
    var json = JSON.stringify(data);
    console.log(json);
    res.render('process-payment', {
      'title': 'Payment Successful',
      'result': json
    });
  }, function (error) {
    res.render('process-payment', {
      'title': 'Payment Failure',
      'result': error.response.text
    });
  });
});

  // for preflight check used by post
  router.options("/*", function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.send(200);
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
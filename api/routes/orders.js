const express = require('express');
const router = express.Router();


const db = require('./connectDB');

// Handle incoming GET request to /orders

router.get('/', (req, res, next) => {
  db.any('select * from users')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL puppies'
        });
    })
    .catch(function (err) {
      return next(err);
    });
});

router.get('/', (req, res, next) => {
  db.any('select * from users')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL puppies'
        });
    })
    .catch(function (err) {
      return next(err);
    });
});

router.get('/:searchID', (req, res, next) => {
  db.one('select * from users where id='+req.params.searchID+'')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL puppies'
        });
    })
    .catch(function (err) {
      return next(err);
    });
});


router.post('/',(req,res,next) => {
  req.body.username;
  req.body.password;
 
  db.none('insert into users(username, password)' +
      'values(${username}, ${password})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one puppy'
        });
    })
    .catch(function (err) {
      return next(err);
    });

});




router.get('/:orderId', (req, res, next) => {
	res.status(200).json({
		message: 'Query completed',
		id: req.params.orderId

	});
});



module.exports = router;

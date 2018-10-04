const express = require('express');
const router = express.Router();


const db = require('./connectDB');



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
  db.any('select * from users where id='+req.params.searchID+'')
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


router.get('/:orderId', (req, res, next) => {
	res.status(200).json({
		message: 'Query completed',
		id: req.params.orderId

	});
});



module.exports = router;

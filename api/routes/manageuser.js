const express = require('express');

const bcrypt = require('bcryptjs');

const jwt =require('jsonwebtoken');

const router = express.Router();



const db = require('./connectDB');


router.post('/register', function(req, res, next) {

  req.body.username;

  var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  console.log(hashedPassword);


  db.none("insert into users(username,password) values ('"+req.body.username+"','"+hashedPassword+"')",req.body)
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


  // User.create({
  //   name : req.body.name,
  //   email : req.body.email,
  //   password : hashedPassword
  // },
  // function (err, user) {
  //   if (err) return res.status(500).send("There was a problem registering the user.")
  //   // create a token
  //   var token = jwt.sign({ id: user._id }, config.secret, {
  //     expiresIn: 86400 // expires in 24 hours
  //   });
  //   res.status(200).send({ auth: true, token: token });
  // }); 

});

router.post('/login', function(req, res, next) {
	 var password = req.body.password;
	db.one("select * from users where username='"+req.body.username+"' ")
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


module.exports = router ;
var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgresql://myproject:myproject12578@localhost:5432/myproject';
var db = pgp(connectionString);

console.log("Connect Completed");

// add query functions

/*
module.exports = {
  getAllPuppies: getAllPuppies,
  getSinglePuppy: getSinglePuppy,
  createPuppy: createPuppy,
  updatePuppy: updatePuppy,
  removePuppy: removePuppy
};*/
module.exports= db;
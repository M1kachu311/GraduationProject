const db = require("../db.js");

// //generate new encrypted pass
//const bcrypt = require("bcryptjs");
// bcrypt.genSalt(10, (err, salt) => {
//   pass = "";
//   bcrypt.hash(pass, salt, (err, hash) => {
//     if (err) throw err;
//     console.log(hash);
//   });
// });
const checkUser = (username, callback) => {
  let query = "SELECT * FROM finalprojectdb.managers where username=?;";
  db.runQuery(query, [username], callback);
};

const findById = (id, callback) => {
  let query = "SELECT * FROM finalprojectdb.managers where id=?;";
  db.runQuery(query, [id], callback);
};

module.exports = {
  checkUser: checkUser,
  findById: findById
};

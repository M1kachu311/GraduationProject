const db = require("../db.js");

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

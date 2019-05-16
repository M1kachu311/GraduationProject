const db = require("../db");

function getjobs(callback) {
  let query = "SELECT * FROM `jobs` ORDER BY ID DESC;";
  db.runQuery(query, [], callback);
}
function getjobbyid(id, callback) {
  let query = "SELECT * FROM `jobs` WHERE ID=?;";
  db.runQuery(query, [id], callback);
}
function uploadjob(name, description, date, type, location, callback) {
  let query =
    "INSERT INTO `jobs`(`Name`,`Description`,`Date`,`Type`,`Location`)VALUES(?,?,?,?,?);";
  db.runQuery(query, [name, description, date, type, location], callback);
}
function deletejob(id, callback) {
  let query = "DELETE FROM jobs WHERE ID=?";
  db.runQuery(query, [id], callback);
}
function updatejob(id, name, description, type, location, callback) {
  let query =
    "UPDATE `jobs` SET `Name`=?,`Description`=?,`Type`=?,`Location`=? WHERE ID=?";
  db.runQuery(query, [name, description, type, location, id], callback);
}

module.exports = {
  getjobs: getjobs,
  getjobbyid: getjobbyid,
  uploadjob: uploadjob,
  deletejob: deletejob,
  updatejob: updatejob
};

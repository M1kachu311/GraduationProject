const db = require("../db");

function getpersonnel(callback) {
  let query = "SELECT * FROM `personnel`;";
  db.runQuery(query, [], callback);
}
function getpersonnelbycategory(categoryId, callback) {
  let query = "SELECT * FROM `personnel` Where CategoryID=?";
  db.runQuery(query, [categoryId], callback);
}
function uploadpersonnel(name, description, image, categoryId, callback) {
  let query =
    "INSERT INTO `personnel`(`Name`,`Description`,`Image`,`CategoryID`)VALUES(?,?,?,?);";
  db.runQuery(query, [name, description, image, categoryId], callback);
}
function deletepersonnel(id, callback) {
  let query = "DELETE FROM personnel WHERE ID=?";
  db.runQuery(query, [id], callback);
}

function updatepersonnel(id, name, description, image, categoryId, callback) {
  let query =
    "UPDATE `personnel` SET `Name`=?,`Description`=?,`Image`=?,`CategoryID`=? WHERE ID=?";
  db.runQuery(query, [name, description, image, categoryId, id], callback);
}

module.exports = {
  getpersonnel: getpersonnel,
  getpersonnelbycategory: getpersonnelbycategory,
  uploadpersonnel: uploadpersonnel,
  deletepersonnel: deletepersonnel,
  updatepersonnel: updatepersonnel
};

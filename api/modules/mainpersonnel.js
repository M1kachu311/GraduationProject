const db = require("../db");

function getmainpersonnel(callback) {
  let query = "SELECT * FROM `mainpersonnel`;";
  db.runQuery(query, [], callback);
}

function uploadmainperson(name, title, phone, email, image, callback) {
  let query =
    "INSERT INTO `mainpersonnel`(`Name`,`Title`,`Phone`,`Email` ,`Image`)VALUES(?,?,?,?,?);";
  db.runQuery(query, [name, title, phone, email, image], callback);
}
function deletemainperson(id, callback) {
  let query = "DELETE FROM mainpersonnel Where ID=?;";
  run1 = db.runQuery(query, [id], callback);
}
function updatemainperson(id, name, title, phone, email, image, callback) {
  let query =
    "UPDATE `mainpersonnel` SET `Name`=? ,`Title`=?,`Phone`=?,`Email`=?,`Image`=? WHERE ID=?";
  db.runQuery(query, [name, title, phone, email, image, id], callback);
}

module.exports = {
  getmainpersonnel: getmainpersonnel,
  uploadmainperson: uploadmainperson,
  deletemainperson: deletemainperson,
  updatemainperson: updatemainperson
};

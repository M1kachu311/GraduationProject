const db = require("../db");

function getpersonnel(callback) {
  let query = "SELECT * FROM `personnel`;";
  db.runQuery(query, [], callback);
}
function getpersonnelbycategory(categoryId, callback) {
  let query = "SELECT * FROM `personnel` Where CategoryID=?";
  db.runQuery(query, [categoryId], callback);
}
function uploadpersonnel(
  name,
  title,
  image,
  categoryId,
  phone,
  email,
  callback
) {
  let query =
    "INSERT INTO `personnel`(`Name`,`title`,`Image`,`Phone`,`Email`,`CategoryID`)VALUES(?,?,?,?,?,?);";
  db.runQuery(query, [name, title, image, phone, email, categoryId], callback);
}
function deletepersonnel(id, callback) {
  let query = "DELETE FROM personnel WHERE ID=?";
  db.runQuery(query, [id], callback);
}

function updatepersonnel(
  id,
  name,
  title,
  image,
  phone,
  email,
  categoryId,
  callback
) {
  let query =
    "UPDATE `personnel` SET `Name`=?,`title`=?,`Image`=?,`Phone`=?,`Email`=?,`CategoryID`=? WHERE ID=?";
  db.runQuery(
    query,
    [name, title, image, phone, email, categoryId, id],
    callback
  );
}

module.exports = {
  getpersonnel: getpersonnel,
  getpersonnelbycategory: getpersonnelbycategory,
  uploadpersonnel: uploadpersonnel,
  deletepersonnel: deletepersonnel,
  updatepersonnel: updatepersonnel
};

const db = require("../db");

function getbigcategories(callback) {
  let query = "SELECT * FROM `bigcategories`;";
  db.runQuery(query, [], callback);
}

function getCount(callback) {
  let query = "SELECT COUNT (*) FROM `bigcategories`;";
  db.runQuery(query, [], callback);
}

function uploadbigcategory(name, callback) {
  let query = "INSERT INTO `bigcategories`(`Name`)VALUES(?);";
  db.runQuery(query, [name], callback);
}
function deletebigcategory(id, callback) {
  let query = "DELETE FROM bigcategories Where ID=?;";
  run1 = db.runQuery(query, [id], callback);
}
function updatebigcategory(id, name, callback) {
  let query = "UPDATE `bigcategories` SET `Name`=?  WHERE ID=?";
  db.runQuery(query, [name, id], callback);
}

module.exports = {
  getbigcategories: getbigcategories,
  uploadbigcategory: uploadbigcategory,
  deletebigcategory: deletebigcategory,
  updatebigcategory: updatebigcategory,
  getCount: getCount
};

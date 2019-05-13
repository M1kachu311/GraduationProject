const db = require("../db");

function getcategories(callback) {
  let query = "SELECT * FROM `categories`;";
  db.runQuery(query, [], callback);
}
function getLiveCategories(callback) {
  let query = "SELECT Name, ID ,Description FROM `categories` WHERE isLive=1;";
  db.runQuery(query, [], callback);
}

function getcategoriesbycategory(categoryId, callback) {
  let query = "SELECT * FROM `categories` Where bigCategory=? AND isLive=1;";
  db.runQuery(query, [categoryId], callback);
}

function getCount(callback) {
  let query = "SELECT COUNT (*) FROM `categories` WHERE IsLive=1;";
  db.runQuery(query, [], callback);
}

function uploadcategory(name, isLive, description, bigCategory, callback) {
  let query =
    "INSERT INTO `categories`(`Name`,`isLive`,`Description`,`bigCategory`)VALUES(?,?,?,?);";
  db.runQuery(query, [name, isLive, description, bigCategory], callback);
}
function deletecategorypt1(id, callback) {
  let query1 = "DELETE FROM categories Where ID=?;";
  run1 = db.runQuery(query1, [id], callback);
}
function deletecategorypt2(id, callback) {
  let query2 = "DELETE FROM posts Where CategoryID=?;";
  run2 = db.runQuery(query2, [id], callback);
}
function deletecategorypt3(id, callback) {
  let query3 = "DELETE FROM personnel Where CategoryID=?;";
  run3 = db.runQuery(query3, [id], callback);
}
function updatecategory(id, name, isLive, description, bigCategory, callback) {
  let query =
    "UPDATE `categories` SET `Name`=?,`isLive`=? ,`Description`=?, `bigCategory`=? WHERE ID=?";
  db.runQuery(query, [name, isLive, description, bigCategory, id], callback);
}

module.exports = {
  getcategories: getcategories,
  getLiveCategories: getLiveCategories,
  uploadcategory: uploadcategory,
  getcategoriesbycategory: getcategoriesbycategory,
  deletecategorypt1: deletecategorypt1,
  deletecategorypt2: deletecategorypt2,
  deletecategorypt3: deletecategorypt3,
  updatecategory: updatecategory,
  getCount: getCount
};

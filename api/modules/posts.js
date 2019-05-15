const db = require("../db");

function getCount(callback) {
  let query = "SELECT COUNT (*) FROM posts WHERE isLive=1 ;";
  db.runQuery(query, [], callback);
}
function getposts(callback) {
  let query = "SELECT * FROM `posts` ORDER BY ID DESC;";
  db.runQuery(query, [], callback);
}
function getliveposts(callback) {
  let query = "SELECT * FROM `posts` WHERE isLive=1 ORDER BY ID DESC;";
  db.runQuery(query, [], callback);
}
function getpostbycategory(categoryId, callback) {
  let query = "SELECT * FROM `posts` Where CategoryID=? AND isLive=1;";
  db.runQuery(query, [categoryId], callback);
}
function uploadpost(
  name,
  description,
  date,
  image,
  categoryId,
  isLive,
  callback
) {
  let query =
    "INSERT INTO `posts`(`Name`,`Description`,`Date`,`Image`,`CategoryID`, `isLive`)VALUES(?,?,?,?,?,?);";
  db.runQuery(
    query,
    [name, description, date, image, categoryId, isLive],
    callback
  );
}
function deletepost(id, callback) {
  let query = "DELETE FROM posts WHERE ID=?";
  db.runQuery(query, [id], callback);
}

function updatepost(
  id,
  name,
  description,
  image,
  categoryId,
  isLive,
  callback
) {
  let query =
    "UPDATE `posts` SET `Name`=?,`Description`=?,`Image`=?,`CategoryID`=? ,`isLive`=? WHERE ID=?";
  db.runQuery(
    query,
    [name, description, image, categoryId, isLive, id],
    callback
  );
}

module.exports = {
  getposts: getposts,
  getpostbycategory: getpostbycategory,
  uploadpost: uploadpost,
  deletepost: deletepost,
  updatepost: updatepost,
  getCount: getCount,
  getliveposts: getliveposts
};

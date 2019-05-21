const db = require("../db");

function getimages(callback) {
  let query = "SELECT * FROM `images` ORDER BY ID DESC;";
  db.runQuery(query, [], callback);
}
function uploadimage(url, turl, surl, name, callback) {
  let query =
    "INSERT INTO `images` (`URL`,`TURL`,`SURL`,`Name`) VALUES(?,?,?,?);";
  db.runQuery(query, [url, turl, surl, name], callback);
}
function deleteimage(id, callback) {
  let query = "DELETE FROM images WHERE ID=?";
  db.runQuery(query, [id], callback);
}
function updateimage(id, name, callback) {
  let query = "UPDATE `images` SET `Name`=? WHERE ID=?";
  db.runQuery(query, [name, id], callback);
}

module.exports = {
  getimages: getimages,
  uploadimage: uploadimage,
  deleteimage: deleteimage,
  updateimage: updateimage
};

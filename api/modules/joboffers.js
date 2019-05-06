const db = require("../db");

function getjoboffers(callback) {
  let query = "SELECT * FROM `joboffers`;";
  db.runQuery(query, [], callback);
}
function uploadjoboffer(
  name,
  description,
  type,
  location,
  sname,
  smail,
  sphone,
  callback
) {
  let query =
    "INSERT INTO `joboffers`(`Name`,`Description`,`Type`,`Location`,`Approved`,`SenderName`,`SenderMail`,`SenderPhone`)VALUES(?,?,?,?,0,?,?,?);";
  db.runQuery(
    query,
    [name, description, type, location, sname, smail, sphone],
    callback
  );
}

function updatejoboffer(
  id,
  name,
  description,
  type,
  location,
  approved,
  callback
) {
  let query =
    "UPDATE `joboffers` SET `Name`=?,`Description`=?,`Type`=?,`Location`=?,`Approved`=? WHERE ID=?";
  db.runQuery(
    query,
    [name, description, type, location, approved, id],
    callback
  );
}
function deletejoboffer(id, callback) {
  let query = "DELETE FROM joboffers WHERE ID=?";
  db.runQuery(query, [id], callback);
}
function getCount(callback) {
  let query = "SELECT COUNT (*) FROM joboffers;";
  db.runQuery(query, [], callback);
}

module.exports = {
  getjoboffers: getjoboffers,
  uploadjoboffer: uploadjoboffer,
  deletejoboffer: deletejoboffer,
  updatejoboffer: updatejoboffer,
  getCount: getCount
};

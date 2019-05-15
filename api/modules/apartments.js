const db = require("../db");

function getapartments(callback) {
  let query = "SELECT * FROM `apartments` ORDER BY ID DESC;";
  db.runQuery(query, [], callback);
}
function uploadapartment(
  name,
  phone,
  offer,
  type,
  rooms,
  floor,
  dir,
  price,
  description,
  date,
  callback
) {
  let query =
    "INSERT INTO `apartments`(`Name`,`Phone`,`Offer`,`Type`,`Rooms`,`Floor`,`Dir`,`Price`,`Description`,`Date`)VALUES(?,?,?,?,?,?,?,?,?,?);";
  db.runQuery(
    query,
    [name, phone, offer, type, rooms, floor, dir, price, description, date],
    callback
  );
}
function deleteapartment(id, callback) {
  let query = "DELETE FROM apartments WHERE ID=?";
  db.runQuery(query, [id], callback);
}
function updateapartment(
  id,
  name,
  phone,
  offer,
  type,
  rooms,
  floor,
  dir,
  price,
  description,
  callback
) {
  let query =
    "UPDATE `apartments` SET `Name`=?, `Phone`=?, `Offer`=?,`Type`=?,`Rooms`=?,`Floor`=?,`Dir`=?,`Price`=?,`Description`=? WHERE ID=?";
  db.runQuery(
    query,
    [name, phone, offer, type, rooms, floor, dir, price, description, id],
    callback
  );
}

module.exports = {
  getapartments: getapartments,
  uploadapartment: uploadapartment,
  deleteapartment: deleteapartment,
  updateapartment: updateapartment
};

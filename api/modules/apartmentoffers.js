const db = require("../db");

function getapartmentoffers(callback) {
  let query = "SELECT * FROM `apartmentoffers`;";
  db.runQuery(query, [], callback);
}
function uploadapartmentoffer(
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
    "INSERT INTO `apartmentoffers`(`Name`,`Phone`,`Offer`,`Type`,`Rooms`,`Floor`,`Dir`,`Price`,`Description`,`Approved`)VALUES(?,?,?,?,?,?,?,?,?,0);";
  db.runQuery(
    query,
    [name, phone, offer, type, rooms, floor, dir, price, description],
    callback
  );
}

function updateapartmentoffer(
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
  approved,
  callback
) {
  let query =
    "UPDATE `apartmentoffers` SET `Name`=?, `Phone`=?, `Offer`=?, `Type`=?, `Rooms`=?, `Floor`=?, `Dir`=?, `Price`=?, `Description`=?, `Approved`=? WHERE ID=?";
  db.runQuery(
    query,
    [
      name,
      phone,
      offer,
      type,
      rooms,
      floor,
      dir,
      price,
      description,
      approved,
      id
    ],
    callback
  );
}
function deleteapartmentoffer(id, callback) {
  let query = "DELETE FROM apartmentoffers WHERE ID=?";
  db.runQuery(query, [id], callback);
}
function getCount(callback) {
  let query = "SELECT COUNT (*) FROM apartmentoffers;";
  db.runQuery(query, [], callback);
}

module.exports = {
  getapartmentoffers: getapartmentoffers,
  uploadapartmentoffer: uploadapartmentoffer,
  deleteapartmentoffer: deleteapartmentoffer,
  updateapartmentoffer: updateapartmentoffer,
  getCount: getCount
};

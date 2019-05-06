const db = require("../db");

function getNav(callback) {
  let query = "SELECT * FROM `nav`;";
  db.runQuery(query, [], callback);
}

module.exports = {
  getNav: getNav
};

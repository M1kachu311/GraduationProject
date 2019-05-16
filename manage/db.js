const mySql = require("mysql");
const config = require("./config.json");

runQuery = (query, params, callback) => {
  const connection = mySql.createConnection(config.db);
  connection.connect();
  connection.query(query, params, (err, data) => {
    if (err) return callback(err, data);
    else {
      callback(false, data);
    }
  });
  connection.end();
};

module.exports = {
  runQuery: runQuery
};

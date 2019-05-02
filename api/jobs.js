const db = require("./db");

function uploadjob(name, description, callback) {
  let query = `INSERT INTO finalprojectdb.jobs (jobname,jobdescription) VALUES(?,?);`;
  db.runQuery(query, [name, description], callback);
}

function getjobs(callback) {
  let query = "SELECT * FROM finalprojectdb.jobs;";
  db.runQuery(query, [], callback);
}
function updatejob(name, id, callback) {
  let query = `UPDATE finalprojectdb.jobs set name=? WHERE id=?;`;
  db.runQuery(query, [name, id], callback);
}

function deletejob(id, callback) {
  let query = `DELETE FROM finalprojectdb.jobs WHERE id=?;`;
  db.runQuery(query, [id], callback);
}

module.exports = {
  getjobs: getjobs,
  getjobByID: getjobByID,
  uploadjob: uploadjob,
  deletejob: deletejob,
  updatejob: updatejob
};

const db = require("./db");

function uploadjob(name, description, callback) {
  let query = `INSERT INTO finalprojectdb.jobs (jobname,jobdescription,publishdate,stillrelevant) VALUES(?,?,?,?);`;
  db.runQuery(query, [name, description, new Date(), true], callback);
}

function getjobs(callback) {
  let query = "SELECT * FROM finalprojectdb.jobs;";
  db.runQuery(query, [], callback);
}
function updatejob(name, description, id, callback) {
  let query = `UPDATE finalprojectdb.jobs set jobname=?,jobdescription=? WHERE jobid=?;`;
  db.runQuery(query, [name, description, id], callback);
}

function deletejob(id, callback) {
  let query = `UPDATE finalprojectdb.jobs set stillrelevant = 0 WHERE jobid=?;`;
  db.runQuery(query, [id], callback);
}

module.exports = {
  getjobs: getjobs,
  uploadjob: uploadjob,
  deletejob: deletejob,
  updatejob: updatejob
};

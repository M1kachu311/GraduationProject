const express = require("express");
const router = express.Router();
const jobsFunction = require("../modules/jobs.js");
const key = `zCtvYaTNPP;p9b_.Uw''wmS,kkED(_zyvpZq@M3?yo58X>%ICJxLju=RYj{"2M`;

router.get("/", (req, res) => {
  jobsFunction.getjobs(function(err, data) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  });
});

router.post("/", (req, res) => {
  if (
    typeof req.body.name == "undefined" ||
    req.body.name == "" ||
    typeof req.body.description == "undefined" ||
    req.body.description == "" ||
    typeof req.body.date == "undefined" ||
    req.body.date == "" ||
    typeof req.body.type == "undefined" ||
    req.body.type == "" ||
    typeof req.body.location == "undefined" ||
    req.body.location == "" ||
    req.body.key !== key
  ) {
    res.status(404).send({ message: "bad request" });
  } else {
    jobsFunction.uploadjob(
      req.body.name,
      req.body.description,
      req.body.date,
      req.body.type,
      req.body.location,
      (err, data) => {
        if (err) {
          res.status(500).send({ error: err.code });
        } else {
          res.send({
            message: `job uploaded successfully with id of ${data.insertId}`
          });
        }
      }
    );
  }
});

router.delete("/", (req, res) => {
  if (
    typeof req.body.id == "undefined" ||
    req.body.id == "" ||
    req.body.key !== key
  ) {
    res.status(404).send({ message: "bad request" });
  } else {
    jobsFunction.deletejob(req.body.id, (err, data) => {
      if (err) {
        res.status(500).send({ error: err.code });
      } else {
        if (data.affectedRows == 0) {
          res.status(500).send({ error: `no job with id of ${req.body.id}` });
        } else {
          res.send({
            message: `job with id of ${req.body.id} deleted successfuly`
          });
        }
      }
    });
  }
});

router.put("/", (req, res) => {
  if (
    typeof req.body.name == "undefined" ||
    req.body.name == "" ||
    typeof req.body.description == "undefined" ||
    req.body.description == "" ||
    typeof req.body.id == "undefined" ||
    req.body.id == "" ||
    typeof req.body.type == "undefined" ||
    req.body.type == "" ||
    typeof req.body.location == "undefined" ||
    req.body.location == "" ||
    req.body.key !== key
  ) {
    res.status(404).send({ message: "bad request" });
  } else {
    jobsFunction.updatejob(
      req.body.id,
      req.body.name,
      req.body.description,
      req.body.type,
      req.body.location,
      (err, data) => {
        if (err) {
          res.status(500).send({ error: err.code });
        } else {
          if (data.affectedRows == 0) {
            res.status(500).send({ error: `no job with id of ${req.body.id}` });
          } else {
            res.send({
              message: `job with id of ${req.body.id} updated successfuly`
            });
          }
        }
      }
    );
  }
});

module.exports = router;

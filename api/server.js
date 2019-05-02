const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const jobsFunction = require("./jobs.js");

const bodyParser = require("body-parser");

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.post("/jobs", (req, res) => {
  if (
    typeof req.body.name == "undefined" ||
    req.body.name == "" ||
    typeof req.body.description == "undefined" ||
    req.body.description == ""
  ) {
    res.status(400).send({ message: "bad request" });
  } else {
    jobsFunction.uploadjob(req.body.name, req.body.description, (err, data) => {
      if (err) {
        res.status(500).send({ error: err.code });
      } else {
        res.send({
          message: `job with id ${data.insertId} uploaded successfuly`
        });
      }
    });
  }
});

app.get("/jobs", (req, res) => {
  jobsFunction.getjobs(function(err, books) {
    if (err) {
      res.status(400).send(err);
    } else {
      res.send(books);
    }
  });
});

app.delete("/jobs", (req, res) => {
  if (typeof req.body.id == "undefined" || req.body.id == "") {
    res.status(400).send({ message: "bad request" });
  } else {
    jobsFunction.deletejob(req.body.id, (err, data) => {
      if (err) {
        res.status(500).send({ error: err.code });
      } else {
        if (data.affectedRows == 0) {
          res
            .status(400)
            .send({ message: `no job with with id ${req.body.id}` });
        } else {
          res.send({
            message: `job with id ${req.body.id} deleted successfuly`
          });
        }
      }
    });
  }
});

app.put("/jobs", (req, res) => {
  if (
    typeof req.body.id == "undefined" ||
    req.body.id == "" ||
    typeof req.body.name == "undefined" ||
    req.body.name == "" ||
    typeof req.body.description == "undefined" ||
    req.body.description == ""
  ) {
    res.status(400).send({ message: "bad request" });
  } else {
    jobsFunction.updatejob(
      req.body.name,
      req.body.description,
      req.body.id,
      (err, data) => {
        if (err) {
          res.status(500).send({ error: err.code });
        } else {
          if (data.affectedRows == 0) {
            res.send({ message: `no job with id ${req.body.id} ` });
          } else {
            res.send({
              message: `job with id ${req.body.id} updated successfuly`
            });
          }
        }
      }
    );
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

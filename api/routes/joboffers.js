const express = require("express");
const router = express.Router();
const jobOffersFunction = require("../modules/joboffers.js");
const jobFunctions = require("../modules/jobs.js");

const key = `zCtvYaTNPP;p9b_.Uw''wmS,kkED(_zyvpZq@M3?yo58X>%ICJxLju=RYj{"2M`;

router.get("/", (req, res) => {
  jobOffersFunction.getjoboffers(function(err, data) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  });
});

router.get("/count", (req, res) => {
  jobOffersFunction.getCount(function(err, data) {
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
    typeof req.body.type == "undefined" ||
    req.body.type == "" ||
    typeof req.body.location == "undefined"
  ) {
    res.status(404).send({ message: "bad request" });
  } else {
    jobOffersFunction.uploadjoboffer(
      req.body.name,
      req.body.description,
      req.body.type,
      req.body.location,
      (err, data) => {
        if (err) {
          res.status(500).send({ error: err.code });
        } else {
          res.send({
            message: `job offer uploaded successfully with id of ${
              data.insertId
            }`
          });
        }
      }
    );
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
    jobOffersFunction.updatejoboffer(
      req.body.id,
      req.body.name,
      req.body.description,
      req.body.type,
      req.body.location,
      req.body.approved,
      (err, data) => {
        if (err) {
          res.status(500).send({ error: err.code });
        } else {
          if (data.affectedRows == 0) {
            res
              .status(500)
              .send({ error: `no job offer with id of ${req.body.id}` });
          } else {
            res.send({
              message: `job offer with id of ${req.body.id} updated successfuly`
            });
          }
        }
      }
    );
  }
});

router.delete("/", (req, res) => {
  const ID = req.body.id;
  if (
    typeof req.body.id == "undefined" ||
    req.body.id == "" ||
    typeof req.body.approved == "undefined" ||
    req.body.key !== key
  ) {
    res.status(404).send({ message: "bad request" });
  } else {
    if (req.body.approved == 0) {
      jobOffersFunction.deletejoboffer(req.body.id, (err, data) => {
        if (err) {
          res.status(500).send({ error: err.code });
        } else {
          res.send({
            message: `job offer with id of ${req.body.id} deleted successfuly`
          });
        }
      });
    } else {
      if (
        typeof req.body.name == "undefined" ||
        req.body.name == "" ||
        typeof req.body.description == "undefined" ||
        req.body.description == "" ||
        typeof req.body.type == "undefined" ||
        req.body.type == "" ||
        typeof req.body.location == "undefined" ||
        req.body.location == "" ||
        req.body.key !== key
      ) {
        res.status(404).send({ message: "bad request" });
      } else {
        jobFunctions.uploadjob(
          req.body.name,
          req.body.description,
          req.body.date,
          req.body.type,
          req.body.location,
          (err, data) => {
            const NEWID = data.insertId;
            if (err) {
              res.status(500).send({ error: err.code });
            } else {
              jobOffersFunction.deletejoboffer(ID, (err, data) => {
                if (err) {
                  res.status(500).send({ error: err.code });
                } else {
                  res.send({
                    message: `job uploaded successfuly with id of ${NEWID}`
                  });
                }
              });
            }
          }
        );
      }
    }
  }
});

module.exports = router;

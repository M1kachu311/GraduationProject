const express = require("express");
const router = express.Router();
const apartmentsFunction = require("../modules/apartments.js");
const key = `zCtvYaTNPP;p9b_.Uw''wmS,kkED(_zyvpZq@M3?yo58X>%ICJxLju=RYj{"2M`;

router.get("/", (req, res) => {
  apartmentsFunction.getapartments(function(err, data) {
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
    typeof req.body.phone == "undefined" ||
    req.body.phone == "" ||
    typeof req.body.offer == "undefined" ||
    req.body.offer == "" ||
    typeof req.body.type == "undefined" ||
    req.body.type == "" ||
    typeof req.body.rooms == "undefined" ||
    req.body.rooms == "" ||
    typeof req.body.floor == "undefined" ||
    req.body.floor == "" ||
    typeof req.body.dir == "undefined" ||
    req.body.dir == "" ||
    typeof req.body.price == "undefined" ||
    req.body.price == "" ||
    typeof req.body.description == "undefined" ||
    req.body.description == "" ||
    typeof req.body.date == "undefined" ||
    req.body.date == "" ||
    req.body.key !== key
  ) {
    res.status(400).send({ message: "bad request" });
  } else {
    apartmentsFunction.uploadapartment(
      req.body.name,
      req.body.phone,
      req.body.offer,
      req.body.type,
      req.body.rooms,
      req.body.floor,
      req.body.dir,
      req.body.price,
      req.body.description,
      req.body.date,
      (err, data) => {
        if (err) {
          res.status(500).send({ error: err.code });
        } else {
          res.send({
            message: `apartment uploaded successfully with id of ${
              data.insertId
            }`
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
    res.status(400).send({ message: "bad request" });
  } else {
    apartmentsFunction.deleteapartment(req.body.id, (err, data) => {
      if (err) {
        res.status(500).send({ error: err.code });
      } else {
        if (data.affectedRows == 0) {
          res
            .status(500)
            .send({ error: `no apartment with id of ${req.body.id}` });
        } else {
          res.send({
            message: `apartment with id of ${req.body.id} deleted successfuly`
          });
        }
      }
    });
  }
});

router.put("/", (req, res) => {
  if (
    typeof req.body.id == "undefined" ||
    req.body.id == "" ||
    typeof req.body.name == "undefined" ||
    req.body.name == "" ||
    typeof req.body.phone == "undefined" ||
    req.body.phone == "" ||
    typeof req.body.offer == "undefined" ||
    req.body.offer == "" ||
    typeof req.body.type == "undefined" ||
    req.body.type == "" ||
    typeof req.body.rooms == "undefined" ||
    req.body.rooms == "" ||
    typeof req.body.floor == "undefined" ||
    req.body.floor == "" ||
    typeof req.body.dir == "undefined" ||
    req.body.dir == "" ||
    typeof req.body.price == "undefined" ||
    req.body.price == "" ||
    typeof req.body.description == "undefined" ||
    req.body.description == "" ||
    req.body.key !== key
  ) {
    res.status(400).send({ message: "bad request" });
  } else {
    apartmentsFunction.updateapartment(
      req.body.id,
      req.body.name,
      req.body.phone,
      req.body.offer,
      req.body.type,
      req.body.rooms,
      req.body.floor,
      req.body.dir,
      req.body.price,
      req.body.description,
      (err, data) => {
        if (err) {
          res.status(500).send({ error: err.code });
        } else {
          if (data.affectedRows == 0) {
            res
              .status(500)
              .send({ error: `no apartment with id of ${req.body.id}` });
          } else {
            res.send({
              message: `apartment with id of ${req.body.id} updated successfuly`
            });
          }
        }
      }
    );
  }
});

module.exports = router;

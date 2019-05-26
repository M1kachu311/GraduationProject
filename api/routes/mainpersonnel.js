const express = require("express");
const router = express.Router();
const mainpersonnelFunction = require("../modules/mainpersonnel.js");
const key = `zCtvYaTNPP;p9b_.Uw''wmS,kkED(_zyvpZq@M3?yo58X>%ICJxLju=RYj{"2M`;

router.get("/", (req, res) => {
  mainpersonnelFunction.getmainpersonnel(function(err, data) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

router.post("/", (req, res) => {
  if (
    typeof req.body.name == "undefined" ||
    req.body.name == "" ||
    typeof req.body.title == "undefined" ||
    req.body.title == "" ||
    typeof req.body.phone == "undefined" ||
    req.body.phone == "" ||
    typeof req.body.email == "undefined" ||
    req.body.email == "" ||
    typeof req.body.image == "undefined" ||
    req.body.image == "" ||
    req.body.key !== key
  ) {
    res.status(400).send({ message: "bad request" });
  } else {
    mainpersonnelFunction.uploadmainperson(
      req.body.name,
      req.body.title,
      req.body.phone,
      req.body.email,
      req.body.image,
      (err, data) => {
        if (err) {
          res.status(500).send({ error: err.code });
        } else {
          res.status(200).send({
            message: `mainperson uploaded successfully with id of ${
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
    mainpersonnelFunction.deletemainperson(req.body.id, (err, data) => {
      if (err) {
        res.status(500).send({ error: err.code });
      } else {
        res.status(200).send({
          msg: `mainperson with id of ${req.body.id} deleted successfully`
        });
      }
    });
  }
});

router.put("/", (req, res) => {
  if (
    typeof req.body.name == "undefined" ||
    req.body.name == "" ||
    typeof req.body.title == "undefined" ||
    req.body.title == "" ||
    typeof req.body.phone == "undefined" ||
    req.body.phone == "" ||
    typeof req.body.email == "undefined" ||
    req.body.email == "" ||
    typeof req.body.id == "undefined" ||
    req.body.id == "" ||
    typeof req.body.image == "undefined" ||
    req.body.image == "" ||
    req.body.key !== key
  ) {
    res.status(400).send({ message: "bad request" });
  } else {
    mainpersonnelFunction.updatemainperson(
      req.body.id,
      req.body.name,
      req.body.title,
      req.body.phone,
      req.body.email,
      req.body.image,
      (err, data) => {
        if (err) {
          res.status(500).send({ error: err.code });
        } else {
          if (data.affectedRows == 0) {
            res
              .status(500)
              .send({ error: `no mainperson with id of ${req.body.id}` });
          } else {
            res.status(200).send({
              message: `mainperson with id of ${
                req.body.id
              } updated successfuly`
            });
          }
        }
      }
    );
  }
});

module.exports = router;

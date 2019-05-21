const express = require("express");
const router = express.Router();
const personnelFunction = require("../modules/personnel.js");
const key = `zCtvYaTNPP;p9b_.Uw''wmS,kkED(_zyvpZq@M3?yo58X>%ICJxLju=RYj{"2M`;

router.get("/", (req, res) => {
  personnelFunction.getpersonnel(function(err, data) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  });
});

router.get("/category/:id", (req, res) => {
  if (typeof req.params.id == "undefined" || typeof req.params.id == "") {
    res.status(400).send({ msg: "bad request" });
  } else {
    personnelFunction.getpersonnelbycategory(req.params.id, function(
      err,
      data
    ) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(data);
      }
    });
  }
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
    typeof req.body.categoryId == "undefined" ||
    req.body.categoryId == "" ||
    req.body.key !== key
  ) {
    res.status(400).send({ message: "bad request" });
  } else {
    personnelFunction.uploadpersonnel(
      req.body.name,
      req.body.title,
      req.body.image,
      req.body.categoryId,
      req.body.phone,
      req.body.email,
      (err, data) => {
        if (err) {
          res.status(500).send({ error: err.code });
        } else {
          res.send({
            message: `personnel uploaded successfully with id of ${
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
    personnelFunction.deletepersonnel(req.body.id, (err, data) => {
      if (err) {
        res.status(500).send({ error: err.code });
      } else {
        if (data.affectedRows == 0) {
          res
            .status(500)
            .send({ error: `no personnel with id of ${req.body.id}` });
        } else {
          res.send({
            message: `personnel with id of ${req.body.id} deleted successfuly`
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
    typeof req.body.title == "undefined" ||
    req.body.title == "" ||
    typeof req.body.id == "undefined" ||
    req.body.id == "" ||
    typeof req.body.image == "undefined" ||
    typeof req.body.phone == "undefined" ||
    req.body.phone == "" ||
    typeof req.body.email == "undefined" ||
    req.body.email == "" ||
    typeof req.body.categoryId == "undefined" ||
    req.body.categoryId == "" ||
    req.body.key !== key
  ) {
    res.status(400).send({ message: "bad request" });
  } else {
    personnelFunction.updatepersonnel(
      req.body.id,
      req.body.name,
      req.body.title,
      req.body.image,
      req.body.phone,
      req.body.email,
      req.body.categoryId,
      (err, data) => {
        if (err) {
          res.status(500).send({ error: err.code });
        } else {
          if (data.affectedRows == 0) {
            res
              .status(500)
              .send({ error: `no personnel with id of ${req.body.id}` });
          } else {
            res.send({
              message: `personnel with id of ${req.body.id} updated successfuly`
            });
          }
        }
      }
    );
  }
});

module.exports = router;

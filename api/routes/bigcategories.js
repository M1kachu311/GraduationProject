const express = require("express");
const router = express.Router();
const bigcategoriesFunction = require("../modules/bigcategories.js");
const key = `zCtvYaTNPP;p9b_.Uw''wmS,kkED(_zyvpZq@M3?yo58X>%ICJxLju=RYj{"2M`;

router.get("/", (req, res) => {
  bigcategoriesFunction.getbigcategories(function(err, data) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  });
});

router.get("/live/count", (req, res) => {
  bigcategoriesFunction.getCount(function(err, data) {
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
    req.body.key !== key
  ) {
    res.status(400).send({ message: "bad request" });
  } else {
    bigcategoriesFunction.uploadbigcategory(req.body.name, (err, data) => {
      if (err) {
        res.status(500).send({ error: err.code });
      } else {
        res.send({
          message: `bigcategory uploaded successfully with id of ${
            data.insertId
          }`
        });
      }
    });
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
    bigcategoriesFunction.deletebigcategory(req.body.id, (err, data) => {
      if (err) {
        res.status(500).send({ error: err.code });
      } else {
        res.send({
          msg: `bigcategory with id of ${req.body.id} deleted successfully`
        });
      }
    });
  }
});

router.put("/", (req, res) => {
  if (
    typeof req.body.name == "undefined" ||
    req.body.name == "" ||
    typeof req.body.id == "undefined" ||
    req.body.id == "" ||
    req.body.key !== key
  ) {
    res.status(400).send({ message: "bad request" });
  } else {
    bigcategoriesFunction.updatebigcategory(
      req.body.id,
      req.body.name,
      (err, data) => {
        if (err) {
          res.status(500).send({ error: err.code });
        } else {
          if (data.affectedRows == 0) {
            res
              .status(500)
              .send({ error: `no bigcategory with id of ${req.body.id}` });
          } else {
            res.send({
              message: `bigcategory with id of ${
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

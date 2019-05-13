const express = require("express");
const router = express.Router();
const categoriesFunction = require("../modules/categories.js");
const key = `zCtvYaTNPP;p9b_.Uw''wmS,kkED(_zyvpZq@M3?yo58X>%ICJxLju=RYj{"2M`;

router.get("/", (req, res) => {
  categoriesFunction.getcategories(function(err, data) {
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
    categoriesFunction.getcategoriesbycategory(req.params.id, function(
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

router.get("/live", (req, res) => {
  categoriesFunction.getLiveCategories(function(err, data) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  });
});

router.get("/live/count", (req, res) => {
  categoriesFunction.getCount(function(err, data) {
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
    typeof req.body.bigCategory == "undefined" ||
    req.body.bigCategory == "" ||
    typeof req.body.isLive == "undefined" ||
    req.body.key !== key
  ) {
    res.status(400).send({ message: "bad request" });
  } else {
    categoriesFunction.uploadcategory(
      req.body.name,
      req.body.isLive,
      req.body.description,
      req.body.bigCategory,
      (err, data) => {
        if (err) {
          res.status(500).send({ error: err.code });
        } else {
          res.send({
            message: `category uploaded successfully with id of ${
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
    categoriesFunction.deletecategorypt1(req.body.id, (err, data) => {
      if (err) {
        res.status(500).send({ error: err.code });
      } else {
        categoriesFunction.deletecategorypt2(req.body.id, (err, data) => {
          if (err) {
            res.status(500).send({ error: err.code });
          } else {
            categoriesFunction.deletecategorypt3(req.body.id, (err, data) => {
              if (err) {
                res.status(500).send({ error: err.code });
              } else {
                res.send({
                  message:
                    "category and all posts and personnel deleted successfuly"
                });
              }
            });
          }
        });
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
    typeof req.body.bigCategory == "undefined" ||
    req.body.bigCategory == "" ||
    typeof req.body.isLive == "undefined" ||
    req.body.key !== key
  ) {
    res.status(400).send({ message: "bad request" });
  } else {
    categoriesFunction.updatecategory(
      req.body.id,
      req.body.name,
      req.body.isLive,
      req.body.description,
      req.body.bigCategory,
      (err, data) => {
        if (err) {
          res.status(500).send({ error: err.code });
        } else {
          if (data.affectedRows == 0) {
            res
              .status(500)
              .send({ error: `no category with id of ${req.body.id}` });
          } else {
            res.send({
              message: `category with id of ${req.body.id} updated successfuly`
            });
          }
        }
      }
    );
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const postsFunction = require("../modules/posts.js");
const key = `zCtvYaTNPP;p9b_.Uw''wmS,kkED(_zyvpZq@M3?yo58X>%ICJxLju=RYj{"2M`;

router.get("/", (req, res) => {
  postsFunction.getposts(function(err, data) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  });
});
router.get("/live", (req, res) => {
  postsFunction.getliveposts(function(err, data) {
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
    postsFunction.getpostbycategory(req.params.id, function(err, data) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(data);
      }
    });
  }
});

router.get("/live/count", (req, res) => {
  postsFunction.getCount(function(err, data) {
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
    typeof req.body.image == "undefined" ||
    typeof req.body.categoryId == "undefined" ||
    req.body.categoryId == "" ||
    typeof req.body.isLive == "undefined" ||
    req.body.key !== key
  ) {
    res.status(400).send({ message: "bad request" });
  } else {
    postsFunction.uploadpost(
      req.body.name,
      req.body.description,
      req.body.date,
      req.body.image,
      req.body.categoryId,
      req.body.isLive,
      (err, data) => {
        if (err) {
          res.status(500).send({ error: err.code });
        } else {
          res.send({
            message: `post uploaded successfully with id of ${data.insertId}`
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
    postsFunction.deletepost(req.body.id, (err, data) => {
      if (err) {
        res.status(500).send({ error: err.code });
      } else {
        if (data.affectedRows == 0) {
          res.status(500).send({ error: `no post with id of ${req.body.id}` });
        } else {
          res.send({
            message: `post with id of ${req.body.id} deleted successfuly`
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
    typeof req.body.image == "undefined" ||
    typeof req.body.categoryId == "undefined" ||
    req.body.categoryId == "" ||
    typeof req.body.isLive == "undefined" ||
    req.body.key !== key
  ) {
    res.status(400).send({ message: "bad request" });
  } else {
    postsFunction.updatepost(
      req.body.id,
      req.body.name,
      req.body.description,
      req.body.image,
      req.body.categoryId,
      req.body.isLive,
      (err, data) => {
        if (err) {
          res.status(500).send({ error: err.code });
        } else {
          if (data.affectedRows == 0) {
            res
              .status(500)
              .send({ error: `no post with id of ${req.body.id}` });
          } else {
            res.send({
              message: `post with id of ${req.body.id} updated successfuly`
            });
          }
        }
      }
    );
  }
});

module.exports = router;

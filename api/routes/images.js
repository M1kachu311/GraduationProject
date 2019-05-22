const express = require("express");
const router = express.Router();
const imagesFunction = require("../modules/images.js");
const key = `zCtvYaTNPP;p9b_.Uw''wmS,kkED(_zyvpZq@M3?yo58X>%ICJxLju=RYj{"2M`;
var cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: "duth3rmbz",
  api_key: "575952554734564",
  api_secret: "sWlpV0ZBm5Z5_M8BIjR3Ivp6Ckk"
});

router.get("/", (req, res) => {
  imagesFunction.getimages(function(err, data) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  });
});

router.post("/", (req, res) => {
  if (
    typeof req.body.url == "undefined" ||
    req.body.url == "" ||
    typeof req.body.turl == "undefined" ||
    req.body.turl == "" ||
    typeof req.body.surl == "undefined" ||
    req.body.surl == "" ||
    typeof req.body.name == "undefined" ||
    req.body.name == "" ||
    typeof req.body.pid == "undefined" ||
    req.body.pid == "" ||
    req.body.key !== key
  ) {
    res.status(400).send({ message: "bad request" });
  } else {
    imagesFunction.uploadimage(
      req.body.url,
      req.body.turl,
      req.body.surl,
      req.body.name,
      req.body.pid,
      (err, data) => {
        if (err) {
          res.status(500).send({ error: err.code });
        } else {
          res.send({
            message: `image uploaded successfully with id of ${data.insertId}`
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
    typeof req.body.pid == "undefined" ||
    req.body.pid == "" ||
    req.body.key !== key
  ) {
    res.status(400).send({ message: "bad request" });
  } else {
    imagesFunction.deleteimage(req.body.id, (err, data) => {
      if (err) {
        res.status(500).send({ error: err.code });
      } else {
        if (data.affectedRows == 0) {
          res.status(500).send({ error: `no image with id of ${req.body.id}` });
        } else {
          cloudinary.v2.uploader.destroy(req.body.pid, function(error, result) {
            res.send({
              message: `image with id of ${req.body.id} deleted successfuly`
            });
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
    typeof req.body.id == "undefined" ||
    req.body.id == "" ||
    req.body.key !== key
  ) {
    res.status(400).send({ message: "bad request" });
  } else {
    imagesFunction.updateimage(req.body.id, req.body.name, (err, data) => {
      if (err) {
        res.status(500).send({ error: err.code });
      } else {
        if (data.affectedRows == 0) {
          res.status(500).send({ error: `no image with id of ${req.body.id}` });
        } else {
          res.send({
            message: `image with id of ${req.body.id} updated successfuly`
          });
        }
      }
    });
  }
});

module.exports = router;

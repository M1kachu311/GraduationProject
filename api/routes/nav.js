const express = require("express");
const router = express.Router();
const navFunctions = require("../modules/nav.js");

router.get("/", (req, res) => {
  navFunctions.getNav(function(err, data) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

module.exports = router;

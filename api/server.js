const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
const jobsFunction = require("./jobs.js");

app.post("/jobs", (req, res) => {
  if (
    typeof req.body.name == "undefined" ||
    req.body.name == "" ||
    typeof req.body.description == "undefined" ||
    req.body.description == ""
  ) {
    res.status(404).send({ message: "bad request" });
  } else {
    booksFunction.uploadjob(
      req.body.name,
      req.body.description,
      (err, data) => {
        if (err) {
          res.status(500).send({ error: err.code });
        } else {
          res.send({
            message: `המשרה ${req.body.name} הועלתה בהצלחה עם מזהה ${
              data.insertId
            }`
          });
        }
      }
    );
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

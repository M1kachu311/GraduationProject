const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const cors = require("cors"); //cross origin for api;
app.use(cors());

const bodyParser = require("body-parser");

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.use("/jobs", require("./routes/jobs"));
app.use("/joboffers", require("./routes/joboffers"));

app.listen(port, () => console.log(`API listening on port ${port}!`));

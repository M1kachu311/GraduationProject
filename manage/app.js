const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");
const passport = require("passport");
require("./passport.js")(passport);
const flash = require("connect-flash");
const { ensureAuthenticated } = require("./auth.js");
const bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.use(
  session({
    secret: "super secret thingy",
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.use("/dashboard", ensureAuthenticated);
app.use("/dashboard", express.static(path.join(__dirname, "dashboard")));

app.post("/login", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/",
    failureFlash: false
  })(req, res, next);
});

app.listen(PORT, () => console.log(`app running on port ${PORT}`));

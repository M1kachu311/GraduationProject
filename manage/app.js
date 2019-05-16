const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");
const passport = require("passport");
require("./passport/passport.js")(passport);
const flash = require("connect-flash");
const {
  ensureAuthenticated,
  ensureContent,
  ensureApt,
  ensureJobs
} = require("./passport/auth.js");
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
app.get("/nope", (req, res) => {
  res.sendFile(path.join(__dirname, "./dashboard/index2.html"));
});

app.use("/dashboard", ensureAuthenticated);
app.use("/dashboard/jobs", ensureJobs);
app.use("/dashboard/joboffers", ensureJobs);
app.use("/dashboard/apartments", ensureApt);
app.use("/dashboard/apartmentoffers", ensureApt);
app.use("/dashboard/categories", ensureContent);
app.use("/dashboard/bigcategories", ensureContent);
app.use("/dashboard/posts", ensureContent);
app.use("/dashboard/personnel", ensureContent);
app.use("/dashboard/mainpersonnel", ensureContent);
app.use("/dashboard", express.static(path.join(__dirname, "dashboard")));

app.post("/login", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/dashboard/index.html",
    failureRedirect: "/",
    failureFlash: false
  })(req, res, next);
});

app.listen(PORT, () => console.log(`app running on port ${PORT}`));

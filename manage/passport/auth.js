module.exports = {
  ensureAuthenticated: function(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/");
  },
  ensureContent: function(req, res, next) {
    if (
      req.isAuthenticated() &&
      (req.session.passport.user == "1" ||
        req.session.passport.user == "2" ||
        req.session.passport.user == "4")
    ) {
      return next();
    }
    res.redirect("/nope");
  },
  ensureJobs: function(req, res, next) {
    if (
      req.isAuthenticated() &&
      (req.session.passport.user == "1" ||
        req.session.passport.user == "2" ||
        req.session.passport.user == "5")
    ) {
      return next();
    }
    res.redirect("/nope");
  },
  ensureApt: function(req, res, next) {
    if (
      req.isAuthenticated() &&
      (req.session.passport.user == "1" ||
        req.session.passport.user == "2" ||
        req.session.passport.user == "3")
    ) {
      return next();
    }
    res.redirect("/nope");
  },
  forwardAuthenticated: function(req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    }
    res.redirect("/dashboard");
  }
};

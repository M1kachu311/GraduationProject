const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const Module = require("./modules/module.js");

module.exports = function(passport) {
  passport.use(
    new LocalStrategy(
      { usernameField: "username" },
      (username, password, done) => {
        Module.checkUser(username, (err, data) => {
          if (err) {
            console.log(err);
          } else if (data.length != 1) {
            return done(null, false, {
              message:
                "אירעה שגיאה עם פרטי ההתחברות אנא בדוק את השם משתמש והסיסמא"
            });
          } else {
            const user = data[0];
            bcrypt.compare(password, user.password, (err, isMatch) => {
              if (err) throw err;
              if (isMatch) {
                return done(null, user);
              } else {
                return done(null, false, {
                  message:
                    "אירעה שגיאה עם פרטי ההתחברות אנא בדוק את השם משתמש והסיסמא"
                });
              }
            });
          }
        });
      }
    )
  );

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    Module.findById(id, function(err, user) {
      done(err, user);
    });
  });
};

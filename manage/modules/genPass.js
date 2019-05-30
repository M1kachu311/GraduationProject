//generate new encrypted pass
const bcrypt = require("bcryptjs");
bcrypt.genSalt(10, (err, salt) => {
  pass = "";
  bcrypt.hash(pass, salt, (err, hash) => {
    if (err) throw err;
    console.log(hash);
  });
});

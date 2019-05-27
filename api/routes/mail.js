const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();
const jobsFunction = require("../modules/jobs.js");
const bodyParser = require(`body-parser`);
const multer = require(`multer`);
const app = express();
const fs = require(`fs`);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const accepted_extensions = [`doc`, `docx`, `txt`, `pdf`];
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `uploads`);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 2 },
  fileFilter: (req, file, cb) => {
    if (
      accepted_extensions.some(ext => file.originalname.endsWith("." + ext))
    ) {
      return cb(null, true);
    }
    return cb(
      new Error(`only ${accepted_extensions.join(" , ")} files allowed`)
    );
  }
});

router.post("/", upload.single("file"), (req, res) => {
  const file = req.file;
  if (
    !file ||
    req.body.id == "" ||
    typeof req.body.id == "undefined" ||
    req.body.name == "" ||
    typeof req.body.name == "undefined" ||
    req.body.email == "" ||
    typeof req.body.email == "undefined" ||
    req.body.phone == "" ||
    typeof req.body.phone == "undefined"
  ) {
    res.status(400).send({ message: "bad request" });
  } else {
    jobsFunction.getjobbyid(req.body.id, function(err, data) {
      if (err || data.length != 1) {
        res.status(500).send(err);
      } else {
        async function main() {
          let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: "tby.tech@gmail.com",
              pass: "Z`&9Lnx'3<&-BZj4"
            },
            tls: {
              // do not fail on invalid certs
              rejectUnauthorized: false
            }
          });
          let info = await transporter.sendMail({
            from: `<${req.body.email}> ${req.body.name}`,
            to: "yeruham@jobnegev.co.il",
            subject: `${req.body.name} שלח מייל בהקשר למשרת ${data[0].Name} `,
            html: `
            <p>${req.body.name}</p>
        <p>${req.body.email}</p>
        <p>${req.body.phone}</p>
        <p>מעוניין במשרת:</p>
        <p>${data[0].Name}</p>
        <p>${data[0].Type}</p>
        <p>${data[0].Location}</p>
  
        `,
            attachments: [
              { filename: req.file.originalname, path: req.file.path }
            ]
          });
          fs.unlink(req.file.path, err => {
            if (err) throw err;
            console.log("file uploaded and deleted successfuly");
          });
          res.status(200).send({ msg: info.messageId, status: true });
        }
        main().catch(err => {
          res.status(500).send({ msg: err, status: false });
        });
      }
    });
  }
});

router.post("/contact", (req, res) => {
  if (
    req.body.description == "" ||
    typeof req.body.description == "undefined" ||
    req.body.name == "" ||
    typeof req.body.name == "undefined" ||
    req.body.email == "" ||
    typeof req.body.email == "undefined" ||
    req.body.phone == "" ||
    typeof req.body.phone == "undefined"
  ) {
    res.status(400).send({ message: "bad request" });
  } else {
    async function main() {
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "tby.tech@gmail.com",
          pass: "Z`&9Lnx'3<&-BZj4"
        }
      });
      let info = await transporter.sendMail({
        from: `<${req.body.email}> ${req.body.name}`,
        to: "bohanal@gmail.com",
        subject: `${req.body.name}  מעוניין ליצור איתך קשר מאתר עמותת צעירים  `,
        html: `
        <p>${req.body.name}</p>
    <p>${req.body.email}</p>
    <p>${req.body.phone}</p>
    <p>${req.body.description}</p>

    `
      });
      res.status(200).send({ msg: info.messageId, status: true });
    }
    main().catch(err => {
      res.status(500).send({ msg: err, status: false });
    });
  }
});

module.exports = router;

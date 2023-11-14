const express = require("express");
const app = express();
const fs = require("fs");
const multer = require("multer");
const mongoose = require("mongoose");
var imageModel = require("./ImageModel");
const port = process.env.PORT || 3000; //Line 3

const today = new Date("07-08-2003");

const userSchema = {
  username: {
    type: String,
    unique: true,
  },
  password: String,
  dob: Date,
};

const User = mongoose.model("User", userSchema);

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  //Line 9
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" }); //Line 10
});
const User1 = new User({
  username: "hisan_zehra",
  password: "dsjh87asj9",
  dob: today,
});
User1.save();

const users = User.find({});
console.log(users);

// SET STORAGE
var store = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

var uploads = multer({
  storage: store,
});

app.post("/uploadfile", uploads.single("upload_img"), (req, res) => {
  var img = fs.readFileSync(req.file.path);
  var encode_img = img.toString("base64");
  var final_img = {
    contentType: req.file.mimetype,
    image: new Buffer(encode_img, "base64"),
  };
  imageModel.create(final_img, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result.img.Buffer);
      console.log("Saved To database");
      res.contentType(final_img.contentType);
      res.send(final_img.image);
    }
  });
  res.redirect("/pinForm");
});

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});

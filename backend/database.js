const mongoose = require("mongoose");
const express = require("express");
const app = express();
const ATLAS_URI =
  "mongodb+srv://pinterest_clone:8VcNJ27EAONE9sqU@pinterestclone.okmqfd7.mongodb.net/";
const connectionString = ATLAS_URI;

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(" Mongoose is connected"))
  .catch((error) => console.error(error));

var conn = mongoose.connection;
conn.on("connected", function () {
  console.log("database is connected successfully");
});
conn.on("disconnected", function () {
  console.log("database is disconnected successfully");
});
conn.on("error", console.error.bind(console, "connection error:"));
module.exports = conn;

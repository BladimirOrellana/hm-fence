require("dotenv").config();

const express = require("express");
var path = require("path");

/////////////////////////
// Uploads an image file
/////////////////////////

// Log the configuration

const mongoose = require("mongoose");
const number = 2;
const number3 = 3;
const number4 = 3;
const number5 = 3;
const number6 = 3;
const number7 = 3;
const bodyParser = require("body-parser");
const app = express();

const PORT = process.env.PORT || 3001;
// Define middleware here

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + "client/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view

// Connect to the Mongo DB

mongoose.connect(
  process.env.REACT_APP_MONGO_ATLAS_DB || "mongodb://127.0.0.1/hm-fencing"
);

app.listen(PORT, () => {
  console.log("app on porst  " + PORT);
});

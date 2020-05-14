const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//setting view engine
app.set("view engine", "ejs");
//bodyParser
app.use(bodyParser.urlencoded({extended: true}));
//setting express to automatically expect files from public dir
app.use(express.static(__dirname + "/public"));

//Initial Route
app.get("/", (req, res) => {
  res.render("index");
});

//listening to routes
app.listen(process.env.PORT || 3000, () => console.log("SERVER STARTED!"));
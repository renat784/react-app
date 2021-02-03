const express = require("express");
const bodyParser = require("body-parser");
var unirest = require("unirest");
const app = express();

let array = [
  { id: 1, name: "John", email: "john@gmail.com" },
  { id: 2, name: "Jack", email: "jack@gmail.com" },
  { id: 3, name: "Bill", email: "bill@gmail.com" },
  { id: 4, name: "Tom", email: "tom@gmail.com" },
];

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hi");
});

app.get("/api", (req, res) => {
  res.json(array);
});

app.get("/weather", (req, res) => {
  let report = "report";

  //

  //

  res.send(report);
});

app.listen(3080);

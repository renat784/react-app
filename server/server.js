const express = require("express");
const bodyParser = require("body-parser");
const app = express();

let array = [
  { id: 1, name: "John", email: "john@gmail.com" },
  { id: 2, name: "Jack", email: "jack@gmail.com" },
  { id: 3, name: "Bill", email: "bill@gmail.com" },
];

app.use(bodyParser.json());

app.get("/api", (req, res) => {
  res.json(array);
});

app.listen(3080);

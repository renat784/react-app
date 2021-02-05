const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const mongoose = require("mongoose");

//  'test' - database name
mongoose.connect("mongodb://localhost/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("connected");
});

const bookSchema = new mongoose.Schema({
  name: String,
  email: String,
});

// 'Users' - collection name
const User = mongoose.model("Users", bookSchema);

// let users = [
//   { name: "John", email: "john@gmail.com" },
//   { name: "Jack", email: "jack@gmail.com" },
//   { name: "Bill", email: "bill@gmail.com" },
//   { name: "Tom", email: "tom@gmail.com" },
// ];

app.use(bodyParser.json());

app.get("/api/users", (req, res) => {
  User.find((err, result) => {
    if (err) return console.error(err);
    res.json(result);
  });
});

app.post("/api/users", (req, res) => {
  // add item to colection
  const { name, email } = req.body;
  const newUser = new User({ name, email });

  newUser.save(function (err, result) {
    if (err) return console.error(err);
    res.send(result);
  });
});

app.delete("/api/users", (req, res) => {
  User.deleteOne(req.body, (error, result) => {
    if (error) console.log(error);
    res.send(result);
  });
});

app.listen(3080);

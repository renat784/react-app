const mongoose = require("mongoose");

//  'test' - database name
mongoose.connect("mongodb://localhost/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("mongodb connected");
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

// 'Users' - collection name
const User = mongoose.model("Users", userSchema);

module.exports.getAll = (req, res) => {
  User.find((err, result) => {
    if (err) return console.error(err);
    res.json(result);
  });
};

module.exports.postOne = (req, res) => {
  const { name, email } = req.body;
  const newUser = new User({ name, email });

  newUser.save(function (err, result) {
    if (err) return console.error(err);
    res.send(result);
  });
};

module.exports.deleteOne = (req, res) => {
  User.deleteOne(req.body, (error, result) => {
    if (error) console.log(error);
    res.send(result);
  });
};

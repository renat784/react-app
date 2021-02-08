const router = require("express").Router();
const {
  getAll,
  postOne,
  deleteOne,
} = require("../controllers/mongoController");

// get all
// GET 'localhost:3080/api/users'
router.get("/users", getAll);

// post one
// POST 'localhost:3080/api/users'
router.post("/users", postOne);

// delete one
// DELETE 'localhost:3080/api/users'
router.delete("/users", deleteOne);

module.exports.router = router;

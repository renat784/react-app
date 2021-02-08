const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { router } = require("./routes/apiRoute");

app.use(bodyParser.json());

// 'localhost:3080/api/' + from router
app.use("/api", router);

const port = process.env.PORT || 3080;

app.listen(port, () => {
  console.log(`nodejs server is running on port ${port}...`);
});

const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  console.log(req.method);
  res.send("It works");
});

app.listen(port, (req, res) => {
  console.log(`Port is ready on ${port}`);
});

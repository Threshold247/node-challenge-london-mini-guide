const express = require("express");
const app = express();
const port = 3001;
const heathrowData = "/data/Heathrow.json";
const harrowData = "/data/Harrow.json";
const stratfordData = "/data/Stratford.json";

app.get("/", (req, res) => {
  console.log(req.method);
  res.send("It works");
});

app.listen(port, (req, res) => {
  console.log(`Port is ready on ${port}`);
});

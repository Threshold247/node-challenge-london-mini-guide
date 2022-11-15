const express = require("express");
const app = express();
const port = 3001;
const heathrowData = require("./data/Heathrow.json");
const harrowData = require("./data/Harrow.json");
const startfordData = require("./data/Stratford.json");

app.get("/", (req, res) => {
  console.log(req.method);
  res.send("It works");
});

app.get("/heathrow", (req, res) => {
  console.log(req.method);
  res.json(heathrowData);
});

app.get("/harrow", (req, res) => {
  console.log(req.method);
  res.json(heathrowData);
});

app.get("/stratford", (req, res) => {
  console.log(req.method);
  res.json(heathrowData);
});

app.listen(port, (req, res) => {
  console.log(`Port is ready on ${port}`);
});

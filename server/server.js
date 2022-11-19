const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const heathrowData = require("../data/Heathrow.json");
const harrowData = require("../data/Harrow.json");
const stratfordData = require("../data/Stratford.json");

app.get("/", (req, res) => {
  console.log(req.method);
  res.send("It works");
});

app.get("/Heathrow", (req, res) => {
  console.log(req.method);
  res.json(heathrowData);
});

app.get("/Harrow", (req, res) => {
  console.log(req.method);
  res.json(harrowData);
});

app.get("/Stratford", (req, res) => {
  console.log(req.method);
  res.json(stratfordData);
});

app.get("/stratford/search", (req, res) => {
  console.log(req.method);
  const search = req.query.search;
  res.json(stratfordData[search]);
});

app.listen(port, (req, res) => {
  console.log(`Port is ready on ${port}`);
});

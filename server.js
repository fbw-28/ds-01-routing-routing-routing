const express = require("express");

const dciModules = require("./data");

const app = express();

const port = 5000;

app.listen(port, () => {
  console.log(`server initiated successfully on port ${port}`);
});

app.get("/html", (req, res) => {
  res.send("<h1>Welcome, I am HTML</h1>");
});

app.get(`/dciModules/`, (req, res) => {
  console.log("requested whole array");
  res.json(dciModules);
});

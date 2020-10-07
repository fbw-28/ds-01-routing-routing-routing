const express = require("express");
const dciModules = require("./data");

const app = express();
const port = 5000;

app.listen(port, () => {
  console.log(`Started server on port ${port}`);
});

app.get("/json", (req, res) => {
  console.log("show dci modules");
  res.json(dciModules);
});

app.get("/text", (req, res) => {
  let modulesString = dciModules.join();
  res.json(modulesString);
  console.log(modulesString);
});

app.get("/html", (req, res) => {
  let htmlString =
    // "<ul>" +
    dciModules
      .map(function (module) {
        return "<li>" + module + "<li>";
      })
      .join("");
  // "<ul>";
  res.json(htmlString);
});

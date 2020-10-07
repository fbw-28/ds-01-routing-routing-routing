const express = require("express");
const DCImodules = require("./Data");

const app = express();

const port = 5000;

app.listen(port, () => {
  console.log(`start server on port ${port}`);
});

app.get("/json", (req, res) => {
  console.log("the whole array as JSON to the browser");
  res.send(DCImodules);
});

app.get("/text", (req, res) => {
  let myString = DCImodules.join(", ");
  res.send(`<h1>${myString}</h1>`);
});

app.get("/html", (req, res) => {
  let list = DCImodules.map((item) => `<li>${item}</li>`).join('');
  /* const list= DCImodules.map(course=> course === "Data Server" ?`<b><li>${course}</li><b>`:`<li>${course}</li>`).join("") */
  console.log(list)
  res.send(list);
});

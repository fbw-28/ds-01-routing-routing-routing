const express = require("express");
const modules = require("./data");
const app = express();

const port = 5000;

app.listen(port, () => {
  console.log(`started server on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("<h1>hello to modules</h1>");
});

app.get("/json", (req, res) => {
  res.json(modules);
});

app.get("/text", (req, res) => {
  console.log(modules.join());
  res.send(modules.join());
});

app.get("/html", (req, res) => {
  const html = modules.map((item) => {
    return `<li>${item}</li>`;
  });

  let index = html.indexOf("<li>Data Server</li>");

  html[index] = `<b>${html[index]}</b>`;
  let htmlString = html.join("");

  res.send(htmlString);
});


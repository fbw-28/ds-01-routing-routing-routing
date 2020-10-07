const express = require("express");

const app = express();
const PORT = 5000;

const dataArray = require("./data")

app.listen(PORT, () => {
  console.log(`started server on port ${PORT}`);
});

app.get("/", (req, res) =>
res.send(`<h1>DCI modules as...</h1> 
        <p><a href="/html">HTML</a></p>
        <p><a href="/text">Text</a></p>
        <p><a href="/json">JSON</a></p>`))

app.get("/json", (req, res) => {
  console.log("Route /json called");
  res.send(dataArray);
});

app.get("/text", (req, res) => {
    console.log("Route /text called");
    res.send(dataArray.join(", "))
})

app.get("/html", (req, res) => {
    console.log("Route /html called")
    let runArray = dataArray.map(item => {
        return item === "Data Server" ? `<b><li>${item}</li></b>` : `<li>${item}</li>`;
    })
    res.send(`<ul>${runArray.join("")}</ul>`)
})

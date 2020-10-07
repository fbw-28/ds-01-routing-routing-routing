const express = require("express");

const dciModules = require("./data");

const port = 5001;

const app = express();

app.listen(port, () => {
  console.log("server initiated successfully");
});

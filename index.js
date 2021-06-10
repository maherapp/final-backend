const express = require("express");
const { sequelize } = require("./mudule");

const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
  res.send("this is home");
});



sequelize.sync().then((e) => console.log(e)); 

app.listen(3000);

exports.App = app;

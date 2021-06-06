const express = require("express");
const { sequelize } = require("./mudule");
const { UserRouter } = require("./routes/piteint.route");
const { TestRouter } = require("./routes/test.route");

const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
  res.send("this is home");
});

app.use("/api/patients", UserRouter);
app.use('/api/tests', TestRouter)
sequelize.sync().then((e) => console.log(e)); 

app.listen(3000);

exports.App = App;

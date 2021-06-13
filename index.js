require("dotenv").config();
const express = require("express");
const { sequelize } = require("./models");
const userRouter = require("./routes/user.route");
const labRouter = require("./routes/lab.route");
const { patientRouter } = require("./routes/patient.route");
const { testtypeRouter } = require("./routes/test-type.route");
const { userLoginRouter } = require("./routes/session.route");
const { testRouter } = require("./routes/tests.route");

const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
  res.send("this is home");
});
app.use("/session", userLoginRouter);

app.use("/api/users", userRouter);
app.use("/api/labs", labRouter);
app.use("/api/patients", patientRouter);
app.use("/api/testtype", testtypeRouter);
app.use("/api/test", testRouter);

sequelize.sync().then((e) => console.log(e));

app.listen(process.env.PORT);

exports.App = app;

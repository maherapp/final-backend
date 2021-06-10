const express = require("express");
const { sequelize } = require("./mudule");
const { Userrouter } = require("./routes/user.route");
const { labRouter } = require("./routes/lab.route");
const { patientRouter } = require("./routes/patient.route");
const { testtypeRouter } = require("./routes/testType.route");
const { userLoginRouter } = require('./routes/session.route');


const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
  res.send("this is home");
});
app.use('/session', userLoginRouter)

app.use('/api/users', Userrouter);
app.use('/api/labs', labRouter);
app.use('/api/patients', patientRouter);
app.use('/api/testtype', testtypeRouter);

sequelize.sync().then((e) => console.log(e)); 

app.listen(3000);

exports.App = app;

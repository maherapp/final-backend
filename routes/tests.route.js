const {
  getPatientTest,
  addPatientTest,
  addResultTest,
  addLabTestType,
} = require("../controllers/test.controller");

const router = require("express").Router();

router.post("/add", addPatientTest);
router.post("/addr", addResultTest);
router.post("/addrt", addLabTestType);

router.get("/getPateintTest", getPatientTest);

exports.testRouter = router;

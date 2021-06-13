const {
  TestModel,
  TestResultModel,
  LabTestsTypeModel,
  TestTypeModel,
} = require("../models");

exports.addPatientTest = async (req, res) => {
  const test = req.body;

  try {
    const addTest = await TestModel.create(test);
    res.status(201).json(addTest);
  } catch {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

exports.addResultTest = async (req, res) => {
  const test = req.body;

  try {
    const addTest = await TestResultModel.create(test);
    res.status(201).json(addTest);
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
    console.log(error);
  }
};
exports.addLabTestType = async (req, res) => {
  const test = req.body;

  try {
    const addLabTestType = await LabTestsTypeModel.create(test);
    res.status(201).json(addLabTestType);
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
    console.log(error);
  }
};

exports.getPatientTest = async (req, res) => {
  const id = req.body.id;
  try {
    const patientTests = await TestModel.findAll({
      where: {
        PatientId: 1,
      },
      include: [
        {
          model: TestResultModel,
          where: {
            id: 14,
          },
          include: [
            {
              model: LabTestsTypeModel,
              include: [
                {
                  model: TestTypeModel,
                },
              ],
            },
          ],
        },
      ],
    });
    res.json(patientTests);
  } catch {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

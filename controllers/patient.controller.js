
const { PatientModel } = require("../mudule");

exports.addpatient = async (req, res) => {
  const patient = req.body;
  try {
    const patientAdd = await PatientModel.create(patient);
    res.status(201).json(patientAdd);
  } catch {
    res.status(500).json({
      messag: "Internal server error",
    });
  }
};

exports.deletepatient = async (req, res) => {
  const patientId = +req.body.id;
  if (isNaN(patientId)) res.status(400).json({ message: "invalid patientId" });
  try {
    const count = await PatientModel.destroy({
      where: {
        id: patientId,
      },
    });
    if (count != 1)
      res.status(400).json({
        message: "patient not found",
      });
    res.json({ message: "deleted" });
  } catch {
    res.status(500).json({
      messag: "Internal server error",
    });
  }
};
exports.editpatient = async (req, res) => {
  const patient = req.body;
  const patientId = patient.id; 
  console.log(patientId)
  if (isNaN(patientId)) res.status(400).json({ message: "invalid patientId" });
  try {
    const update = await PatientModel.update(patient,{
        where:{
            id:patientId
        }
    });
    if (update != 1)
      res.status(400).json({
        message: "There is no such patient",
      });
      else res.json({message:'updated'})
  } catch {
    res.status(500).json({
      messag: "Internal server error",
    });
  }
};


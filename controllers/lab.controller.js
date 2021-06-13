const { LabModel, UserModel } = require("../models");

exports.addlab = async (req, res) => {
  const lab = req.body;
  try {
    const labAdd = await LabModel.create(lab);
    res.status(201).json(labAdd);
  } catch {
    res.status(500).json({
      messag: "Internal server error",
    });
  }
};

exports.deletelab = async (req, res) => {
  const labId = +req.body.id;
  if (isNaN(labId)) res.status(400).json({ message: "invalid labId" });
  try {
    const count = await LabModel.destroy({
      where: {
        id: labId,
      },
    });
    if (count != 1)
      res.status(400).json({
        message: "lab not found",
      });
    res.json({ message: "deleted" });
  } catch {
    res.status(500).json({
      messag: "Internal server error",
    });
  }
};

exports.editlab = async (req, res) => {
  const lab = req.body;
  const labId = lab.id;
  console.log(labId);
  if (isNaN(labId)) res.status(400).json({ message: "invalid labId" });
  try {
    const update = await LabModel.update(lab, {
      where: {
        id: labId,
      },
    });
    if (update != 1)
      res.status(400).json({
        message: "There is no such lab",
      });
    else res.json({ message: "updated" });
  } catch {
    res.status(500).json({
      messag: "Internal server error",
    });
  }
};

exports.findAll = async (req, res) => {
  const labs = await LabModel.findAll();
  res.json(labs);
};

exports.findById = async (req, res) => {
  const labId = +req.params.id;
  if (!labId) {
    return res.status(400).json({
      errorMessage: "Invalid lab id",
    });
  }

  const lab = await LabModel.findByPk(labId, {
    include: [
      {
        model: UserModel,
        attributes: ["id", "userName"],
      },
    ],
  });

  res.json(lab);
};

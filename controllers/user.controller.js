const { UserModel, LabModel } = require("../models");

exports.addUser = async (req, res) => {
  const user = req.body;
  try {
    const userAdd = await UserModel.create(user);
    res.status(201).json(userAdd);
  } catch {
    res.status(500).json({
      messag: "Internal server error",
    });
  }
};

exports.deleteUser = async (req, res) => {
  const userId = +req.body.id;
  if (isNaN(userId)) res.status(400).json({ message: "invalid userId" });
  try {
    const count = await UserModel.destroy({
      where: {
        id: userId,
      },
    });
    if (count != 1)
      res.status(400).json({
        message: "User not found",
      });
    res.json({ message: "deleted" });
  } catch {
    res.status(500).json({
      messag: "Internal server error",
    });
  }
};
exports.editUser = async (req, res) => {
  const user = req.body;
  const userId = user.id;
  console.log(userId);
  if (isNaN(userId)) res.status(400).json({ message: "invalid userId" });
  try {
    const update = await UserModel.update(user, {
      where: {
        id: userId,
      },
    });
    if (update != 1)
      res.status(400).json({
        message: "There is no such user",
      });
    else res.json({ message: "updated" });
  } catch {
    res.status(500).json({
      messag: "Internal server error",
    });
  }
};

exports.findAll = async (req, res) => {
  const users = await UserModel.findAll();
  res.json(users);
};

exports.assignToLab = async (req, res) => {
  try {
    const userId = +req.params.userId;
    if (!userId) {
      return res.status(400).json({
        errorMessage: "Invalid user id",
      });
    }

    const labId = +req.params.labId;
    if (!labId) {
      return res.status(400).json({
        errorMessage: "Invalid lab id",
      });
    }

    const user = await UserModel.findByPk(userId);
    if (!user) {
      return res.status(404).json({
        errorMessage: "User not found",
      });
    }

    const lab = await LabModel.findByPk(labId);
    if (!lab) {
      return res.status(404).json({
        errorMessage: "Lab not found",
      });
    }

    user.setLab(lab);
    await user.save();
    res.end();
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

exports.findById = async (req, res) => {
  const userId = +req.params.id;
  if (!userId) {
    return res.status(400).json({
      errorMessage: "Invalid user id",
    });
  }

  const user = await UserModel.findByPk(userId, {
    include: [{ model: LabModel, attributes: ["id", "labName"] }],
  });
  res.json(user);
};

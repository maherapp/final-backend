const { UserModel } = require("../models");

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
}
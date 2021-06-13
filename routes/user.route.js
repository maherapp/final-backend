const {
  addUser,
  editUser,
  deleteUser,
} = require("../controllers/user.controller");

const router = require("express").Router();

router.post("/add", addUser);

router.put("/update", editUser);

router.delete("/delete", deleteUser);

exports.Userrouter = router;

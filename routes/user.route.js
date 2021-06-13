const {
  addUser,
  editUser,
  deleteUser,
  findAll,
} = require("../controllers/user.controller");

const router = require("express").Router();

router.get("/", findAll)

router.post("/add", addUser);

router.put("/update", editUser);

router.delete("/delete", deleteUser);

exports.Userrouter = router;

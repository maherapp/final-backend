const {
  addUser,
  editUser,
  deleteUser,
  findAll,
} = require("../controllers/user.controller");

const router = require("express").Router();

router.get("/", findAll)

router.post("/", addUser);

router.put("/", editUser);

router.delete("/", deleteUser);

module.exports = router;

const {
  addUser,
  editUser,
  deleteUser,
  findAll,
  assignToLab,
} = require("../controllers/user.controller");

const router = require("express").Router();

router.get("/", findAll);

router.post("/", addUser);

router.put("/", editUser);

router.delete("/", deleteUser);

router.post("/assign/:userId/to/:labId", assignToLab);

module.exports = router;

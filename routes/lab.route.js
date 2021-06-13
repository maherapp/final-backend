const {
  addlab,
  editlab,
  deletelab,
  findAll,
} = require("../controllers/lab.controller");

const router = require("express").Router();

router.get("/", findAll);

router.post("/", addlab);

router.put("/", editlab);

router.delete("/", deletelab);

module.exports = router;

const {
  addlab,
  editlab,
  deletelab,
  findAll,
  findById,
} = require("../controllers/lab.controller");

const router = require("express").Router();

router.get("/:id", findById);

router.get("/", findAll);

router.post("/", addlab);

router.put("/", editlab);

router.delete("/", deletelab);

module.exports = router;

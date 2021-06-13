const { addlab, editlab, deletelab } = require("../controllers/lab.controller");

const router = require("express").Router();

router.post("/", addlab);

router.put("/", editlab);

router.delete("/", deletelab);

module.exports = router;

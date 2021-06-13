const { addlab, editlab, deletelab } = require("../controllers/lab.controller");

const router = require("express").Router();

router.post("/add", addlab);

router.put("/update", editlab);

router.delete("/delete", deletelab);

exports.labRouter = router;

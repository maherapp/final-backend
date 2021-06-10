
const { TestTypeModel } = require("../mudule");

exports.addtesttype = async (req, res) => {
  const testtype = req.body;
  try {
    const testtypeAdd = await TestTypeModel.create(testtype);
    res.status(201).json(testtypeAdd);
  } catch {
    res.status(500).json({
      messag: "Internal server error",
    });
  }
};

exports.deletetesttype = async (req, res) => {
  const testtypeId = +req.body.id;
  if (isNaN(testtypeId)) res.status(400).json({ message: "invalid testtypeId" });
  try {
    const count = await TestTypeModel.destroy({
      where: {
        id: testtypeId,
      },
    });
    if (count != 1)
      res.status(400).json({
        message: "testtype not found",
      });
    res.json({ message: "deleted" });
  } catch {
    res.status(500).json({
      messag: "Internal server error",
    });
  }
};
exports.edittesttype = async (req, res) => {
  const testtype = req.body;
  const testtypeId = testtype.id; 
  console.log(testtypeId)
  if (isNaN(testtypeId)) res.status(400).json({ message: "invalid testtypeId" });
  try {
    const update = await TestTypeModel.update(testtype,{
        where:{
            id:testtypeId
        }
    });
    if (update != 1)
      res.status(400).json({
        message: "There is no such testtype",
      });
      else res.json({message:'updated'})
  } catch {
    res.status(500).json({
      messag: "Internal server error",
    });
  }
};


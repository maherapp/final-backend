const { TestModel } = require("../mudule");

exports.getPatientTest = async (req, res) => {
    const id = req.body.id;
    try{
        const patientTests = TestModel.findAll({
            where: {
                PatientId : id,  
            }
        });
        res.json(patientTests);
    }catch{
        res.status(500).json({
            message: 'Internal server error'
        });
    }
}
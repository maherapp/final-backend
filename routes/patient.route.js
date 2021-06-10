const { addpatient, editpatient, deletepatient} = require('../controllers/patient.controller');

const router = require('express').Router();


router.post('/add', addpatient);

router.put('/update', editpatient);

router.delete('/delete', deletepatient);

exports.patientRouter= router;
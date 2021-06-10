const { addtesttype, edittesttype, deletetesttype} = require('../controllers/testtype.controller');

const router = require('express').Router();


router.post('/add', addtesttype);

router.put('/update', edittesttype);

router.delete('/delete', deletetesttype);

exports.testtypeRouter= router;
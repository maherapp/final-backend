const {userLogin} = require('../controllers/session.controller');

const router = require('express').Router();

router.get('/userlogin', userLogin);

exports.userLoginRouter= router;
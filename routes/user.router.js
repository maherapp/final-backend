const router = require('express').Router();
const session = require('express-session');


const Session = session({
    secret:'secret',
    resave:true,
    saveUninitialized: true
});


router.use(Session);

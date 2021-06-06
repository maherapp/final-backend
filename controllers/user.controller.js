const { UserModel } = require("../mudule");

exports.login = async (req, res,) => {
    if (req.session.loggedIn){
        res.json({message: "logged in"});
    }
    var username = request.body.username;
    var password = request.body.password;

    if(!username)res.status(401).json({message: 'Please enter username'});
    else if (!password)res.status(401).json({message: 'Please enter password'});
    const user = await UserModel.findAll({
        attributes: ['userName','email'],
        where:{
            userName : username,
            password : password
        }
    })
    if (user.lenght  <  0)res.status(401).json({message: "User name or password is incorrect"});
    req.session.loggedIn = true;
    req.session.username = username;
    res.status(201).json(user);
}


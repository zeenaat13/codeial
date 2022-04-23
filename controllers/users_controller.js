const User = require("../models/user");

module.exports.profile = function(req,res){
    res.end('<h1>User Profile</h1>');
}

// render the sign up page
module.exports.signUp = function(req, res){
    return res.render('user_sign_up', {
        title: "Codeial | Sign Up"
    })
}


// render the sign in page
module.exports.signIn = function(req, res){
    return res.render('user_sign_in', {
        title: "Codeial | Sign In"
    })
}

// get the sign up data
module.exports.create = function(req,res){
    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email: req.bodyemail}, function(err, user){
        if(err){console.log('error in creating user while signing up'); return}

        return res.redirect('/users/sign-in')
    })
}
// sign in and create a session for the user
module.exports.createSession = function(req,res){
    //TODO later
}
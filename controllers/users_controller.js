module.exports.profile = function(req, res) {
    //return res.send("<h1>PROFILE HERE </h1>");
    return res.render('user_profile');
}

module.exports.signup = function(req, res) {
    return res.render('sign_up');
}

module.exports.signin = function(req, res) {
    return res.render('sign_in');
}

module.exports.createSession = function(req, res) {
    //to do later
}

module.exports.createAccount = function(req, res) {
    //to do later
}
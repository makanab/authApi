module.exports = function(app){
    var userHandler = require('../controllers/user.controller');
    app.route('/auth/register').post(userHandler.register);
    app.route('/auth/signIn').post(userHandler.signIn);
    app.route('/').get(userHandler.loginRequire);


}
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');
var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport) {

  passport.use('login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
    },
    function(req, username, password, done) {
      // check in mongodb if a user with username exists or not
      User.findOne({
          'email': username
        },
        function(err, user) {
          if (err)
            return done(err);
          if (!user) {
            console.log('User not found with email ' + username);
            return done(null, false, req.flash('message', 'User not found.'));
          }
          if (!isValidPassword(user, password)) {
            console.log('Invalid Password');
            return done(null, false, req.flash('message', 'Invalid Password'));
          }
          return done(null, user);
        }
      );

    }));


  var isValidPassword = function(user, password) {
    return bCrypt.compareSync(password, user.password);
  };

};

var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');
var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport) {

  passport.use('signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true // allows us to pass back the entire request to the callback
    },
    function(req, username, password, done) {

      findOrCreateUser = function() {
        // find a user in mongo with provided username
        User.findOne({
          'email': username
        }, function(err, user) {
          if (err) {
            console.log('Error in signup: ' + err);
            return done(err);
          }
          if (user) {
            console.log('User already exists with email: ' + username);
            return done(null, false, req.flash('message', 'User already exists'));
          } else {
            var newUser = new User();

            newUser.email = username;
            newUser.password = createHash(password);

            newUser.save(function(err) {
              if (err) {
                console.log('Error in saving user: ' + err);
                throw err;
              }
              console.log('User registration succesful');
              return done(null, newUser);
            });
          }
        });
      };
      // Delay the execution of findOrCreateUser and execute the method
      // in the next tick of the event loop
      process.nextTick(findOrCreateUser);
    }));

  // Generates hash using bCrypt
  var createHash = function(password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
  };

};

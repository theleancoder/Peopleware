module.exports = function(app, passport) {

  app.get('*', function(req, res, next) {
    res.sendFile('./public/index.html');
    console.log("Routed to Angular");
  });

  app.post('/', passport.authenticate('signup', {
    successRedirect: '/home',
    failureRedirect: '/',
    failureFlash: true
  }));

  app.post('/login', passport.authenticate('login', {
    successRedirect: '/home',
    failureRedirect: '/login',
    failureFlash: true
  }));

};

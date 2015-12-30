var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('../auth/login.ejs', { title: 'Login' });
});

module.exports = router;

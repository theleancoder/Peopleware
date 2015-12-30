var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('../home/home.ejs', { title: 'Home' });
});

module.exports = router;
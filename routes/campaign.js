var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('../campaign/campaign.ejs', { title: 'Campaign' });
});

module.exports = router;

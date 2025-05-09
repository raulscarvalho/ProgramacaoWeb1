var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('users');
  req.requestTime = Date.now()
  console.log(Date.now())
});

module.exports = router;

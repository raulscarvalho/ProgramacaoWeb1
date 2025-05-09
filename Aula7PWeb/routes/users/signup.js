var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('signup')
  req.requestTime = Date.now()
  console.log(Date.now())
});

module.exports = router;
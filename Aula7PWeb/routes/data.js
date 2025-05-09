var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.send('data');
  req.requestTime = Date.now()
  console.log(Date.now())
});

module.exports = router;

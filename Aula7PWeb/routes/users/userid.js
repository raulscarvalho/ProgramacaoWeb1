var express = require('express');
var router = express.Router();

router.get('/:userid', function(req, res, next) {
  res.send(`Bem vindo ${req.params.userid}!`)
  req.requestTime = Date.now()
  console.log(Date.now())
});

module.exports = router;
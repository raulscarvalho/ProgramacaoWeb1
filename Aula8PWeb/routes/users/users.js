var express = require('express')
var router = express.Router()

router.get('/', function(req, res, next) {
  res.render('users/users')
})

module.exports = router;
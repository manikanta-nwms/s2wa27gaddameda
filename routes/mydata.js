var express = require('express');
var router = express.Router();

/* GET mydata page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Manikanta ',fact: 'I like to watch movies' });
});

module.exports = router;

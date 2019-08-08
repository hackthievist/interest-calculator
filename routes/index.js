var express = require('express');
var router = express.Router();
const { getInvestment } = require('../controllers/calculate');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res, next) {
  res.render('calculate', { title: 'Express' });
});

router.post('/calculate', getInvestment);

module.exports = router;

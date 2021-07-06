var express = require('express');
const petsController = require('../controller/petsController');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pet', petsController.index);
router.get('/pet/:id', petsController.show);

module.exports = router;

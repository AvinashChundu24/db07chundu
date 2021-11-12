var express = require('express');
const earphones_controlers= require('../controllers/earphones');
var router = express.Router();



/* GET earphones */
router.get('/', earphones_controlers.earphones_view_all_Page );
module.exports = router;




/* GET home page. */
router.get('/', function (req, res, next) {
res.render('earphones', { title: 'Search Results Ear Phones' });
});

// GET request for one costume.
router.get('/earphones/:id', earphones_controlers.earphones_detail);

module.exports = router;
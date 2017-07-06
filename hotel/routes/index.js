var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:name', function(req, res, next) {
	var name = req.params.name;
  res.render('../views/'+name+'.html', { title: 'Express' });
});

module.exports = router;
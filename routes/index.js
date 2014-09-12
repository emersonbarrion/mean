var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	db.players.find(function(err, records) {
	  if( err || !records) {
	  	console.log("There was an error executing the database query.");
	  	return;
	  }
	  res.render('index', { title: 'HBFC', rows: records });
	});
});

module.exports = router;
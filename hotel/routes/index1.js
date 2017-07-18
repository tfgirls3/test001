var express = require('express');
var router = express.Router();
var mysql = require('./dbConnect.js');

//查询座位
router.post('/selectSort',function(req,res){
	var sortName = req.body.sortName;
	var client = mysql.createServer();
	mysql.selectSort(client,sortName,function(result){
		console.log(result);
		return res.json({sort:result});
	})
})

module.exports = router;
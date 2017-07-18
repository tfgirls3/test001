var express = require('express');
var router = express.Router();
var mysql = require('./dbConnect.js');
router.post('/selectHistory',function(req,res){
	var client = mysql.createServer();
	mysql.selectHistory(client,function(result){
		console.log(result);
		return res.json({list:result});
	})
});
//router.post('/selectBill',function(req,res){
//	var client = mysql.createServer();
//	mysql.selectBill(client,function(result){
//		console.log(result);
//		return res.json({list:result});
//	})
//});
module.exports = router;
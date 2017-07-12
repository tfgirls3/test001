var express = require('express');
var router = express.Router();
var mysql = require('./dbConnect.js');

//查询订单
router.post('/selectList',function(req,res){
	var client = mysql.createServer();
	mysql.selectList(client,function(result){
		console.log(result);
		return res.json({list:result});
	})
})

module.exports = router;
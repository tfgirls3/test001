var express = require('express');
var router = express.Router();
var mysql = require('./dbConnect.js');
router.post('/selectOrderBySeat',function(req,res){
	var seatId = req.body.seatId;
	var client = mysql.createServer();
	mysql.selectOrderBySeat(client,seatId,function(result){
		console.log(result);
		return res.json({list:result});
	})
})
router.post('/selectCanUse',function(req,res){
	var client = mysql.createServer();
	mysql.selectCanUse(client,function(result){
		console.log(result);
		return res.json({list:result});
	})
})
router.post('/updateSeatState',function(req,res){
	var seatId = req.body.seatId;
	var client = mysql.createServer();
	mysql.updateSeatState(client,seatId,function(result){
		console.log('%%%%%%%%%%%%%%%%');
		console.log(result);
	})
})
module.exports = router;
















module.exports = router;
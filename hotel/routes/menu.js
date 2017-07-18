var express = require('express');
var router = express.Router();
var mysql = require('./dbConnect.js');
var async = require("async");
var uuid = require("node-uuid");
router.post('/selectCaiBySort',function(req,res){
	var sortName = req.body.sortName;
	var client = mysql.createServer();
	mysql.selectCaiBySort(client,sortName,function(result){
		console.log(result);
		return res.json({list:result});
	})
});
router.post('/selectCaiByName',function(req,res){
	var menuName = req.body.menuName;
	var client = mysql.createServer();
	mysql.selectCaiByName(client,menuName,function(result){
		console.log(result);
		return res.json({list:result});
	})
});
router.post('/addOrder',function(req,res){
	var seatId = req.body.seatId;
	var total = req.body.total;
	var pay = req.body.pay;
	var date = req.body.date;
	var billId = uuid.v4();
	var menuIds = req.body.menuIds;
	console.log(menuIds);
	var client = mysql.createServer();
	async.series({
        one:function(callback){
            console.info("第一个方法开始");
            mysql.addOrder(client,billId,seatId,total,pay,date,function(result){
                console.info(result);
			    if(result==1){
			    	console.log('下单成功');
			    }
                callback(null);
            });
        },
        two:function(callback){;
            console.info("第二个方法开始");
			mysql.addMiddle(client,billId,menuIds,function(result){
				console.log('添加middle成功');
				callback(null,result);
	        });
    	},
        three:function(callback){
        	console.log('第三个方法开始');
        	mysql.updateSeat(client,seatId,function(result){
			    if(result==1){
			    	console.log('更改座位状态成功');
			    }
        	})
        },
        function(err,values){
        }
	})
});
module.exports = router;
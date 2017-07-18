var mysql=require("mysql");
var uuid=require("node-uuid");
//创建一个连接数据库的客户端
function createServer(){
    var client=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"root",
        database:"restaurant"
    })
    return client;
}

function selectList(client,seatId,callback){
	client.query('SELECT b.seat_id,b.total,b.date,mi.middle_id,me.img,me.menu_name,me.menu_id FROM bill b LEFT JOIN middle mi ON b.bill_id = mi.bill_id LEFT JOIN menu me ON me.menu_id = mi.menu_id LEFT JOIN seat s ON s.seat_id = b.seat_id WHERE seat_state=1 and b.seat_id = ?',[seatId],function(error,result){
		console.log(result);
		callback(result);
	})
}
function selectOrderBySeat(client,seatId,callback){
	console.log('这是查询座位点餐信息的方法');
	console.log(seatId);
	client.query('SELECT b.total,mi.middle_id,me.menu_name,me.price,DATE FROM bill b LEFT JOIN middle mi ON b.bill_id = mi.bill_id LEFT JOIN menu me ON me.menu_id = mi.menu_id LEFT JOIN seat s ON s.seat_id = b.seat_id WHERE s.seat_state=1 AND b.seat_id=?',[seatId],function(error,result){
		console.log(result);
		callback(result);
	})
}
function selectCanUse(client,callback){
	client.query('SELECT seat_id FROM seat WHERE seat_state =1',function(error,result){
		console.log(result);
		callback(result);
	})
}
function selectCaiBySort(client,sortName,callback){
	client.query('SELECT * FROM menu m LEFT JOIN sort s ON m.sort_id = s.sort_id WHERE sort_name=?',[sortName],function(error,result){
		callback(result);
	})
	
}
function updateSeatState(client,seatId,callback){
	client.query('UPDATE seat SET seat_state = 0 WHERE seat_id = ?',[seatId],function(error,result){
		callback(result.affectedRows);
	})
	
}
function selectCaiByName(client,menuName,callback){
	client.query('SELECT * FROM menu WHERE menu_name=?',[menuName],function(error,result){
		console.log(result+'###########');
		callback(result);
	})
	
}
function addOrder(client,billId,seatId,total,pay,date,callback){
	client.query('INSERT INTO bill (bill_id,seat_id,total,pay,DATE)VALUES(?,?,?,?,?);',[billId,seatId,total,pay,date],function(error,result){
		callback(result.affectedRows);
		console.log(result.affectedRows);
	})
	
}
function addMiddle(client,billId,menuIds,callback){
	var resultArr = [];
	for(var i=0;i<menuIds.length;i++){
		var menuId = menuIds[i];
		client.query('INSERT INTO middle (middle_id,bill_id,menu_id)VALUES(?,?,?);',[uuid.v4(),billId,menuId],function(error,result){
			resultArr.push(result.affectedRows);
			console.log("####################");
			console.log(resultArr);
		})
	}	
	callback(resultArr);
}
function updateSeat(client,seatId,callback){
	console.log('这是seat_id'+seatId);
	client.query('update seat set seat_state=1 WHERE seat_id=?',[seatId],function(error,result){
		console.log('@!!!!!!!!!!!!!!!!!!!!!!!');
		console.log(result.affectedRows);
		callback(result.affectedRows);
	})
}
function selectHistory(client,callback){
	client.query('SELECT b.total,me.menu_name,me.price FROM bill b LEFT JOIN middle mi ON b.bill_id = mi.bill_id LEFT JOIN menu me ON me.menu_id = mi.menu_id',function(error,result){
		console.log(result);
		callback(result);
	})
}
//function selectBill(client,callback){
//	client.query('SELECT b.total,me.menu_name FROM bill b LEFT JOIN middle mi ON b.bill_id = mi.bill_id LEFT JOIN menu me ON me.menu_id = mi.menu_id ',function(error,result){
//		console.log(result);
//		callback(result);
//	})
//}
function selectSeat(client,callback){
	client.query('select seat_id seat_num from seat',function(error,result){
		console.log(result);
		callback(result);
	})
	
}
function selectSort(client,sortName,callback){
	client.query('SELECT m.menu_id, m.menu_name, m.price, m.img, s.sort_id FROM menu m LEFT JOIN sort s ON m.sort_id = s.sort_id where sort_name = ?',[sortName],function(error,result){
		callback(result);
	})
	
}
exports.createServer = createServer;
exports.selectList = selectList;
exports.selectOrderBySeat = selectOrderBySeat;
exports.selectCaiBySort = selectCaiBySort;
exports.selectCaiByName = selectCaiByName;
exports.addOrder = addOrder;
exports.addMiddle = addMiddle;
exports.updateSeat = updateSeat;
exports.selectCanUse = selectCanUse;
exports.updateSeatState = updateSeatState;
exports.selectHistory = selectHistory;
exports.selectSeat = selectSeat;
exports.selectSort = selectSort;
//exports.selectBill = selectBill;
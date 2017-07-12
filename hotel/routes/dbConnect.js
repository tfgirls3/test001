var mysql=require("mysql");
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

function selectList(client,callback){
	client.query('SELECT b.seat_id,b.total,mi.middle_id,mi.num,me.img,me.menu_name FROM bill b LEFT JOIN middle mi ON b.bill_id = mi.bill_id LEFT JOIN menu me ON me.menu_id = mi.menu_id',function(error,result){
		console.log(result);
		callback(result);
	})
	
}
exports.createServer = createServer;
exports.selectList = selectList;
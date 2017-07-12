import '../css/menu.css';
import './hmr.js';
import 'jquery';
import 'bootstrap';
import 'bootstrap-loader';
var socket = io.connect();
socket.on('news',function(res){
	if(res.success==true){
		window.location.reload();
	}
})
//var Vue = require('vue');
//import Vue from 'vue';
import Vue from 'vue';
import '../css/vue.css';
var vue2 = new Vue({
	el:"#zhuCai",
	data:{
		list:[
			{index:0,name:'柠汁三文鱼',id:'c1',sal:98.00,img:'/img/柠汁三文鱼.jpg',checked:false},
			{index:1,name:'带骨眼排',id:'c2',sal:38.00,img:'/img/带骨眼排.jpg',checked:false},
			{index:2,name:'英式传统番茄浓汤',id:'c3',sal:28.00,img:'/img/英式传统番茄浓汤.jpg',checked:false},
			{index:3,name:'洋葱圈',id:'c4',sal:18.00,img:'/img/洋葱圈.jpg',checked:false},
			{index:4,name:'缤纷水果披萨',id:'c5',sal:28.00,img:'/img/缤纷水果披萨.png',checked:false},
			{index:5,name:'芝士蛋糕',id:'c6',sal:28.00,img:'/img/芝士蛋糕.jpg',checked:false},
			{index:6,name:'英式传统番茄浓汤',id:'c7',sal:28.00,img:'/img/英式传统番茄浓汤.jpg',checked:false},
			{index:7,name:'洋葱圈',id:'c8',sal:18.00,img:'/img/洋葱圈.jpg',checked:false},
			{index:8,name:'缤纷水果披萨',id:'c9',sal:28.00,img:'/img/缤纷水果披萨.png',checked:false},
			{index:9,name:'芝士蛋糕',id:'c10',sal:28.00,img:'/img/芝士蛋糕.jpg',checked:false}
		],
		total:0
	},
	methods:{
		jiSuan:function(index){
			console.log(index);
			//通过序号来获取菜单列表对于的数据并且根据选择状态来修改总价钱
			if(this.list[index].checked==true){
				this.total+=this.list[index].sal;
			}else{
				this.total-=this.list[index].sal;
			}
		}
	}
})
var vue3 = new Vue({
	el:"#zhuShi",
	data:{
		list:[
			{index:10,name:'柠汁三文鱼',id:'c11',sal:98.00,img:'/img/洋葱圈.jpg',checked:false},
			{index:11,name:'带骨眼排',id:'c12',sal:38.00,img:'/img/带骨眼排.jpg',checked:false},
			{index:12,name:'英式传统番茄浓汤',id:'c13',sal:28.00,img:'/img/英式传统番茄浓汤.jpg',checked:false},
			{index:13,name:'洋葱圈',id:'c14',sal:18.00,img:'/img/洋葱圈.jpg',checked:false},
			{index:14,name:'缤纷水果披萨',id:'c15',sal:28.00,img:'/img/缤纷水果披萨.png',checked:false},
			{index:15,name:'芝士蛋糕',id:'c16',sal:28.00,img:'/img/芝士蛋糕.jpg',checked:false},
			{index:16,name:'英式传统番茄浓汤',id:'c17',sal:28.00,img:'/img/英式传统番茄浓汤.jpg',checked:false},
			{index:17,name:'洋葱圈',id:'c18',sal:18.00,img:'/img/洋葱圈.jpg',checked:false},
			{index:18,name:'缤纷水果披萨',id:'c19',sal:28.00,img:'/img/缤纷水果披萨.png',checked:false},
			{index:19,name:'芝士蛋糕',id:'c20',sal:28.00,img:'/img/芝士蛋糕.jpg',checked:false}
		],
		total1:0
	},
	methods:{
		jiSuan:function(index){
			console.log(this.list);
			//通过序号来获取菜单列表对于的数据并且根据选择状态来修改总价钱
			if(this.list[index-10].checked==true){
				this.total1+=this.list[index-10].sal;
			}else{
				this.total1-=this.list[index-10].sal;
			}
		}
	}
	
})
var vue4 = new Vue({
	el:"#niuPa",
	data:{
		list:[
			{index:20,name:'柠汁三文鱼',id:'c21',sal:98.00,img:'/img/俄式酥炸大虾.jpg',checked:false},
			{index:21,name:'带骨眼排',id:'c22',sal:38.00,img:'/img/香煎龙利鱼.jpg',checked:false},
			{index:22,name:'英式传统番茄浓汤',id:'c23',sal:28.00,img:'/img/英式传统番茄浓汤.jpg',checked:false},
			{index:23,name:'洋葱圈',id:'c24',sal:18.00,img:'/img/洋葱圈.jpg',checked:false},
			{index:24,name:'缤纷水果披萨',id:'c25',sal:28.00,img:'/img/缤纷水果披萨.png',checked:false},
			{index:25,name:'芝士蛋糕',id:'c26',sal:28.00,img:'/img/芝士蛋糕.jpg',checked:false},
			{index:26,name:'英式传统番茄浓汤',id:'c27',sal:28.00,img:'/img/英式传统番茄浓汤.jpg',checked:false},
			{index:27,name:'洋葱圈',id:'c28',sal:18.00,img:'/img/洋葱圈.jpg',checked:false},
			{index:28,name:'缤纷水果披萨',id:'c29',sal:28.00,img:'/img/缤纷水果披萨.png',checked:false},
			{index:29,name:'芝士蛋糕',id:'c30',sal:28.00,img:'/img/芝士蛋糕.jpg',checked:false}
		],
		total2:0
	},
	methods:{
		jiSuan:function(index){
			console.log(index);
			//通过序号来获取菜单列表对于的数据并且根据选择状态来修改总价钱
//			console.log(this.list[index]);
			if(this.list[index-20].checked==true){
				this.total2+=this.list[index-20].sal;
			}else{
				this.total2-=this.list[index-20].sal;
			}
		}
	}
	
})





var htmlWebpackPlugin = require('html-webpack-plugin');
var extractTextPligin = require('extract-text-webpack-plugin');
module.exports={
	entry:{
		main:"./src/js/main.js"
	},
	output:{
		filename:"js/[name]-bundle.js",
		path:__dirname+"/public",
		publicPath:"http://localhost:3000"
	},
	module:{
		rules:[
			{
				test:/\.css$/,
				use: extractTextPligin.extract({//将css分离出来
		          fallback: "style-loader",
		          use: "css-loader!postcss-loader"
		        })		
			},
			{ 
				test: require.resolve("jquery"), 
				loader: "expose-loader?$!expose-loader?jQuery"
			},
			{
				test:/\.js$/,
				loader:"babel-loader"
			},
			{
				test:/\.html$/,
				loader:"html-loader"
			},
			{
				test:/\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
				loader:'url-loader'
			}
		]
	},
	plugins:[
		new extractTextPligin("[name].css"),
		new htmlWebpackPlugin({
			filename:"../views/index.html",//从www里出发
			template:"./src/tpl/index.html",//从webpack.config里出发
			chunks:["main"]
		})
	]
}

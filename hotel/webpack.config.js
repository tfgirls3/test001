var htmlWebpackPlugin=require('html-webpack-plugin');
var extractTextPlugin=require('extract-text-webpack-plugin')
//动态生成入口文件
var fs=require('fs');
//fs中有一个方法叫做 var files = fs.readdirSync(文件路径)
var tplPath='./src/tpl';
var files=fs.readdirSync(tplPath);
console.log(files);
//声明入口问价对象
var entry=setEntry(files);
//console.log(entry);
//通过循环整理入口文件的对象
//整理html plugins模板的数组
var plugins=setPlugins(files);
//console.log(plugins);

module.exports={
	entry:entry,
	resolve: {
	    alias: {
	      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
	    }
	},
	output:{
		filename:'js/[name]-bundle.js',
		path:__dirname+'/public',
		publicPath:'http://localhost:3000'
	},
	module:{
			//通过url-loader解析以上后缀的文件 
			//limit是如果文件小于10k就会变成dataUrl
			//name是生成的文件的名字 也可以加入部分路径 位置还是基于output的path
			//ext是保留源文件后缀
			rules:[
				{ 
					test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, 
					loader: 'url-loader'
				},
				{ 
					test: require.resolve("jquery"), 
					loader: "expose-loader?$!expose-loader?jQuery"
				},
				{
					test:/\.vue$/,
					loader: 'vue-loader'
				},
				{
					test:/\.js$/,
					loader:'babel-loader'
				},
				{
					test:/\.css$/,
					loader:extractTextPlugin.extract({
						fallback:'style-loader',
						use:'css-loader!postcss-loader'
					})
				},
				{
					test:/\.html$/,
					loader:'html-loader'
				}
				
				]
		
		
	},
	plugins:plugins
}
function setEntry(files){
	var entry={};
	for(var i=0;i<files.length;i++){
		var entryKey=files[i].substring(0,files[i].indexOf('.'));
		console.log(entryKey);
		entry[entryKey]='./src/js/'+entryKey+'.js';
	}
	return entry;
}

function setPlugins(files){
	var plugins=[new extractTextPlugin('css/[name].css')];
	for(var i=0;i<files.length;i++){
		var entryKey=files[i].substring(0,files[i].indexOf('.'));
		console.log(entryKey);
		plugins.push(new htmlWebpackPlugin({
				filename:'../views/'+entryKey+'.html',
				template:'./src/tpl/'+entryKey+'.html',
				chunks:[entryKey]
			}))
	}
	return plugins;
}

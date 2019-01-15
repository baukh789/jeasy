const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const genRules = require('./webpack-common.loader');
const buildPath = path.join(__dirname, "dist");
const { version } = require('./package.json');

const config = {

	// 入口文件所在的上下文
	context: path.join(__dirname, "src/"),

	// 入口文件配置
	entry: {
		js: './index.js'
	},

	// 配置模块如何解析
	resolve:{
		extensions: [".js"] //当requrie的模块找不到时,添加这些后缀
	},

	// 自动补全loader
	resolveLoader: {
		moduleExtensions: ['-loader']
	},

	// 文件导出的配置
	output:{
		path: buildPath ,
		filename: "index.js",
        libraryTarget: "umd"
	},

	// 以插件形式定制webpack构建过程
	plugins: [
		// 将文件复制到构建目录
		// CopyWebpackPlugin-> https://github.com/webpack-contrib/copy-webpack-plugin
		new CopyWebpackPlugin([
			{from: path.join(__dirname, '/package.json'), to: '', toType: 'file'},
			{from: path.join(__dirname, '/README.md'), to: '', toType: 'file'}
		]),

        // 配置环境变量
        new webpack.DefinePlugin({
            'process.env': {
                VERSION: JSON.stringify(version)
            }
        }),

		// 使用webpack内置插件压缩js
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			sourceMap: false // 是否生成map文件
		})
	],

	// 处理项目中的不同类型的模块。
	module: {
		rules: genRules('src', false)
	}
};

module.exports = config;

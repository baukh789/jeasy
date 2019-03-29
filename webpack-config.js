const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const genRules = require('./webpack-common.loader');
const buildPath = path.join(__dirname, "dist");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { version } = require('./package.json');

const config = {
    mode: 'production',

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


    // 优化代码
    optimization: {
        minimizer: [
            // 压缩js
            new UglifyJsPlugin({
                uglifyOptions: {
                    cache: true,
                    parallel: true,
                    sourceMap: true,
                    warnings: false
                }
            })
        ]
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
        })
	],

	// 处理项目中的不同类型的模块。
	module: {
		rules: genRules('src', false)
	}
};

module.exports = config;

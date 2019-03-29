const path = require('path');
const webpack = require('webpack');
const genRules = require('./webpack-common.loader');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { version } = require('./package.json');

const config = {
    mode: 'development',

	// map
	devtool : 'source-map',  // TODO  http://www.css88.com/doc/webpack2/configuration/devtool/

	// 入口文件配置
	context: path.join(__dirname, "src/"),

	// 入口文件配置
	entry: {
		js: '../demo/index.js'
	},

	// 配置模块如何解析
	resolve:{
		extensions: [".js"] //当requrie的模块找不到时,添加这些后缀
	},

	// 自动补全loader
	resolveLoader: {
		moduleExtensions: ['-loader']
	},

    // 以插件形式定制webpack构建过程
    plugins: [
        // 配置环境变量
        new webpack.DefinePlugin({
            'process.env': {
                VERSION: JSON.stringify(version)
            }
        }),

        // 使用交互式可缩放树形图可视化webpack输出文件的大小
        // https://www.npmjs.com/package/webpack-bundle-analyzer
        new BundleAnalyzerPlugin({
            // 是否为静态导出
            // analyzerMode: 'static',
            defaultSizes: 'parsed',

            // 是否启动后打开窗口
            openAnalyzer: false
        })
    ],
	// 文件导出的配置
	output:{
		// path: '/' ,
		filename: "webpack-dev-file/js/index.js",
		// publicPath 对于热替换（HMR）是必须的，让webpack知道在哪里载入热更新的模块（chunk）
		publicPath: "/"
	},

	// 处理项目中的不同类型的模块
	module: {
		rules: genRules('src', true)
	}
};

module.exports = config;

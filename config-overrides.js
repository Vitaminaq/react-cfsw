const path = require('path');
const WebpackBar = require('webpackbar');

module.exports = function override(config, env) {
	config.output.path = path.resolve(__dirname, './build');
	// 不支持tsconfig开启别名，无法生效 https://github.com/facebook/create-react-app/pull/6577
	config.resolve = {
		extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
		alias: {
			'@src': path.resolve(__dirname, './src')
		}
	};
	config.plugins = [...config.plugins, new WebpackBar()];
	if (env === 'development') {
		config.devServer = {
			open: false,
			port: 8080
		};
	}
	return config;
};

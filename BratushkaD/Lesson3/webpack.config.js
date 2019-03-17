const path = require('path');

module.exports = {
	entry: './src/App.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'
	},
	mode: 'development',
	module: {
		rules: 
		[
			{
				test: /\.jsx?$/,
				exclude: "/node_modules/",
				use: "babel-loader"
			}
		]
	}
}
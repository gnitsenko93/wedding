const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'static')
	},
	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
			{ test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
			{ test: /\.(png|svg|jpg|gif)$/, use: [ 'file-loader' ] }
		]
	}
}

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'static')
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './static'
	},
	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },
			{ test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
			{ test: /\.(png|svg|jpg|gif|ico)$/, use: [ 'file-loader' ] }
		]
	},
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html'})
    ]
}

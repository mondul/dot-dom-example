const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: process.env.NODE_ENV || 'development',
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: { path: path.resolve(__dirname, 'dist') },
	resolve: { extensions: [ '.js', '.jsx' ] },
	module: {
		rules: [
			{
				test: /\.js(x?)$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	plugins: [ new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') }) ]
}

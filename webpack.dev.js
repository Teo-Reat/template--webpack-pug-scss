const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
	mode: "development",
	target: 'web',
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "dist")
	},
	plugins: [
		// new HtmlWebpackPlugin({
		// 	template: "./src/template.html"
		// }),
		new HtmlWebpackPlugin({
			template: './src/template.pug',
			// filename: './about/index.html',
			inject: true
		}),
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					"style-loader", //3. Inject styles into DOM
					"css-loader", //2. Turns css into commonjs
					"sass-loader" //1. Turns sass into css
				]
			}
		]
	},
	devServer: {
		port: 8080,
		watchContentBase: true
	},
});

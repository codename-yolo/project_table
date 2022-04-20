const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
     entry: {
          index: path.resolve(__dirname, './src/js/index.js'),
     },
     output: {
          path: path.resolve(__dirname, './build'),
          filename: '[name].bundle.js',
     },
     plugins: [
          new HtmlWebpackPlugin({
               template: path.resolve(__dirname, './index.html'),
          }),
     ],
     module: {
          rules: [
               {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
               },
          ],
     },
}

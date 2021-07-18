const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
var webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname,'src'),
    mode: 'development',
    entry:'./index.js',
   
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname,'dist')
    },
    resolve: {
        extensions:[]

    },

    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.$': 'jquery',
          }),
        new HTMLWebpackPlugin({
            template: './index.pug',
            filename:'[name].html'
        }),
        new CleanWebpackPlugin(),
        //new CopyWebpackPlugin([
           // {
              //  from:path.resolve(__dirname,'src/assets'),
              // to:path.resolve(__dirname,'dist')
           // }

        //]),
        new MiniCssExtractPlugin(
            {
                filename:'[name].css'
            }
        ),
        
    ],
    module: {
        rules: [
            {
                test:/\.pug$/,
                use: ['pug-loader']
            },
            {
                test:/\.css$/,
                use: [MiniCssExtractPlugin.loader,'css-loader']
            },
            {
                test:/\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader,'css-loader','sass-loader']
            },
            {
                test:/\.(png|jpg|svg|gif)$/,
                use:['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader'],
                
            }
        ]
    }
}
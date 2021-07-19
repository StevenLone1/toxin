const path = require('path')
var webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')



module.exports = {
    context: path.resolve(__dirname,'src'),
    mode: 'development',
    entry:{ 'index': ['./pages/js/index.js'],
            'colors_type': ['./pages/js/colors_type.js'],
            'form_elements': ['./pages/js/form_elements.js']        
    
},
   
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname,'dist')
    },
    resolve: {
        extensions:[]

    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './pages/pug/index.pug',
            filename:'index.html',
            chunks: ['index'],
        }),
        new HTMLWebpackPlugin({
            template: './pages/pug/colors_type.pug',
            filename:'colors_type.html',
            chunks: ['colors_type'],
        }),
        new HTMLWebpackPlugin({
            template: './pages/pug/form_elements.pug',
            filename:'form_elements.html',
            chunks: ['form_elements'],
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
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            'window.jQuery':'jquery',
            
          }),
        
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
                
            },
            {
                test: /\.js$/,
                exclude:/ node_modules/,
                loader: 'babel-loader'
            },

        ]
    }
}
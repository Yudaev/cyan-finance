const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
const webpack = require('webpack');



module.exports = {
    entry: {
        
            main: path.resolve(__dirname, 'src', 'index.jsx')
    },
    output: {
            path: path.join(__dirname, 'dist'),
            publicPath: '/',
            filename: path.join('js', 'bundle.js')
    },
    target: 'web',   
    
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                    plugins: [
                        [
                            "@babel/plugin-proposal-class-properties", {"loose": true}
                        ]
                    ]
                }
            },
            // {
            //     test: /\.less$/,
            //     loader: 'less-loader', // compiles Less to CSS
            // },
            // {
            //     test: /\.s[ac]ss$/i,
            //     use: [
            //       // Creates `style` nodes from JS strings
            //       'style-loader',
            //       // Translates CSS into CommonJS
            //       'css-loader',
            //       // Compiles Sass to CSS
            //       'sass-loader',
            //     ],
            // },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'images'
                }
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: path.join('style', '[name].css'), 
            chunkFilename: '[id].css',
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'public', 'index.html')   
        }),
    ],
    
    devServer: {
        contentBase: './dist',
        port: 3000,
        hot: true,
        open: false,
        // proxy: {
        //     '/api': {
        //         target: 'http://localhost:3300',
        //         pathRewrite: { '^/api': '' },
        //         secure: false, 
        //         changeOrigin: true 
        //     }
        // },
        historyApiFallback: true
    },
};
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const argv = require('minimist')(process.argv.slice(2));

module.exports = {
  entry: [
    '@babel/polyfill',
    path.resolve(__dirname, "src", "index.js"),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(sa|sc)ss$/,
        use: [
          argv.mode === 'production'
            ? MiniCssExtractPlugin.loader
            : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]',
              },
              sourceMap: true,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          argv.mode === 'production'
            ? MiniCssExtractPlugin.loader
            : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /config\.js$/,
        loader: 'file-replace-loader',
        options: {
          condition: argv.mode === 'development',
          replacement: path.resolve(__dirname, 'src', 'config.dev.js'),
          async: true,
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html")
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: 'src',
    historyApiFallback: true,
    port: 7000,
    proxy: {
      '/api/': {
        target: 'http://localhost:8000/',
        pathRewrite: { '/api/': '' },
        secure: false,
        changeOrigin: true,
      }
    }
  }
};

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { DefinePlugin } = require('webpack')
const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')

module.exports = (env) => {
  const currentPath = path.join(__dirname)
  const basePath = currentPath + '/.env'
  const envPath = basePath + '.' + env.NODE_ENV
  const finalPath = fs.existsSync(envPath) ? envPath : basePath
  const fileEnv = dotenv.config({ path: finalPath }).parsed

  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next])
    return prev
  }, {})

  return {
    output: {
      filename: 'js/app.bundle.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Trivia Challenge',
        template: 'public/index.html'
      }),

      new MiniCssExtractPlugin({
        filename: 'css/[name].[hash].css',
        chunkFilename: 'css/[id].[hash].css'
      }),
      new DefinePlugin(envKeys)
    ],
    devServer: {
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
        {
          test: /\.(s*)css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: '[hash].[ext]',
              outputPath: 'assets'
            }
          }
        }
      ]
    }
  }
}

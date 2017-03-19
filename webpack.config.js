
const path = require('path')

const webpackConfig = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, "./bin"),
    filename:'bundle.js'
  },
  devServer: {

    inline: true,
    contentBase: './src',
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query:{
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loader!postcss-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }

    ]
  }
}

module.exports = webpackConfig


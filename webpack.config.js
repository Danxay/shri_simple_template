const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const StatoscopePlugin = require('@statoscope/webpack-plugin').default;

const mode = process.argv[process.argv.indexOf('--mode') + 1] === 'production' ? 'production' : 'development';
const isDev = mode === 'development';
const isProd = !isDev
const devtool = isDev ? 'source-map' : undefined;

const plugins = () => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: "./public/favicon.ico",
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new StatoscopePlugin({
      saveReportTo: './report.html',
      saveStatsTo: './stats.json',
      saveOnlyStats: false,
      open: false,
    }),
  ]

  if (isDev) {
    plugins.push(new webpack.HotModuleReplacementPlugin())
  }

  return plugins;
}

const optimization = () => {
  const config = {
    minimize: false,
    moduleIds: "deterministic",
    innerGraph: true,
    concatenateModules: true,
    usedExports: true,
    splitChunks: {
      minChunks: 2,
      chunks: 'all',
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
        }
      }
    },
    runtimeChunk: {
      name: 'runtime',
    },
  }

  if (isProd) {
    config.minimize = true;
    config.minimizer = [
      new CssMinimizerPlugin(),
      new TerserPlugin()
    ]
  }

  return config
}

const config = {
  devtool,
  entry: {
    main: {
      import: './src/index.js',
      dependOn: ['about', 'home']
    },
    about: './src/pages/About.js',
    home: './src/pages/Home.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  mode,
  target: "web",
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader",
          options: {
            plugins: [
              'lodash'
            ],
            presets: ["@babel/preset-env", ['@babel/preset-react', {runtime: 'automatic'}]],
          }
        }],
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', 'json'],
    fallback: {
      crypto: require.resolve("crypto-browserify"),
    },
    alias: {
      'react-is': path.resolve(__dirname, 'node_modules/react-is')
    }
  },
  plugins: plugins(),
  optimization: optimization(),
  devServer: {
    port: 3000,
    compress: true,
    open: true,
    hot: isDev,
  },
};

module.exports = config;

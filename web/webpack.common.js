const webpack = require('webpack');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const JSONMinifyPlugin = require('node-json-minify');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  entry: path.resolve(__dirname, 'app', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.mjs', '.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /.(ts|tsx|js|jsx)$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name(resourcePath, resourceQuery) {
            if (process.env.NODE_ENV === 'development') {
              return '[path][name].[ext]';
            }

            return '[contenthash].[ext]';
          },
          outputPath: 'assets/images',
          publicPath: 'assets/images',
        },
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          /* i18n */
          from: path.join(__dirname, 'app', 'languages'),
          transform(content) {
            // minify json
            return JSONMinifyPlugin(content.toString());
          },
          to: path.join(__dirname, 'public', 'languages'),
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'app', 'html', 'index.html'),
      title: 'Localhost',
    }),
    new InjectManifest({
      swSrc: path.resolve(__dirname, 'app', 'sw.js'),
      swDest: path.resolve(__dirname, 'public', 'sw.js'),
      maximumFileSizeToCacheInBytes: 1024 * 1024 * 1024 * 1024 * 8,
    }),
    new WebpackPwaManifest({
      name: 'Localhost',
      short_name: 'CO',
      description: 'A personal page',
      background_color: '#ffffff',
      inject: true,
      fingerprints: true,
      ios: true,
      crossorigin: null,
      icons: [
        {
          src: path.resolve(__dirname, 'app', 'icon', 'icon.png'),
          sizes: [96, 128, 192, 256, 384, 512, 1024],
        },
      ],
    }),
  ],
};

module.exports = config;

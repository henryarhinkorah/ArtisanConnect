const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const path = require('path');

module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  // Add font handling for react-native-vector-icons
  config.module.rules.push({
    test: /\.(ttf|eot|woff|woff2)$/,
    loader: 'file-loader',
    include: path.resolve(__dirname, 'node_modules/react-native-vector-icons'),
    options: {
      name: '[name].[ext]',
      outputPath: 'static/fonts/',
      publicPath: '/static/fonts/',
    },
  });

  return config;
};

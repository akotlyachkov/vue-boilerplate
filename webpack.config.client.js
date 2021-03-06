const merge = require("webpack-merge");
const path = require('path');
const baseConfig = require("./webpack.config.base");
//const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');

module.exports = merge(baseConfig, {
  entry: {
    client: './app/entry-client.js',
  },
  externals: {
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'vuex': 'Vuex',
    'lodash': '_'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    //new VueSSRClientPlugin()
  ],
  devtool: 'source-map',
});
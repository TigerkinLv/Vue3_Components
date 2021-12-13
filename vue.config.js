const vConsolePlugin = require("vconsole-webpack-plugin");

module.exports = {
  publicPath: './',
  outputDir: process.env.outputDir || 'dist',
  assetsDir: 'static',
  configureWebpack: (config) => {
    if (process.env.NODE_ENV == 'dev') {
      let pluginDev = [
        new vConsolePlugin({
          filter: [],
          enable: true
        })
      ];
      config.plugins = [...config.plugins, ...pluginDev];
    }
  },
  devServer: {
    open: true
  },
  lintOnSave: false
}
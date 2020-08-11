module.exports = {
  outputDir: "dist",

  lintOnSave: true,

  chainWebpack: () => {},
  configureWebpack: () => {},
  productionSourceMap: true,

  css: {
    extract: true,

    sourceMap: false,

    loaderOptions: {},
    requireModuleExtension: false,
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require("os").cpus().length > 1,

  pwa: {},
  // webpack-dev-server
  devServer: {
    open: process.platform === "darwin",
    host: "0.0.0.0",
    port: 8081,
    https: false,
    hotOnly: false,
    proxy: {
      "/api": {
        target: "http://localhost:5000/api",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "/api": "",
        },
      },
    },
    before: (app) => {},
  },

  pluginOptions: {
    // ...
  },
};

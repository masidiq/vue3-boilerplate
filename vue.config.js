module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/assets/scss/variable.scss";'
      }
    }
  },
  pluginOptions: {
    autoRouting: {
      // Optionally specify a custom output file, relative to the project root
      outFile: "src/router/routes.js",
      // Specify other vue-auto-routing options here
      nested: false
    }
  }
}

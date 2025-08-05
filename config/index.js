// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path');

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: process.env.NODE_ENV !== 'production', // Only in dev
    
    // Enable Gzip compression for better performance
    productionGzip: true,
    productionGzipExtensions: ['js', 'css', 'svg', 'woff', 'ttf', 'eot'],
    
    // Bundle analyzer
    bundleAnalyzerReport: process.env.npm_config_report,
    
    // Additional optimizations
    cacheBusting: true,
    
    // CSS extraction
    extractCSS: true,
    
    // Performance budgets (optional warnings)
    performanceBudget: {
      maxAssetSize: 250000,
      maxEntrypointSize: 250000
    }
  },
  dev: {
    env: require('./dev.env'),
    port: process.env.PORT || 8080,
    autoOpenBrowser: false, // Set to false for better CI/CD compatibility
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    
    // Proxy configuration for API calls during development
    proxyTable: {
      // Example: proxy API calls to backend
      // '/api': {
      //   target: 'http://localhost:3000',
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/api': ''
      //   }
      // }
    },
    
    // Development server configuration
    host: 'localhost', // can be overwritten by process.env.HOST
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
    
    // Error overlay
    errorOverlay: true,
    notifyOnErrors: true,
    
    // CSS Sourcemaps - enabled for better debugging
    cssSourceMap: true,
    
    // Dev tool for better debugging
    devtool: 'cheap-module-eval-source-map'
  }
};

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  // Other webpack configuration...
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'server', // Options: 'server', 'static', 'disabled'
      openAnalyzer: true,    // Automatically open the analyzer in your browser
    }),
  ],
};

const path = require("path");
const vtkChainWebpack = require("vtk.js/Utilities/config/chainWebpack");

module.exports = () => ({
  overrideWebpackConfig: ({ webpackConfig, context: { env } }) => {
    webpackConfig = vtkChainWebpack(webpackConfig);

    return webpackConfig;
  }
});

const path = require("path");
const vtkRules = require('vtk.js/Utilities/config/dependency.js').webpack.core.rules;

module.exports = () => ({
  overrideWebpackConfig: ({ webpackConfig, context: { env } }) => {
    webpackConfig.module.rules = webpackConfig.module.rules.concat(vtkRules)

    return webpackConfig;
  }
});

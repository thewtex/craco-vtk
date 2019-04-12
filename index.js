const path = require("path");
const vtkRules = require('vtk.js/Utilities/config/dependency.js').webpack.core.rules;
const cssRules = require('vtk.js/Utilities/config/dependency.js').webpack.css.rules;

module.exports = () => ({
  overrideWebpackConfig: ({ webpackConfig, context: { env } }) => {
    webpackConfig.module.rules = webpackConfig.module.rules.concat(vtkRules, cssRules)

    return webpackConfig;
  }
});

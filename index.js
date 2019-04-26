const {loaderByName, addBeforeLoader} = require('@craco/craco')

module.exports = () => ({
  overrideWebpackConfig: ({ webpackConfig, context: { env } }) => {

    const shaderLoader = {test: /\.glsl$/, use: ['shader-loader']}
    addBeforeLoader(webpackConfig, loaderByName('file-loader'), shaderLoader)

    const workerLoader = { test: /\.worker\.js/, use: [{ loader: 'worker-loader', options: { inline: true, fallback: false } }]}
    addBeforeLoader(webpackConfig, loaderByName('babel-loader'), workerLoader)

    return webpackConfig;
  }
});

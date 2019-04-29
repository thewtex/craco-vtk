# craco-vtk

Let's use [vtk.js](https://kitware.github.io/vtk-js/index.html) with [create-react-app](https://github.com/facebook/create-react-app) today!

This is a plugin for [@craco/craco](https://github.com/sharegate/craco).

![3D React Logo](https://i.imgur.com/KXRcoIW.gif)

<a href="https://glitch.com/edit/#!/remix/craco-vtk">
Try it!&nbsp;
  <img src="https://cdn.glitch.com/2bdfb3f8-05ef-4035-a06e-2043962a3a13%2Fremix%402x.png?1513093958726" alt="try it" height="20">
</a>

## Usage

### 1. Create a React project

```sh
npx create-react-app example
cd example
```

### 2. Install modules

In your create-react-app project, install modules:

```sh
npm install --save @craco/craco craco-vtk vtk.js shader-loader worker-loader css-loader style-loader postcss-loader
# or
yarn add @craco/craco craco-vtk vtk.js shader-loader worker-loader css-loader style-loader postcss-loader
```

### 3. Rewrite npm scripts

Rewrite npm scripts in `package.json` as following:

```js
{
  // ...
  "scripts": {
    "start": "craco start", // react-scripts -> craco
    "build": "craco build", // react-scripts -> craco
    "test": "craco test",   // react-scripts -> craco
    "eject": "react-scripts eject"
  },
  // ...
}
```

### 4. Create craco config file

Create `craco.config.js` in the proejct root:

```js
const CracoVtkPlugin = require("craco-vtk");

module.exports = {
  plugins: [
    {
      plugin: CracoVtkPlugin()
    }
  ]
};
```

### 5. Congratulations! 🎉

Setup is complete! Enjoy your VTK life.🏝

## Acknowledgements

This package was inspired by [craco-cesium](https://github.com/darwin-education/craco-cesium).

See also [craco-itk](https://www.npmjs.com/package/craco-itk).

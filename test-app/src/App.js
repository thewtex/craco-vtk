import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import vtkActor from 'vtk.js/Sources/Rendering/Core/Actor';
import vtkConeSource from 'vtk.js/Sources/Filters/Sources/ConeSource';
import vtkMapper from 'vtk.js/Sources/Rendering/Core/Mapper';
//import vtkOpenGLRenderWindow from 'vtk.js/Sources/Rendering/OpenGL/RenderWindow';
//import vtkRenderWindow from 'vtk.js/Sources/Rendering/Core/RenderWindow';
//import vtkRenderWindowInteractor from 'vtk.js/Sources/Rendering/Core/RenderWindowInteractor';
//import vtkRenderer from 'vtk.js/Sources/Rendering/Core/Renderer';
//import vtkInteractorStyleTrackballCamera from 'vtk.js/Sources/Interaction/Style/InteractorStyleTrackballCamera';
import vtkFullScreenRenderWindow from 'vtk.js/Sources/Rendering/Misc/FullScreenRenderWindow';

//// ----------------------------------------------------------------------------
//// Standard rendering code setup
//// ----------------------------------------------------------------------------

//const renderWindow = vtkRenderWindow.newInstance();
//const renderer = vtkRenderer.newInstance({ background: [0.2, 0.3, 0.4] });
//renderWindow.addRenderer(renderer);

//// ----------------------------------------------------------------------------
//// Use OpenGL as the backend to view the all this
//// ----------------------------------------------------------------------------

//const openglRenderWindow = vtkOpenGLRenderWindow.newInstance();
//renderWindow.addView(openglRenderWindow);

//// ----------------------------------------------------------------------------
//// Create a div section to put this into
//// ----------------------------------------------------------------------------

//const container = document.createElement('div');
//document.querySelector('body').appendChild(container);
//openglRenderWindow.setContainer(container);

//// ----------------------------------------------------------------------------
//// Capture size of the container and set it to the renderWindow
//// ----------------------------------------------------------------------------

//const { width, height } = container.getBoundingClientRect();
//openglRenderWindow.setSize(width, height);

//// ----------------------------------------------------------------------------
//// Setup an interactor to handle mouse events
//// ----------------------------------------------------------------------------

//const interactor = vtkRenderWindowInteractor.newInstance();
//interactor.setView(openglRenderWindow);
//interactor.initialize();
//interactor.bindEvents(container);

//// ----------------------------------------------------------------------------
//// Setup interactor style to use
//// ----------------------------------------------------------------------------

//interactor.setInteractorStyle(vtkInteractorStyleTrackballCamera.newInstance());

class App extends Component {
  constructor(props) {
    super(props);

    this.fullScreenRenderer = null;
    this.container = React.createRef();
    this.pipeline = null;
  }

  createPipeline(resolution = 20) {
    const coneSource = vtkConeSource.newInstance({ height: 1.0, resolution });

    const mapper = vtkMapper.newInstance();
    mapper.setInputConnection(coneSource.getOutputPort());

    const actor = vtkActor.newInstance();
    actor.setMapper(mapper);

    return { mapper, actor };
  }

  updatePipeline() {
    const renderer = this.fullScreenRenderer.getRenderer();
    const renderWindow = this.fullScreenRenderer.getRenderWindow();

    if (this.pipeline) {
      renderer.removeActor(this.pipeline.actor);
      this.pipeline = null;
    }

    const resolution = this.props.resolution || 20
    console.log(resolution)
    this.pipeline = this.createPipeline(resolution);
    renderer.addActor(this.pipeline.actor);
    renderer.resetCamera();
    renderWindow.render();

    window.pipeline = this.pipeline;

    renderWindow.render();
  }

  componentDidMount() {
    this.fullScreenRenderer = vtkFullScreenRenderWindow.newInstance({
      rootContainer: this.container.current,
      containerStyle: {},
    });
    this.updatePipeline();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.resolution !== this.props.resolution) {
      this.updatePipeline();
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div ref={this.container} />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

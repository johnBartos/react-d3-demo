import ReactDOM from 'react-dom';
import React from 'react';
import PrettyVisualization from './PrettyVisualization';
import UglyVisualization from './UglyVisualization';

ReactDOM.render(
  <div>
    I'm responsive 👌
    <PrettyVisualization />
    I'm not
    <UglyVisualization />
    Resize the window and see! <a href="https://github.com/johnBartos/react-d3-demo">source</a>
  </div>,
  document.getElementById('root')
);

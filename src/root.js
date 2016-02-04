import ReactDOM from 'react-dom';
import React from 'react';
import Visualization from './Visualization.jsx';
import dimensionable from './dimensionable';

const pretty = dimensionable(Visualization);

ReactDOM.render(
  <div>
    I'm responsive 👌
    {React.createElement(pretty)}
    I'm not
    <Visualization height={100} width={window.innerWidth}/>
    Resize the window and see! <a href="https://github.com/johnBartos/react-d3-demo">source</a>
  </div>,
  document.getElementById('root')
);

import ReactDOM from 'react-dom';
import React from 'react';
import Visualization from './Visualization.jsx';
import dimensionable from './dimensionable';

const pretty = dimensionable(Visualization);

ReactDOM.render(
  <div>
    Resize the window!
    {React.createElement(pretty)}
    <Visualization height={100} width={window.innerWidth}/>
  </div>,
  document.getElementById('root')
);

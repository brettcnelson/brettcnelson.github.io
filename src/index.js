import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import SmoothScroll from 'smooth-scroll';

new SmoothScroll('a.smooth',{
  speed:600
});

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();

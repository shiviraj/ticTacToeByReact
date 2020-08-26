import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TicTacToe from './components/TicTacToe';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <TicTacToe />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

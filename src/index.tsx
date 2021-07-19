import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routes/App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'

const container = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  container
);


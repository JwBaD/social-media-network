import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import state from './components/redux/state.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App state={state} />
);

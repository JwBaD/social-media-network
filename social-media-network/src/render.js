import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import {addPost, updateNewPostText} from './components/redux/state.js';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
    </BrowserRouter>
  );
}

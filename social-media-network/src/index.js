import './index.css';
import state from './components/redux/state.js';
import {rerenderEntireTree} from './render.js';

rerenderEntireTree(state);

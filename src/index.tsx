import { h, render } from 'preact';
import 'preact/devtools';
import App from './App.js';

import './tailwind.css'
import './index.css';
import store from './store'

const root = document.getElementById('root')

if (root) {
  render(<App store={store} />, root);
}

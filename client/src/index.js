import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import { Provider } from 'react-redux';
import { store } from './stores/store';

import App from './App';
import './index.css';

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

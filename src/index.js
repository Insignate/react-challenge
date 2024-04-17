import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './redux/store';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';

//root creator, running in strict mode, provider for value sharing between functions/arrow functions
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> 
      <App />
    </Provider>
  </React.StrictMode>
);


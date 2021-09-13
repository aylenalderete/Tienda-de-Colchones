import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store';
// import AuthProvider from './Auth';

ReactDOM.render(
  <Provider store={store}>
    {/* <AuthProvider> */}
      <App />
    {/* </AuthProvider> */}
  </Provider>
, document.getElementById('root'));
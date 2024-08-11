import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './style.css'

import ContextProvider from './Context/Context';
import store from './redux/store';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ContextProvider >
    <App />
    </ContextProvider>
    </Provider>
    
    
  </React.StrictMode>
);



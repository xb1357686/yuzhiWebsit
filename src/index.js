// ie11 polyfills must be at top of index.js
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
// =================================================
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

// configs

import App from './App';
import './App.css';
// const DEV_BASE_URL = 'dev.platform.michaels.com';
if (process.env.NODE_ENV !== 'development') {
  window.ENV = {
    URLPATHNAME: '/yuzhiWebsit/'
  }
} else {
  window.ENV = {
    URLPATHNAME: '/'
  }
}




ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

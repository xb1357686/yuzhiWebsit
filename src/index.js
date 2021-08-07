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
// if (process.env.NODE_ENV === 'development') {
//   // if you update anything here, you must also update
//   // the API_ENV variable in "sed-entry.sh"
//   window.ENV = {
//     SEARCH_API: `https://sch.${DEV_BASE_URL}/api`,
//     CONTENT_API: `https://cms.${DEV_BASE_URL}/api`,
//     COMMERCE_API: `https://cpm.${DEV_BASE_URL}/api`,
//     USER_API: `https://usr.${DEV_BASE_URL}/api`,
//     DEVELOPER_API: `https://mda.${DEV_BASE_URL}/api`,
//     FINANCIALS_API: `https://fin.${DEV_BASE_URL}/api`,
//     ARR_API: `https://arr.${DEV_BASE_URL}/api`,
//     FGM_API: `https://fgm.${DEV_BASE_URL}/api`,
//     RSC_API: `https://rsc.${DEV_BASE_URL}/api`,
//     MPE_API: `https://mpe.${DEV_BASE_URL}/api`,
//     MCU_API: `https://mcu.${DEV_BASE_URL}/api`,
//     ORDERS_API: `https://moh.${DEV_BASE_URL}/api`,
//     GOOGLE_MAPS_API_KEY: 'AIzaSyBGeVTlzDtKoIL29glMPqAQllIYqnixsDE',
//     RSC_WEB: `https://rsc.${DEV_BASE_URL}`,
//     B2B_WEB: `https://b2b.${DEV_BASE_URL}`,
//     IMG_WEB: `https://imgproxy.${DEV_BASE_URL}`,
//     GOOGLE_BOT: `https://rsc.${DEV_BASE_URL}/chat-api`,
//     MAP_API: `https://map.${DEV_BASE_URL}/api`,
//     IFR_API: `https://ifr.${DEV_BASE_URL}/api`,
//   };
// }

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

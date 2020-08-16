import React from 'react';
import { render } from 'react-dom';

import './i18n';
import App from './components/App';

if ('serviceWorker' in navigator) {
  if (process.env.NODE_ENV === 'production')
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('sw.js')
        .then(() => {
          console.log('ServiceWorker is registered.');
        })
        .catch(() => {
          console.log('ServiceWorker registration error.');
        });
    });
} else {
  console.log("Your browser doesn't suppert ServiceWorker.", navigator);
}

render(
  // <React.StrictMode>
  // {/* </React.StrictMode> */},
  <App />,
  document.getElementById('root'),
);

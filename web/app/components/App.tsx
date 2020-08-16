import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import Providers from '../hooks';
import Routes from '../routes';
import Toast from './ToastContainer';

const App: React.FC = () => (
  <Providers>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <CssBaseline />
    <Toast />
  </Providers>
);

export default App;

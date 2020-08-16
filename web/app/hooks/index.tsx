import React from 'react';
import {
  MuiThemeProvider,
  createMuiTheme,
  fade,
  PaletteOptions,
} from '@material-ui/core/styles';

import { AuthProvider } from './Auth';
import { ToastProvider } from './Toast';

// primary: {
//   light: '#ffa230',
//   main: '#f08e15',
//   dark: '#a35d07',
// },
// secondary: {
//   light: '#30baff',
//   main: '#16a9f0',
//   dark: '#076fa3',
// },

type themeChoises = 'dark' | 'light';

const defaultTheme: themeChoises = 'dark';
const theme: {
  [t: themeChoises]: {
    [k: string]: unknown;
    type: themeChoises;
  };
} = {
  dark: {
    type: 'dark',
    primary: '#e74951',
    secondary: '#a72c77',
    error: '#ff6347',
    background: {
      default: '#2a2a2a',
      paper: '#1a1a1a',
    },
  },
};

const muiTheme = createMuiTheme({
  palette: {
    type: theme[defaultTheme].type,
    primary: { main: theme[defaultTheme].primary },
    secondary: { main: theme[defaultTheme].secondary },
    error: { main: theme[defaultTheme].error },
    background: {
      default: theme[defaultTheme].background.default,
      paper: theme[defaultTheme].background.paper,
    },
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundImage: 'linear-gradient( 350deg, #e74951, #a72c77)',
      },
    },
    MuiToolbar: {
      gutters: {
        '@media (min-width:600px)': {
          paddingLeft: '16px',
          paddingRight: '16px',
        },
      },
    },
    MuiListItem: {
      root: {
        '&$selected, &$selected:hover': {
          color: 'white',
          backgroundColor: '#e74951',
          '& svg': {
            color: 'white',
          },
        },
      },
      button: {
        color: '#e74951',
        '& svg': {
          color: '#e74951',
        },
        '&:hover': {
          backgroundColor: fade('#a72c77', 0.38),
        },
      },
    },
  },
});

// const muiTheme = createMuiTheme({
//   palette: {
//     type: 'light',
//     primary: {
//       main: '#ff7538', // Coral #ff7f50
//       contrastText: '#2a2a2a',
//     },
//     secondary: {
//       main: '#007ba7', // '#006d6f',
//       contrastText: '#fafafa',
//     },
//     background: {
//       default: '#f6f6f6',
//       paper: '#fafafa',
//     },
//   },
// });

const AppProvider: React.FC = ({
  children,
}: React.PropsWithChildren<unknown>) => (
  <MuiThemeProvider theme={muiTheme}>
    <AuthProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
  </MuiThemeProvider>
);

export default AppProvider;

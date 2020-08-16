import { makeStyles, Theme } from '@material-ui/core/styles';

import { ToastMessage } from './index';

const colors = {
  info: {
    light: '#004878',
    dark: '#89cff0',
  },
  warn: {
    light: '#cc7722',
    dark: '#f0e68c',
  },
  error: {
    light: '#ff2800',
    dark: '#fa8082',
  },
  success: {
    light: '#309030',
    dark: '#9dc183',
  },
};

export default makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    padding: theme.spacing(1, 2),
    minWidth: 200,
    maxWidth: 400,
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,

    color: (props: ToastMessage) => colors[props.type][theme.palette.type],
    borderLeft: (props: ToastMessage) =>
      `3px solid ${colors[props.type][theme.palette.type]}`,

    '& + div': {
      marginTop: theme.spacing(1),
    },
    '& strong': {
      ...theme.typography.body2,
      fontWeight: '500',
    },
    '& p': {
      ...theme.typography.caption,
      margin: theme.spacing(0, 1, 0, 2),
    },
    '& > button': {
      color: 'inherit',
      border: 0,
      marginLeft: 'auto',
      backgroundColor: 'transparent',
    },
  },
}));

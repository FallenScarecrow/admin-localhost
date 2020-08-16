import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
  root: {
    top: theme.spacing(1),
    right: theme.spacing(1),
    position: 'absolute',
  },
  toast: {
    display: 'flex',
    padding: theme.spacing(1, 2),
    minWidth: 200,
    maxWidth: 400,
    alignItems: 'center',
    borderLeft: '3px solid #89cff0',
    backgroundColor: theme.palette.background.paper,
    color: '#89cff0',
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
  warn: {
    borderLeftColor: '#f0e68c',
    color: '#f0e68c',
  },
  error: {
    borderLeftColor: '#fa8082',
    color: '#fa8082',
  },
  success: {
    borderLeftColor: '#9dc183',
    color: '#9dc183',
  },
}));

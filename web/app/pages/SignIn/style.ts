import { makeStyles, Theme } from '@material-ui/core';

import logoBackground from '../../assets/sign-in-background.png';

export default makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
  },
  image: {
    flex: 1,
    background: `url(${logoBackground}) no-repeat center`,
    backgroundSize: 'cover',
  },
  paper: {
    width: '100%',
    maxWidth: theme.breakpoints.values.sm,
    padding: theme.spacing(3, 2, 1),
    '& h2': {
      fontWeight: theme.typography.fontWeightLight,
      background: '-webkit-linear-gradient(#e74951, #a72c77)',
      fontFeatureSettings: "'cpsp' on, 'liga' off",
      '-webkitTextFillColor': 'transparent',
      '-webkitBackgroundClip': 'text',
    },
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    margin: 'auto 0',
    '& > div > * + div': {
      marginTop: theme.spacing(2),
    },
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  copyright: {
    marginTop: 'auto',
  },
}));

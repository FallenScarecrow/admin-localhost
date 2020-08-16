import React from 'react';
import { useTranslation } from 'react-i18next';

import { Grid, Typography } from '@material-ui/core';

import LogoImg from '../../assets/logo.svg';

import useStyle from './style';
import Form from './Form';

const SignIn: React.FC = () => {
  const [t] = useTranslation();
  const classes = useStyle();

  return (
    <Grid container alignItems="stretch" className={classes.root}>
      <Grid
        container
        item
        alignItems="center"
        justify="flex-start"
        direction="column"
        className={classes.paper}
      >
        <Grid
          container
          item
          alignItems="center"
          justify="center"
          direction="column"
        >
          <LogoImg />
          <Typography variant="h4" component="h2">
            Localhost
          </Typography>
        </Grid>
        <Form />
        <Grid item className={classes.copyright}>
          <Typography variant="subtitle2" component="h3">
            Desenvolvido por Guilherme Menecucci
          </Typography>
        </Grid>
      </Grid>
      <Grid item className={classes.image} />
    </Grid>
  );
};

export default SignIn;

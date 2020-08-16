import React from 'react';
import * as H from 'history';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      height: '100vh',
      maxHeight: '100vh',
    },
    content: {
      width: '100%',
      height: '100%',
    },
    main: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
  }),
);

export interface DefaultLayoutProps {
  children: JSX.Element;
  location: H.Location;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = (
  props: DefaultLayoutProps,
) => {
  const classes = useStyles();
  const { children } = props;

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.content}>
        {/* <Container
          component="main"
          maxWidth={false}
          className={classes.main}
          disableGutters
        > */}
        {children}
        {/* </Container> */}
      </Grid>
    </Grid>
  );
};

export default DefaultLayout;

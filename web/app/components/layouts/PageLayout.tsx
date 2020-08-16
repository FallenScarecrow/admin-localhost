import React from 'react';
import * as H from 'history';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { createStyles, makeStyles } from '@material-ui/core/styles';

import { Navi } from '../Navi';

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

export interface PageLayoutProps {
  children: JSX.Element;
  location: H.Location;
}

const PageLayout: React.FC<PageLayoutProps> = (props: PageLayoutProps) => {
  const classes = useStyles();
  const { children } = props;

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.content}>
        <Navi title="" />
        <Container
          component="main"
          maxWidth={false}
          className={classes.main}
          disableGutters
        >
          {children}
        </Container>
      </Grid>
    </Grid>
  );
};

export default PageLayout;

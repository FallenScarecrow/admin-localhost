import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  AppBar,
  ListSubheader,
  List,
  ListItem,
  Drawer,
  Typography,
  IconButton,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      ...theme.mixins.toolbar,
      padding: theme.spacing(1),
    },
    list: {
      width: 200,
      height: '100%',
      backgroundColor: 'rgb(44,44,44)',
      color: 'white',
    },
  }),
);

export const Navi = ({ title }) => {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <AppBar position="sticky">
        <div className={classes.toolbar}>
          <IconButton onClick={() => setOpen(!isOpen)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h4">{title}</Typography>
        </div>
      </AppBar>
      <Drawer open={isOpen} onClose={() => setOpen(false)}>
        <List className={classes.list}>
          <ListSubheader style={{ color: 'white' }}>Menu</ListSubheader>
          <ListItem component={Link} to="/" button>
            Home
          </ListItem>
          <ListItem component={Link} to="/login" button>
            Login
          </ListItem>
          <ListItem component={Link} to="/dashboard" button>
            Dashboard
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

Navi.propTypes = {
  title: PropTypes.string.isRequired,
};

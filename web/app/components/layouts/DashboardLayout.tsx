import React from 'react';
import { Link } from 'react-router-dom';

import clsx from 'clsx';
import * as H from 'history';

import { useTranslation } from 'react-i18next';

import {
  List,
  Divider,
  Tooltip,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Drawer,
  IconButton,
  Typography,
  createStyles,
  makeStyles,
  Theme,
  fade,
} from '@material-ui/core';

import {
  MenuOutlined as MenuIcon,
  CloseOutlined as CloseIcon,
  HomeOutlined as HomeIcon,
  EventNote as EventNoteIcon,
  AccountCircleOutlined as AccountCircleIcon,
  GroupOutlined as GroupIcon,
  PersonOutlined as PersonIcon,
  ShoppingCartOutlined as ShoppingCartIcon,
} from '@material-ui/icons';

const drawerWidth = 250;

const menus = [
  {
    path: '/dashboard',
    icon: <HomeIcon />,
    title: 'menu.home',
  },
  {
    path: '/dashboard/users',
    icon: <PersonIcon />,
    title: 'menu.users',
  },
  {
    path: '/dashboard/groups',
    icon: <GroupIcon />,
    title: 'menu.groups',
  },
  {
    title: 'divider1',
    divider: true,
  },
  {
    path: '/dashboard/products',
    icon: <ShoppingCartIcon />,
    title: 'menu.products',
  },
  {
    path: '/dashboard/clients',
    icon: <AccountCircleIcon />,
    title: 'menu.clients',
  },
  {
    path: '/dashboard/schedule',
    icon: <EventNoteIcon />,
    title: 'menu.schedule',
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: '100vh',
      display: 'flex',
      maxHeight: '100vh',
    },
    mainToolbar: {
      padding: theme.spacing(0, 2),
    },
    toolbar: theme.mixins.toolbar,
    listItem: {
      ...theme.mixins.gutters,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    listItemActive: {
      color: theme.palette.primary.main,
      backgroundColor: fade(theme.palette.primary.main, 0.25),
      '& svg': {
        color: theme.palette.primary.main,
      },
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(1) + 32,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(1) + 48,
      },
    },
    title: {
      flex: 1,
      marginLeft: theme.spacing(1),
    },
    main: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

export interface DashboardLayoutProps {
  children: JSX.Element;
  history: H.History;
  location: H.Location;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = (
  props: DashboardLayoutProps,
) => {
  const classes = useStyles();
  console.log('Layout Render');

  const { t } = useTranslation();

  // const store = useStore();
  // const { user } = store.getState().auth;

  const { children, location, history } = props;
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleToggleDrawerOpen = (): void => setOpenDrawer(!openDrawer);

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar className={classes.mainToolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleToggleDrawerOpen}
            edge="start"
          >
            {openDrawer ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => history.push('/login')}
            edge="start"
          >
            <CloseIcon />
          </IconButton>
          <Typography className={classes.title} variant="h4">
            User.Name
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: openDrawer,
          [classes.drawerClose]: !openDrawer,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: openDrawer,
            [classes.drawerClose]: !openDrawer,
          }),
        }}
      >
        <List>
          <div className={classes.toolbar} />
          {menus.map((menu) => {
            const title = t(menu.title);
            return !menu.divider ? (
              <Tooltip
                key={title}
                title={!openDrawer ? title : ''}
                arrow
                placement="right"
              >
                <ListItem
                  to={menu.path}
                  button
                  component={Link}
                  className={clsx(classes.listItem, {
                    [classes.listItemActive]: location.pathname === menu.path,
                  })}
                >
                  <ListItemIcon>{menu.icon}</ListItemIcon>
                  <ListItemText primary={title} />
                </ListItem>
              </Tooltip>
            ) : (
              <Divider key={title} />
            );
          })}
        </List>
      </Drawer>
      <main className={classes.main}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;

import React, { useCallback } from 'react';
import clsx from 'clsx';
import {
  AppBar,
  Theme,
  fade,
  Toolbar,
  IconButton,
  InputBase,
  makeStyles,
  Menu,
  MenuItem,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Divider,
  Tooltip,
  ListItemText,
} from '@material-ui/core';

import {
  MenuOutlined as MenuIcon,
  CloseOutlined as CloseIcon,
  MoreOutlined as MoreIcon,
  SearchOutlined as SearchIcon,
  MailOutlined as MailIcon,
  NotificationsOutlined as NotificationsIcon,
  AccountCircleOutlined as AccountCircleIcon,
  HomeOutlined as HomeIcon,
  PersonOutlined as PersonIcon,
  GroupOutlined as GroupIcon,
  ShoppingCartOutlined as ShoppingCartIcon,
  EventNoteOutlined as EventNoteIcon,
} from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const drawerWidth = 250;

const menus = [
  {
    path: '/dashboard',
    icon: <HomeIcon />,
    title: 'menu:home',
  },
  {
    path: '/dashboard/users',
    icon: <PersonIcon />,
    title: 'menu:users',
  },
  {
    path: '/dashboard/groups',
    icon: <GroupIcon />,
    title: 'menu:groups',
  },
  {
    title: 'divider1',
    divider: true,
  },
  {
    path: '/dashboard/products',
    icon: <ShoppingCartIcon />,
    title: 'menu:products',
  },
  {
    path: '/dashboard/clients',
    icon: <AccountCircleIcon />,
    title: 'menu:clients',
  },
  {
    path: '/dashboard/schedule',
    icon: <EventNoteIcon />,
    title: 'menu:schedule',
  },
];

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    maxHeight: '100vh',
  },
  grow: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    flex: 1,
    width: '100%',
    margin: theme.spacing(0, 3, 0, 'auto'),
    maxWidth: theme.breakpoints.width('sm'),
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
      margin: theme.spacing(0, 'auto'),
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
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
}));

const Home: React.FC = () => {
  const classes = useStyles();
  const location = useLocation();

  const [t] = useTranslation();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleToggleDrawerOpen = (): void => setOpenDrawer(!openDrawer);

  const handleProfileMenuOpen = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleMobileMenuClose = useCallback(() => {
    setMobileMoreAnchorEl(null);
  }, []);

  const handleMenuClose = useCallback(() => {
    setAnchorEl(null);
    handleMobileMenuClose();
  }, [handleMobileMenuClose]);

  const handleMobileMenuOpen = useCallback((event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  }, []);

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircleIcon />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleToggleDrawerOpen}
            edge="start"
          >
            {openDrawer ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          {/* <Typography className={classes.title} variant="h6" noWrap>
            Material-UI
          </Typography> */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircleIcon />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}

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
          {menus.map((menu, key) => {
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
                  selected={key === 0}
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
    </div>
  );
};

export default Home;

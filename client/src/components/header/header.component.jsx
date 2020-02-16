import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AccountCircle } from '@material-ui/icons';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  Button,
  MenuItem,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
  },
}));

const Header = ({ isLoggedIn }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    handleClose();

    // TODO: Logout logic
  };

  const renderProfileMenu = (
    <div>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} component={Link} to="/profile">
          Profile
        </MenuItem>
        <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
      </Menu>
    </div>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.title}>
            <Button color="inherit" component={Link} to="/">
              <Typography variant="h6" noWrap component="h1">
                ZTM Challenge
              </Typography>
            </Button>
          </div>
          {isLoggedIn ? (
            renderProfileMenu
          ) : (
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Header;

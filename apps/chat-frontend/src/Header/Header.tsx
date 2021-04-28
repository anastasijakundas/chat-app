import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { ROUTES } from '../Navigation/constants';
import LinkTab from '../common/components/LinkTab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import styles from './Header.module.scss';

interface HeaderProps {
  tabValue: string;
  handleClose: () => void;
  anchorEl: Element | ((element: Element) => Element);
  handleLogoutClick: () => void;
  handleMenu: (event: any) => void;
  open: boolean;
  handleTabChange: (event, value) => void;
  handleLogoClick: () => void;
}

const Header: React.FC<HeaderProps> = ({
  open,
  handleMenu,
  handleLogoutClick,
  anchorEl,
  handleClose,
  tabValue,
  handleTabChange,
  handleLogoClick,
}) => {
  return (
    <AppBar position="static" className={styles.header}>
      <Toolbar>
        <Typography variant="h6" className={styles.title} onClick={handleLogoClick}>
          Chat
        </Typography>
        <TabContext value={tabValue}>
          <TabList className={styles.tabs} onChange={handleTabChange}>
            <LinkTab label="Chats" to={ROUTES.chats} value="chats" />
            <LinkTab label="Rooms" to={ROUTES.rooms} value="rooms" />
          </TabList>
        </TabContext>
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
          <MenuItem onClick={handleLogoutClick}>Log out</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

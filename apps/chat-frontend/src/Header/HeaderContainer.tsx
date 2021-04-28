import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useGoogleLogout } from 'react-google-login';

import Header from './Header';
import { ROUTES } from '../Navigation/constants';

enum TabValuesEnum {
  chats = 'chats',
  rooms = 'rooms',
}

const HeaderContainer = () => {
  const history = useHistory();

  const [anchorEl, setAnchorEl] = useState(null);
  const [openedTab, setOpenedTab] = useState(TabValuesEnum.chats);

  const handleTabChange = useCallback((event, value) => {
    setOpenedTab(value);
  }, []);

  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onLogoutSuccess = () => {
    localStorage.removeItem('user');
    handleClose();
    history.push(ROUTES.login);
  };

  const { signOut, loaded } = useGoogleLogout({
    onLogoutSuccess,
    clientId:
      '722721211283-kjpol1a4t26uhb13kpsmf1tg8kug719n.apps.googleusercontent.com',
  });

  const handleLogoClick = useCallback(() => {
    history.push(ROUTES.chats);
  }, [history]);

  return (
    <Header
      open={open}
      handleMenu={handleMenu}
      handleLogoutClick={signOut}
      handleClose={handleClose}
      anchorEl={anchorEl}
      tabValue={openedTab}
      handleTabChange={handleTabChange}
      handleLogoClick={handleLogoClick}
    />
  );
};

export default HeaderContainer;

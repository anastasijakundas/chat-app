import React, { useState, useMemo } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useGoogleLogout } from 'react-google-login';

import Header from './Header';
import { ROUTES } from '../Navigation/constants';

enum TabValuesEnum {
  chats = 'chats',
  rooms = 'rooms',
}

const HeaderContainer = () => {
  const location = useLocation();
  const history = useHistory();

  const tabValue = useMemo(() => {
    if (location.pathname === `/${TabValuesEnum.rooms}`) {
      return TabValuesEnum.rooms;
    } else if (location.pathname === `/${TabValuesEnum.chats}`) {
      return TabValuesEnum.chats;
    }
  }, [location.pathname]);

  const [anchorEl, setAnchorEl] = useState(null);

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

  const isLoginPage = location.pathname === '/login';

  return (
    <Header
      open={open}
      handleMenu={handleMenu}
      handleLogoutClick={signOut}
      handleClose={handleClose}
      anchorEl={anchorEl}
      tabValue={tabValue}
      isLoginPage={isLoginPage}
    />
  );
};

export default HeaderContainer;

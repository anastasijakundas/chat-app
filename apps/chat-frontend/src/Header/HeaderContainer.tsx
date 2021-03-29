import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import Header from './Header';
import { ROUTES } from '../Navigation/constants';

const HeaderContainer = () => {
  const history = useHistory();
  console.log(history);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogoutClick = useCallback(() => {
    history.push(ROUTES.login);
    handleClose();
  }, [history]);

  return (
    <Header
      open={open}
      handleMenu={handleMenu}
      handleLogoutClick={handleLogoutClick}
      handleClose={handleClose}
      anchorEl={anchorEl}
    />
  );
};

export default HeaderContainer;

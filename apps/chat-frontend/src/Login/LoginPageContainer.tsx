import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import LoginPage from './LoginPage';
import { createOrUpdateUser } from './thunks';
import { ROUTES } from '../Navigation/constants';

function LoginPageContainer() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSuccess = ({ profileObj }) => {
    const userData = {
      googleId: profileObj.googleId,
      email: profileObj.email,
      name: profileObj.name,
    };

    dispatch(createOrUpdateUser(userData));
    history.push(ROUTES.chats);
  };

  const handleFailure = (res) => {
    console.log(res, 'failure');
  };

  return (
    <LoginPage handleSuccess={handleSuccess} handleFailure={handleFailure} />
  );
}

export default LoginPageContainer;

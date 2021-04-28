import React from 'react';
import GoogleLogin from 'react-google-login';

import styles from './Login.module.scss';

function LoginPage({ handleSuccess, handleFailure }) {
  return (
    <div className={styles.loginPage}>
      <GoogleLogin
        clientId={
          '722721211283-kjpol1a4t26uhb13kpsmf1tg8kug719n.apps.googleusercontent.com'
        }
        buttonText="Login"
        onSuccess={handleSuccess}
        onFailure={handleFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default LoginPage;

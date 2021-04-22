import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { BrowserRouter as Router } from 'react-router-dom';

import styles from './app.module.scss';
import Layout from '../Layout';
import Routes from '../Navigation';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;

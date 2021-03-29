import React from 'react';

import styles from './app.module.scss';
import Layout from '../Layout';
import Routes from '../Navigation';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';

export function App() {
  return (
    <Layout>
      <Routes />
    </Layout>
  );
}

export default App;

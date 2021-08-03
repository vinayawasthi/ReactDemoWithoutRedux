import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../css/layout.css';


const Layout = ({ children }) => {
  return (
    <div className="container">
      <Link to="/">
        <h1 className={styles.h1}>
          webpack-for-react
        </h1>
      </Link>
      <Link to="/not-found">
        <h1 className={styles.h1}>
          not-found
        </h1>
      </Link>
      {children}
      <p className={styles.pullRight}>
        Made with love by Esau Silva
      </p>
    </div>
  );
};

export default Layout;
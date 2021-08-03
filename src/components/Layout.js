import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';

// import { pullRight, h1 } from './layout.css';
import styles from './layout.css';

const Layout = ({ children }) => {
  return (
    <Container>
      <Link to="/">
        <Header as="h1" className={styles.h1}>
          webpack-for-react
        </Header>
      </Link>
      <Link to="/not-found">
        <Header as="h1" className={styles.h1}>
          not-found
        </Header>
      </Link>
      {children}
      <Divider />
      <p className={styles.pullRight}>
        Made with <Icon name="heart" color="red" /> by Esau Silva
      </p>
    </Container>
  );
};

export default Layout;
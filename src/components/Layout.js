import React from 'react';
import { Link } from 'react-router-dom';
import '../css/layout.css';

const Layout = ({ children }) => {
  return (
    <div className="container">
      <section id="header">
        <Link to="/">
          <h1 className="h1">webpack-for-react</h1>
        </Link>
        <Link to="/dynamic">
          <h1 className="h1">dynamic</h1>
        </Link>
        <Link to="/not-found">
          <h1 className="h1">not-found</h1>
        </Link>
      </section>
      {children}
      <section id="footer">
          <p className="text-center">Made with <i className="bi bi-heart-fill"></i> by Vinay Avasthi</p>
      </section>
    </div>
  );
};

export default Layout;
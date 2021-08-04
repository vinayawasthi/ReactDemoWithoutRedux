import React from 'react';
import { Link } from 'react-router-dom';
import '../css/layout.css';

const Layout = ({ children }) => {
  return ( 
      <React.Fragment>
      <section id="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <Link to="/" className="nav-link" title="webpack-for-react">
                  webpack-for-react
                </Link>
                <Link to="/dynamic" className="nav-link" title="dynamic">
                  dynamic
                </Link>
                <Link to="/not-found" className="nav-link" title="not-found">
                  not-found
                </Link>
              </ul>
            </div>
          </div>
        </nav>

      </section>
      <div className="container" style={{minHeight: 720+"px"}}>
      {children}
      </div>
      <section id="footer">
        <p className="text-center">Made with <i className="bi bi-heart-fill"></i> by Vinay Avasthi</p>
      </section>
      </React.Fragment>   
  );
};

export default Layout;
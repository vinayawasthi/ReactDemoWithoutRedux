import React from 'react';
import Layout from './Layout';
import UserService from '../services/userService';


const DynamicPage = () => {
  return (
    <Layout>
      <h2>Dynamic Page</h2>
      <p>This page was loaded asynchronously!!!</p>
      <div className="row">
        <div className="col">
          Column
          <button className="btn btn-info">Click Me</button>
        </div>
        <div className="col">
          Column
        </div>
        <div className="col">
          Column
        </div>
      </div>
    </Layout>
  );
};

export default DynamicPage;
import React from 'react';
import Layout from './Layout';
import UserService from '../services/userService';


const DynamicPage = () => {
  return (
    <Layout>
      <h2>Dynamic Page</h2>
      <p>This page was loaded asynchronously!!!</p>
    </Layout>
  );
};

export default DynamicPage;
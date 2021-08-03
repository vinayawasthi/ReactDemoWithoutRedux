import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';

import UserService from '../services/userService';


const Home = () => {
  return (
    <Layout>
      <p>Hello World of React and Webpack!</p>
      <p className="text-center">
        <Link to="/dynamic">Navigate to Dynamic Page</Link>
      </p>
    </Layout>
  );
};

export default Home;
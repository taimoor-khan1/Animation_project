import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header';

const AppLayout = () => {
  return (
    <div id="outer-container">
      <Header />
      <div id="page-wrap">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;

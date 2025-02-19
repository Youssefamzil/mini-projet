import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from './NavigationBar';

const NavigationRoutes = ({ admin }) => {
  return (
    <div className="navigation-container">
      <NavigationBar admin={admin} />
      <div className="navigation-content">
        <Outlet />
      </div>
    </div>
  );
};

export default NavigationRoutes;

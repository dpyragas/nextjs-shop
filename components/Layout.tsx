import React from 'react';
import Navigation from './Navigation';

const Layout = ({ children }: any) => {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <Navigation />
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};
export default Layout;

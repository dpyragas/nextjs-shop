import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({ children }: any) => {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;

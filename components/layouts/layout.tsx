import React from 'react';
import MainNav from './main-nav';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <React.Fragment>
      <MainNav />
      {children}
    </React.Fragment>
  );
}

export default Layout;

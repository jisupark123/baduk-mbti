import React from 'react';
import MainNav from './main-nav';
import styles from './layout.module.scss';
import Script from 'next/script';

interface LayoutProps {
  title?: string;
  hasNav?: boolean;
  seoTitle?: string;
  children: React.ReactNode;
}

function Layout({ title, hasNav, seoTitle, children }: LayoutProps) {
  return (
    <React.Fragment>
      <MainNav />
      {children}
    </React.Fragment>
  );
}

export default Layout;

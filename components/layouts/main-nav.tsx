import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import styles from './main-nav.module.scss';

interface MainNavProps {}

const MainNav: React.FC<MainNavProps> = ({}) => {
  const router = useRouter();

  function onBtnClick(url: string) {
    router.push(url);
  }

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <Link href='/'>
            <a>나의 바둑 mbti</a>
          </Link>
        </div>

        <div className={styles.btns}>
          <Link href='/question'>
            <a>Test</a>
          </Link>
          <Link href='/all'>
            <a>All</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainNav;

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
            <a>채움 MBTI</a>
          </Link>
        </div>

        <div className={styles.btns}>
          <Link href='/question'>
            <a>문제</a>
          </Link>
          <Link href='/all'>
            <a>모든 유형</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainNav;

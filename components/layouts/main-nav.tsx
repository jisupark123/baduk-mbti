import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import useUser from '../../lib/client/useUser';
import New from '../newPost/new';
import styles from './main-nav.module.scss';
import ModeChangeBtn from '../btn/mode-change-btn';

interface MainNavProps {
  onlyLogo?: boolean;
}

const MainNav: React.FC<MainNavProps> = ({ onlyLogo = false }) => {
  const { user } = useUser();
  const router = useRouter();

  const [showNewPost, setShowNewPost] = useState(false);

  function onBtnClick(url: string) {
    router.push(url);
  }
  function logoutHandler() {}
  function clickNewPostHandler() {
    setShowNewPost(true);
  }
  function closeNewPost() {
    setShowNewPost(false);
  }

  return (
    <nav className={styles.nav}>
      {showNewPost && <New closeNewPost={closeNewPost} />}
      <div className={styles.innerNav}>
        <div className={styles.logo}>
          <Link href='/'>
            <a>큰거온다</a>
          </Link>
        </div>
        {!onlyLogo && (
          <div className={styles.btns}>
            <ModeChangeBtn />
            {user && (
              <button
                className={styles['post-upload-btn']}
                onClick={clickNewPostHandler}
              >
                New
              </button>
            )}
            {!user && (
              <button onClick={() => onBtnClick('/login')}>로그인</button>
            )}
            {user && (
              <button onClick={() => onBtnClick('/api/users/logout')}>
                로그아웃
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default MainNav;

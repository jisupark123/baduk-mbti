import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { FormEvent, useRef, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import InvitationCard from '../components/ui/invitation-card';
import Overlay from '../components/ui/overlay';
import styles from './index.module.scss';
import {
  Level,
  LOCALSTORAGE_KEY_LEVEL,
  LOCALSTORAGE_KEY_NAME,
  LOCALSTORAGE_KEY_THEME,
  Theme,
} from './_app';

const LevelArray: Level[] = ['초급', '중급', '고급'];

const btnVariants: Variants = {
  hover: {
    y: -4,
    transition: { ease: 'easeOut', duration: 0.4 },
  },
};

const Home: NextPage = () => {
  const [accepted, setAccepted] = useState(false); // 게임 초대 수락?
  const [gameStarted, setGameStarted] = useState(false);
  const [name, setName] = useState('');
  const [level, setLevel] = useState<Level | undefined>(undefined);
  const router = useRouter();
  function handleOverlayClose() {}
  function gameStart() {
    if (name.length === 0) {
      alert('이름을 입력해주세요');
      return;
    }
    if (!level) {
      alert('레벨을 선택해주세요');
      return;
    }
    localStorage.setItem(LOCALSTORAGE_KEY_NAME, name);
    localStorage.setItem(LOCALSTORAGE_KEY_LEVEL, level);
    setGameStarted(true);
  }
  function handleNameChange(event: FormEvent<HTMLInputElement>) {
    setName(event.currentTarget.value);
    console.log(event.currentTarget.value);
  }
  function setColor(color: Theme) {
    localStorage.setItem(LOCALSTORAGE_KEY_THEME, color);
  }

  function handleChooseColor(color: Theme) {
    setColor(color);
    router.push('/question');
  }

  return (
    <div className={styles.container}>
      <div className={styles.choose}>
        <div
          className={styles.red}
          onClick={() => handleChooseColor('red')}
        ></div>
        <div
          className={styles.blue}
          onClick={() => handleChooseColor('blue')}
        ></div>
      </div>

      {!gameStarted && (
        <Overlay onlyCloseWithBtn={true} onCloseHandler={handleOverlayClose}>
          {!accepted ? (
            <InvitationCard
              ment='게임에 참여하시겠습니까?'
              onClickHandler={() => setAccepted(true)}
            />
          ) : (
            <div className={styles['get-name-container']}>
              <div className={styles.wrapper}>
                <label className={styles.ment} htmlFor='name'>
                  당신의 이름은?
                </label>
                <input
                  id='name'
                  type='text'
                  onChange={handleNameChange}
                  className={name.length > 0 ? styles['got-name'] : ''}
                  autoComplete={'off'}
                  spellCheck={'false'}
                />
                <div className={styles.ment}>레벨을 선택해주세요</div>
                <div className={styles.btns}>
                  {LevelArray.map((text) => (
                    <motion.button
                      whileHover={'hover'}
                      variants={btnVariants}
                      key={text}
                      onClick={() => setLevel(text)}
                      className={level === text ? styles.clicked : ''}
                    >
                      {text}
                    </motion.button>
                  ))}
                </div>
              </div>
              <div className={styles['start-btn']}>
                <button onClick={gameStart}>시작</button>
              </div>
            </div>
          )}
        </Overlay>
      )}
    </div>
  );
};

export default Home;

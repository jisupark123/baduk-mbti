import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import InvitationCard from '../components/ui/invitation-card';
import Overlay from '../components/ui/overlay';
import styles from './index.module.scss';
import { LOCALSTORAGE_KEY_NAME, LOCALSTORAGE_KEY_Theme, Theme } from './_app';

const Home: NextPage = () => {
  const [accepted, setAccepted] = useState(false); // 게임 초대 수락?
  const [gameStarted, setGameStarted] = useState(false);
  const router = useRouter();
  const nameRef = useRef<HTMLInputElement>(null);
  function handleOverlayClose() {}
  function gameStart() {
    setGameStarted(true);
    const name = nameRef.current!.value;
    if (name.length === 0) {
      alert('이름을 입력해주세요');
      return;
    }
    localStorage.setItem(LOCALSTORAGE_KEY_NAME, name);
  }
  function setColor(color: Theme) {
    localStorage.setItem(LOCALSTORAGE_KEY_Theme, color);
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
              <div className={styles.inputs}>
                <div className={styles.name}>당신의 이름은?</div>
                <div className={styles.input}>
                  <input type='text' ref={nameRef}></input>
                </div>
              </div>
              <div className={styles.btn}>
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

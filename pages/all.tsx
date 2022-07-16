import React, { useEffect, useState } from 'react';
import {
  administrativeTypeMbti,
  analystTypeMbti,
  diplomaticTypeMbti,
  explorerTypeMbti,
  MbtiTypes,
} from '../components/demo/mbti';
import Layout from '../components/layouts/layout';
import CenterFixed from '../components/ui/CenterFixed';
import MbtiCard from '../components/ui/mbti-card';
import MbtiDetail from '../components/ui/mbti-detail';
import Overlay from '../components/ui/overlay';
import styles from './all.module.scss';
import { LOCALSTORAGE_KEY_THEME, Theme } from './_app';

const All = () => {
  const [theme, setTheme] = useState<Theme>('red');
  const [selectedMbti, setSelectedMbti] = useState<MbtiTypes | null>(null);
  function handleCardClick(mbtiType: MbtiTypes) {
    setSelectedMbti(mbtiType);
  }
  function handleCardClose() {
    setSelectedMbti(null);
  }
  useEffect(() => {
    const selectedTheme = localStorage.getItem(LOCALSTORAGE_KEY_THEME);
    if (selectedTheme === 'red' || selectedTheme === 'blue') {
      setTheme(selectedTheme);
    }
  }, [theme]);
  return (
    <div className={styles.wrapper}>
      <Layout>
        <div className={styles.container}>
          <main className={styles.main}>
            {/* {MBTIS.map((mbti, idx) => (
              <motion.div key={idx} layoutId={mbti.id}>
                <MbtiCard type={mbti.id} handleClick={handleCardClick} />
              </motion.div>
            ))} */}
            {[
              analystTypeMbti,
              diplomaticTypeMbti,
              administrativeTypeMbti,
              explorerTypeMbti,
            ].map((mbtis, i) => (
              <div key={i} className={styles.row}>
                <h1
                  className={
                    theme === 'red' ? styles['red-color'] : styles['blue-color']
                  }
                >
                  {mbtis[0].type}
                </h1>
                <div className={styles.cards}>
                  {mbtis.map((mbti, i) => (
                    <MbtiCard
                      key={i}
                      theme={theme}
                      mbti={mbti}
                      handleClick={handleCardClick}
                    />
                  ))}
                </div>
              </div>
            ))}
            {selectedMbti && (
              <Overlay onCloseHandler={handleCardClose} hasCloseBtn={true}>
                <CenterFixed>
                  <MbtiDetail type={selectedMbti} theme={theme} />
                </CenterFixed>
              </Overlay>
            )}
          </main>
        </div>
      </Layout>
    </div>
  );
};

export default All;

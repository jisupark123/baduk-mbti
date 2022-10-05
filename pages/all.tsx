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
import { Theme } from './_app';

const All = () => {
  const [theme, setTheme] = useState<Theme>('blue');
  const [selectedMbti, setSelectedMbti] = useState<MbtiTypes | null>(null);
  function handleCardClick(mbtiType: MbtiTypes) {
    setSelectedMbti(mbtiType);
  }
  function handleCardClose() {
    setSelectedMbti(null);
  }

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
          <footer className={styles.footer}>
            <p>
              {
                '※ 본 결과지에 나온 프로기사 MBTI는 채움 MBTI 연구팀이 기풍에 맞게 작성한 내용으로 실제와는 다를 수 있습니다.'
              }
            </p>
            <p>
              {
                '※ 본 결과지는 MBTI 공식사이트 16Personalities를 참고하여 작성되었습니다.'
              }
            </p>
          </footer>
        </div>
      </Layout>
    </div>
  );
};

export default All;

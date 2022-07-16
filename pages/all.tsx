import {
  AnimatePresence,
  AnimateSharedLayout,
  motion,
  Variants,
} from 'framer-motion';
import React, { useState } from 'react';
import MBTIS, { MbtiTypes } from '../components/demo/mbti';
import Layout from '../components/layouts/layout';
import CenterFixed from '../components/ui/CenterFixed';
import MbtiCard from '../components/ui/mbti-card';
import MbtiDetail from '../components/ui/mbti-detail';
import Overlay from '../components/ui/overlay';
import styles from './all.module.scss';

const All = () => {
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
            {MBTIS.map((mbti, idx) => (
              <motion.div key={idx} layoutId={mbti.id}>
                <MbtiCard type={mbti.id} handleClick={handleCardClick} />
              </motion.div>
            ))}
            {selectedMbti && (
              <Overlay onCloseHandler={handleCardClose} hasCloseBtn={true}>
                <CenterFixed>
                  <MbtiDetail type={selectedMbti} />
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

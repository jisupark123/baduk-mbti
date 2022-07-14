import React from 'react';
import styles from './mbti-card.module.scss';

const MbtiCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contents}></div>
      <div className={styles.btns}></div>
    </div>
  );
};

export default MbtiCard;

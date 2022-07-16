import React from 'react';
import { MbtiTypes } from '../demo/mbti';
import styles from './mbti-card.module.scss';

interface MbtiCardProps {
  type: MbtiTypes;
  handleClick: (mbtiType: MbtiTypes) => void;
}

const MbtiCard: React.FC<MbtiCardProps> = ({ type, handleClick }) => {
  return (
    <div className={styles.container} onClick={() => handleClick(type)}>
      <div className={styles.contents}></div>
      <div className={styles.btns}></div>
    </div>
  );
};

export default MbtiCard;

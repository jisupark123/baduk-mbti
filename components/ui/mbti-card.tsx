import React from 'react';
import { motion, Variants } from 'framer-motion';
import { IMBTI, MbtiTypes } from '../demo/mbti';
import styles from './mbti-card.module.scss';
import { Theme } from '../../pages/_app';

interface MbtiCardProps {
  theme: Theme;
  mbti: IMBTI;
  handleClick: (mbtiType: MbtiTypes) => void;
}

const btnVariants: Variants = {
  hover: {
    y: -7,
    transition: { ease: 'easeOut', duration: 0.4 },
  },
};

const MbtiCard: React.FC<MbtiCardProps> = ({ theme, mbti, handleClick }) => {
  return (
    <motion.div
      whileHover={'hover'}
      variants={btnVariants}
      className={`${styles.container} ${
        theme === 'red' ? styles['red-border'] : styles['blue-border']
      }`}
      onClick={() => handleClick(mbti.id)}
    >
      <div className={styles.type}>{`${mbti.id} - ${mbti.detailType}`}</div>
    </motion.div>
  );
};

export default MbtiCard;

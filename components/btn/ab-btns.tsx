import React, { useEffect, useState } from 'react';
import styles from './ab-btns.module.scss';
import { motion, Variants } from 'framer-motion';
import { Theme } from '../../pages/_app';

type AB = 'A' | 'B';

interface AB_BtnProps {
  theme: Theme | undefined;
  mbti: { A: string; B: string };
  mbtiSetter: (mbti: any) => void;
}

const btnVariants: Variants = {
  hover: {
    y: -7,
    transition: { ease: 'easeOut', duration: 0.4 },
  },
};
const AB_Btns: React.FC<AB_BtnProps> = ({ theme, mbti, mbtiSetter }) => {
  const [clickedBtn, setClickedBtn] = useState<AB | null>(null);
  const themeColor = theme ?? '';

  function onClickBtn(btn: AB) {
    setClickedBtn(btn);
    mbtiSetter(mbti[btn]);
  }
  useEffect(() => {
    console.log(theme);
  }, [theme]);
  return (
    <>
      <motion.div
        whileHover={'hover'}
        variants={btnVariants}
        className={`${styles.container} ${
          // clickedBtn === 'A' ? styles.clicked : ''
          clickedBtn !== 'A' ? '' : styles[themeColor]
        }`}
        onClick={() => onClickBtn('A')}
      >
        A
      </motion.div>
      <motion.div
        whileHover={'hover'}
        variants={btnVariants}
        className={`${styles.container} ${
          // clickedBtn === 'B' ? styles.clicked : ''
          clickedBtn !== 'B' ? '' : styles[themeColor]
        }`}
        onClick={() => onClickBtn('B')}
      >
        B
      </motion.div>
    </>
  );
};

export default AB_Btns;

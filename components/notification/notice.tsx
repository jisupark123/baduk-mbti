import { AnimatePresence, motion, Variants } from 'framer-motion';
import React, { useEffect } from 'react';
import styles from './notice.module.scss';

interface NoticeProps {
  show: boolean;
  isSuccessed: boolean;
  contents: string;
  closeNotice: () => void;
}

const variants: Variants = {
  initial: {
    opacity: 1,
    // y: -30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { ease: 'easeInOut' },
  },
  exit: {
    opacity: 0,
    // y: -30,
    transition: { ease: 'easeInOut', duration: 0.5, delay: 1 },
  },
};

const Notice: React.FC<NoticeProps> = ({
  show,
  isSuccessed,
  contents,
  closeNotice,
}) => {
  useEffect(() => {
    setTimeout(() => {
      console.log('aa');
      closeNotice();
    }, 1000);
  }, [closeNotice]);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={`${styles.container} ${
            isSuccessed ? styles.successed : styles.failed
          }`}
          variants={variants}
          initial='initial'
          animate='animate'
          exit='exit'
        >
          <div className={styles.contents}>{contents}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notice;

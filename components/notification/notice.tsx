import { AnimatePresence, motion, Variants } from 'framer-motion';
import React, { useEffect } from 'react';
import { useNotice } from '../../store/notice-context';
import styles from './notice.module.scss';

const variants: Variants = {
  initial: {
    opacity: 0,
    // y: -30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { ease: 'easeInOut', duration: 0.3 },
  },
  exit: {
    opacity: 0,
    // y: -30,
    transition: { ease: 'easeInOut', duration: 0.5 },
  },
};

const Notice: React.FC = () => {
  const { show, state, message, close } = useNotice();
  const className =
    state === 'loading' ? 'loading' : state === true ? 'successed' : 'failed';
  const headerMsg =
    state === 'loading' ? 'Loading...' : state === true ? 'Success' : 'Error';
  useEffect(() => {
    if (state === 'loading') return;
    if (show) {
      setTimeout(() => {
        console.log('aa');
        close();
      }, 3000);
    }
  }, [close, show, state]);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={`${styles.container} ${styles[className]}`}
          variants={variants}
          initial='initial'
          animate='animate'
          exit='exit'
        >
          <div className={styles.header}>
            <div className={styles.result}>{headerMsg}</div>
            <button onClick={close}>✕</button>
          </div>
          <div className={styles.message}>{message}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default React.memo(Notice);

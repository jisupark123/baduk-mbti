import React from 'react';
import { motion, Transition } from 'framer-motion';
import styles from './switch.module.scss';

interface SwitchProps {
  state: boolean;
  handleClick: () => void;
}

const spring: Transition = {
  type: 'spring',
  stiffness: 200,
  damping: 30,
};

const Switch: React.FC<SwitchProps> = ({ state, handleClick }) => {
  return (
    <div
      className={`${styles.switch} ${!state ? styles['switch-on'] : ''}`}
      onClick={handleClick}
    >
      <motion.div
        className={styles.handle}
        layout
        transition={spring}
      ></motion.div>
    </div>
  );
};

export default Switch;

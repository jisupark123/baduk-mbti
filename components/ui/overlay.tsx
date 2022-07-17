import React, { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { motion, Variants } from 'framer-motion';
import styles from './overlay.module.scss';

interface BackDropProps {
  hasLeftBtn?: boolean;
  handleClickLeftBtn?: () => void;
  hasCloseBtn?: boolean;
  onlyCloseWithBtn?: boolean;
  onCloseHandler?: () => void;
}

interface OverlayProps extends BackDropProps {
  children: ReactNode;
}

interface ModalProps {
  children: ReactNode;
}

const backdropVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

const BackDrop: React.FC<BackDropProps> = ({
  hasLeftBtn,
  hasCloseBtn,
  onlyCloseWithBtn,
  onCloseHandler,
  handleClickLeftBtn,
}) => {
  return (
    <motion.div
      className={styles.backdrop}
      onClick={onlyCloseWithBtn ? () => {} : onCloseHandler}
      variants={backdropVariants}
      initial='initial'
      animate='animate'
    >
      {hasLeftBtn && (
        <button className={styles.homeBtn} onClick={handleClickLeftBtn}>
          ↩︎
        </button>
      )}

      {hasCloseBtn && (
        <button className={styles.closeBtn} onClick={onCloseHandler}>
          ✕
        </button>
      )}
    </motion.div>
  );
};

const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <motion.div
      className={styles.modal}
      variants={backdropVariants}
      initial='initial'
      animate='animate'
    >
      {children}
    </motion.div>
  );
};

const Overlay: React.FC<OverlayProps> = (props) => {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setPortalElement(document.getElementById('overlay'));
  }, []);
  return (
    <>
      {portalElement &&
        ReactDOM.createPortal(
          <BackDrop
            onCloseHandler={props.onCloseHandler}
            hasCloseBtn={props.hasCloseBtn}
            onlyCloseWithBtn={props.onlyCloseWithBtn}
            hasLeftBtn={props.hasLeftBtn}
            handleClickLeftBtn={props.handleClickLeftBtn}
          />,
          portalElement
        )}
      {portalElement &&
        ReactDOM.createPortal(<Modal>{props.children}</Modal>, portalElement)}
    </>
  );
};

export default Overlay;

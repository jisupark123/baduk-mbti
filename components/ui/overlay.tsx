import React, { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './overlay.module.scss';

interface BackDropProps {
  hasCloseBtn?: boolean;
  onlyCloseWithBtn?: boolean;
  onCloseHandler: () => void;
}

interface OverlayProps extends BackDropProps {
  children: ReactNode;
}

interface ModalProps {
  children: ReactNode;
}

const BackDrop: React.FC<BackDropProps> = ({
  hasCloseBtn,
  onlyCloseWithBtn,
  onCloseHandler,
}) => {
  return (
    <div
      className={styles.backdrop}
      onClick={onlyCloseWithBtn ? () => {} : onCloseHandler}
    >
      {hasCloseBtn && (
        <button className={styles.closeBtn} onClick={onCloseHandler}>
          ✕
        </button>
      )}
    </div>
  );
};

const Modal: React.FC<ModalProps> = ({ children }) => {
  return <div className={styles.modal}>{children}</div>;
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
          />,
          portalElement
        )}
      {portalElement &&
        ReactDOM.createPortal(<Modal>{props.children}</Modal>, portalElement)}
    </>
  );
};

export default Overlay;

import React from 'react';
import styles from './invitation-card.module.scss';

interface Props {
  ment: string;
  onClickHandler: () => void;
}

const InvitationCard: React.FC<Props> = ({ ment, onClickHandler }) => {
  return (
    <div className={styles.container}>
      <div className={styles.ment}>{ment}</div>
      <div className={styles.btn}>
        <button onClick={onClickHandler}>네</button>
      </div>
    </div>
  );
};

export default InvitationCard;

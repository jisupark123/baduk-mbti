import React from 'react';
import styles from './mbti-detail.module.scss';
import { IAllMbtiPecentage, MBTIS, MbtiTypes } from '../demo/mbti';
import { Theme } from '../../pages/_app';

interface MbtiDetailProps {
  type: any;
  theme: Theme;
  mbtiPercentage?: number;
}

const MbtiDetail: React.FC<MbtiDetailProps> = ({
  type,
  theme,
  mbtiPercentage,
}) => {
  const mbti = MBTIS.filter((mbti) => mbti.id === type)[0];
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h1>{`${mbti.id} - ${mbti.detailType}`}</h1>
          {mbtiPercentage !== undefined && (
            <span
              className={`${styles.percentage} ${
                theme === 'red' ? styles['red-color'] : styles['blue-color']
              }`}
            >
              {'('}
              {mbtiPercentage}%{')'}
            </span>
          )}
        </div>
        <div className={styles.pro}>{`대표 프로기사 - ${mbti.pro}`}</div>
        <div
          className={`${styles.tags} ${
            theme === 'red' ? styles['red-color'] : styles['blue-color']
          }`}
        >
          {mbti.tags?.map((tag, i) => (
            <span key={i}>{`#${tag}`}</span>
          ))}
        </div>
      </div>
      <div className={styles.contents}>{mbti.description}</div>
    </div>
  );
};

export default MbtiDetail;

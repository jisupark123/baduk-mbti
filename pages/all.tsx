import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import {
  administrativeTypeMbti,
  analystTypeMbti,
  diplomaticTypeMbti,
  explorerTypeMbti,
  IAllMbtiPecentage,
  MbtiTypes,
  mbtiTypesList,
} from '../components/demo/mbti';
import Layout from '../components/layouts/layout';
import CenterFixed from '../components/ui/CenterFixed';
import MbtiCard from '../components/ui/mbti-card';
import MbtiDetail from '../components/ui/mbti-detail';
import Overlay from '../components/ui/overlay';
import client from '../lib/server/client';
import styles from './all.module.scss';
import { Theme } from './_app';

interface IMbtiPercentageProps {
  allMbtiPecentage: IAllMbtiPecentage;
}

const All: NextPage<IMbtiPercentageProps> = ({ allMbtiPecentage }) => {
  const [theme, setTheme] = useState<Theme>('blue');
  const [selectedMbti, setSelectedMbti] = useState<MbtiTypes | null>(null);
  function handleCardClick(mbtiType: MbtiTypes) {
    setSelectedMbti(mbtiType);
  }
  function handleCardClose() {
    setSelectedMbti(null);
  }

  return (
    <div className={styles.wrapper}>
      <Layout>
        <div className={styles.container}>
          <main className={styles.main}>
            {/* {MBTIS.map((mbti, idx) => (
              <motion.div key={idx} layoutId={mbti.id}>
                <MbtiCard type={mbti.id} handleClick={handleCardClick} />
              </motion.div>
            ))} */}
            {[
              analystTypeMbti,
              diplomaticTypeMbti,
              administrativeTypeMbti,
              explorerTypeMbti,
            ].map((mbtis, i) => (
              <div key={i} className={styles.row}>
                <h1
                  className={
                    theme === 'red' ? styles['red-color'] : styles['blue-color']
                  }
                >
                  {mbtis[0].type}
                </h1>
                <div className={styles.cards}>
                  {mbtis.map((mbti, i) => (
                    <MbtiCard
                      key={i}
                      theme={theme}
                      mbti={mbti}
                      handleClick={handleCardClick}
                    />
                  ))}
                </div>
              </div>
            ))}
            {selectedMbti && (
              <Overlay onCloseHandler={handleCardClose} hasCloseBtn={true}>
                <CenterFixed>
                  <MbtiDetail
                    type={selectedMbti}
                    theme={theme}
                    mbtiPercentage={allMbtiPecentage[selectedMbti]}
                  />
                </CenterFixed>
              </Overlay>
            )}
          </main>
          <footer className={styles.footer}>
            <p>
              {
                '※ 본 결과지에 나온 프로기사 MBTI는 채움 MBTI 연구팀이 기풍에 맞게 작성한 내용으로 실제와는 다를 수 있습니다.'
              }
            </p>
            <p>
              {
                '※ 본 결과지는 MBTI 공식사이트 16Personalities를 참고하여 작성되었습니다.'
              }
            </p>
          </footer>
        </div>
      </Layout>
    </div>
  );
};

export default All;

// 모든 mbti의 퍼센트 뽑아오기
interface IMbti {
  badukMbti: MbtiTypes;
}

export async function getServerSideProps() {
  const mbtis: IMbti[] = await client.tester.findMany({
    select: { badukMbti: true },
  });
  const mbtiList = mbtis.map((mbti) => mbti.badukMbti); // ["INTP","ENFP","INTP"...]
  const allMbtiPecentage: { [mbti: string]: number } = {};
  for (let mbtiType of mbtiTypesList) {
    let percentage =
      (mbtiList.filter((mbti) => mbti === mbtiType).length / mbtiList.length) *
      100;
    percentage =
      percentage >= 1
        ? (percentage = Number(percentage.toFixed(0)))
        : (percentage = Number(percentage.toFixed(1)));
    allMbtiPecentage[mbtiType] = percentage; // INTP:33, ENTP:0.5
  }
  console.log(allMbtiPecentage);

  return { props: { allMbtiPecentage } };
}

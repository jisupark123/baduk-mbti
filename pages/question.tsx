import { NextPage } from 'next';
import React, { useContext, useEffect, useState } from 'react';
import styles from './question.module.scss';
import { motion, Variants } from 'framer-motion';
import AB_Btns from '../components/btn/ab-btns';
import { LOCALSTORAGE_KEY_Theme, Theme } from './_app';
import Overlay from '../components/ui/overlay';
import MbtiCard from '../components/ui/mbti-card';
import { useRouter } from 'next/router';
import Layout from '../components/layouts/layout';

interface QuestionProps {
  clickedTheme?: Theme;
}

const Question: NextPage<QuestionProps> = () => {
  const [theme, setTheme] = useState<Theme>('red');
  const [question1, setQuestion1] = useState<'E' | 'I' | null>(null);
  const [question2, setQuestion2] = useState<'N' | 'S' | null>(null);
  const [question3, setQuestion3] = useState<'F' | 'T' | null>(null);
  const [question4, setQuestion4] = useState<'J' | 'P' | null>(null);
  const [showResult, setShowResult] = useState(false);
  const router = useRouter();

  function showAllResults() {
    router.push('/all');
  }
  function onMoreTime() {
    router.reload();
  }
  useEffect(() => {
    const currentTheme = localStorage.getItem(LOCALSTORAGE_KEY_Theme);
    if (currentTheme === 'red' || currentTheme === 'blue') {
      setTheme(currentTheme);
    }
  }, [theme]);

  return (
    <Layout>
      <div className={styles.container}>
        {showResult && (
          <Overlay>
            <div className={styles['overlay-container']}>
              <MbtiCard />
              <div className={styles['overlay-btns']}>
                <button
                  onClick={showAllResults}
                  className={
                    theme === 'red' ? styles['red-bg'] : styles['blue-bg']
                  }
                >
                  다른 성향도 알아보기
                </button>
                <button
                  onClick={onMoreTime}
                  className={
                    theme === 'red' ? styles['red-bg'] : styles['blue-bg']
                  }
                >
                  한번 더!
                </button>
              </div>
            </div>
          </Overlay>
        )}
        <div
          className={`${styles.wrapper} ${
            theme === 'red' ? styles['red-gradient'] : styles['blue-gradient']
          }`}
        >
          <div className={styles.header}>
            <h1>바둑으로 알아보는 MBTI</h1>
          </div>
          <div className={styles.tips}>
            <div className={styles.tip}>총 4개의 문제가 주어집니다.</div>
            <div className={styles.tip}>한눈에 끌리는 수를 선택하세요.</div>
            <div className={styles.tip}>가벼운 마음으로 응해주세요.</div>
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.question}>
            <div className={styles['baduk-board']}></div>
            <div className={styles.btns}>
              <AB_Btns
                theme={theme}
                mbti={{ A: 'E', B: 'I' }}
                mbtiSetter={setQuestion1}
              />
            </div>
          </div>
          <div className={styles.question}>
            <div className={styles['baduk-board']}></div>
            <div className={styles.btns}>
              <AB_Btns
                theme={theme}
                mbti={{ A: 'N', B: 'S' }}
                mbtiSetter={setQuestion2}
              />
            </div>
          </div>
          <div className={styles.question}>
            <div className={styles['baduk-board']}></div>
            <div className={styles.btns}>
              <AB_Btns
                theme={theme}
                mbti={{ A: 'F', B: 'T' }}
                mbtiSetter={setQuestion3}
              />
            </div>
          </div>
          <div className={styles.question}>
            <div className={styles['baduk-board']}></div>
            <div className={styles.btns}>
              <AB_Btns
                theme={theme}
                mbti={{ A: 'J', B: 'P' }}
                mbtiSetter={setQuestion4}
              />
            </div>
          </div>
          <div className={styles.submit}>
            <button
              className={theme === 'red' ? styles['red-bg'] : styles['blue-bg']}
              onClick={() => setShowResult(true)}
            >
              결과 확인하기
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Question;

import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import styles from './question.module.scss';
import { motion, Variants } from 'framer-motion';
import AB_Btns from '../components/btn/ab-btns';
import {
  Level,
  LOCALSTORAGE_KEY_LEVEL,
  LOCALSTORAGE_KEY_THEME,
  Theme,
} from './_app';
import Overlay from '../components/ui/overlay';
import { useRouter } from 'next/router';
import Layout from '../components/layouts/layout';
import MbtiDetail from '../components/ui/mbti-detail';
import Image from 'next/image';

interface QuestionProps {
  clickedTheme?: Theme;
}

const btnVariants: Variants = {
  hover: {
    y: -5,
    transition: { ease: 'easeOut', duration: 0.4 },
  },
};

const publicFolderRoot = '/../public/';
const badukBoardWidth = 600;

const Question: NextPage<QuestionProps> = () => {
  const [theme, setTheme] = useState<Theme>('red');
  const [level, setLevel] = useState<Level>('초급');
  const [question1, setQuestion1] = useState<'E' | 'I' | null>(null);
  const [question2, setQuestion2] = useState<'N' | 'S' | null>(null);
  const [question3, setQuestion3] = useState<'F' | 'T' | null>(null);
  const [question4, setQuestion4] = useState<'J' | 'P' | null>(null);
  const [selectedMbti, setSelectedMbti] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const router = useRouter();

  function handleShowResult() {
    if ([question1, question2, question3, question4].includes(null)) {
      alert('모든 문항에 답변해주세요');
      return;
    }
    setShowResult(true);
  }

  function showAllResults() {
    router.push('/all');
  }
  function onMoreTime() {
    router.reload();
  }
  useEffect(() => {
    const selectedTheme = localStorage.getItem(LOCALSTORAGE_KEY_THEME);
    if (selectedTheme === 'red' || selectedTheme === 'blue') {
      setTheme(selectedTheme);
    }
    const selectedLevel = localStorage.getItem(LOCALSTORAGE_KEY_LEVEL);
    if (
      selectedLevel === '초급' ||
      selectedLevel === '중급' ||
      selectedLevel === '고급'
    ) {
      setLevel(selectedLevel);
    }
  }, [theme, level]);

  useEffect(() => {
    if (
      question1 != null &&
      question2 != null &&
      question3 != null &&
      question4 != null
    ) {
      setSelectedMbti(question1 + question2 + question3 + question4);
    }
  }, [question1, question2, question3, question4]);

  return (
    <Layout>
      <div className={styles.container}>
        {showResult && (
          <Overlay
            hasCloseBtn={true}
            onCloseHandler={() => setShowResult(false)}
          >
            <div className={styles['overlay-container']}>
              <div className={styles['mbti-card']}>
                <MbtiDetail type={selectedMbti} />
              </div>
              <div className={styles['overlay-btns']}>
                <motion.button
                  whileHover={'hover'}
                  variants={btnVariants}
                  onClick={showAllResults}
                  className={
                    theme === 'red' ? styles['red-bg'] : styles['blue-bg']
                  }
                >
                  다른 성향도 알아보기
                </motion.button>
                <motion.button
                  whileHover={'hover'}
                  variants={btnVariants}
                  onClick={onMoreTime}
                  className={
                    theme === 'red' ? styles['red-bg'] : styles['blue-bg']
                  }
                >
                  한번 더!
                </motion.button>
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
            <div
              className={`${styles.title} ${
                theme === 'red' ? styles['red-color'] : styles['blue-color']
              }`}
            >
              Q1
            </div>
            <div className={styles['baduk-board']}>
              <Image
                src={publicFolderRoot + level + '_1.png'}
                alt='바둑판'
                width={badukBoardWidth}
                height={badukBoardWidth}
              />
            </div>
            <div
              className={`${styles.btns} ${
                theme === 'red' ? styles['red-border'] : styles['blue-border']
              }`}
            >
              <AB_Btns
                theme={theme}
                mbti={{ A: 'E', B: 'I' }}
                mbtiSetter={setQuestion1}
              />
            </div>
          </div>
          <div className={styles.question}>
            <div
              className={`${styles.title} ${
                theme === 'red' ? styles['red-color'] : styles['blue-color']
              }`}
            >
              Q2
            </div>
            <div className={styles['baduk-board']}>
              <Image
                src={publicFolderRoot + level + '_2.png'}
                alt='바둑판'
                width={badukBoardWidth}
                height={badukBoardWidth}
              />
            </div>
            <div
              className={`${styles.btns} ${
                theme === 'red' ? styles['red-border'] : styles['blue-border']
              }`}
            >
              <AB_Btns
                theme={theme}
                mbti={{ A: 'N', B: 'S' }}
                mbtiSetter={setQuestion2}
              />
            </div>
          </div>
          <div className={styles.question}>
            <div
              className={`${styles.title} ${
                theme === 'red' ? styles['red-color'] : styles['blue-color']
              }`}
            >
              Q3
            </div>
            <div className={styles['baduk-board']}>
              <Image
                src={publicFolderRoot + level + '_3.png'}
                alt='바둑판'
                width={badukBoardWidth}
                height={badukBoardWidth}
              />
            </div>
            <div
              className={`${styles.btns} ${
                theme === 'red' ? styles['red-border'] : styles['blue-border']
              }`}
            >
              <AB_Btns
                theme={theme}
                mbti={{ A: 'F', B: 'T' }}
                mbtiSetter={setQuestion3}
              />
            </div>
          </div>
          <div className={styles.question}>
            <div
              className={`${styles.title} ${
                theme === 'red' ? styles['red-color'] : styles['blue-color']
              }`}
            >
              Q4
            </div>
            <div className={styles['baduk-board']}>
              <Image
                src={publicFolderRoot + level + '_4.png'}
                alt='바둑판'
                width={badukBoardWidth}
                height={badukBoardWidth}
              />
            </div>
            <div
              className={`${styles.btns} ${
                theme === 'red' ? styles['red-border'] : styles['blue-border']
              }`}
            >
              <AB_Btns
                theme={theme}
                mbti={{ A: 'P', B: 'J' }}
                mbtiSetter={setQuestion4}
              />
            </div>
          </div>
          <div className={styles.submit}>
            <button
              className={theme === 'red' ? styles['red-bg'] : styles['blue-bg']}
              onClick={handleShowResult}
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

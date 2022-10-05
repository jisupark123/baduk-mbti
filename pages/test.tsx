import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import styles from './test.module.scss';
import { motion, Variants } from 'framer-motion';
import AB_Btns from '../components/btn/ab-btns';
import {
  Level,
  LOCALSTORAGE_KEY_LEVEL,
  LOCALSTORAGE_KEY_NAME,
  Theme,
} from './_app';
import Overlay from '../components/ui/overlay';
import { useRouter } from 'next/router';
import Layout from '../components/layouts/layout';
import MbtiDetail from '../components/ui/mbti-detail';
import Image from 'next/image';
import { useNotice } from '../store/notice-context';
import { PostMbtiResponse } from './api/mbti';
import useMutation from '../lib/client/useMutation';

interface QuestionProps {
  clickedTheme?: Theme;
}

const btnVariants: Variants = {
  hover: {
    y: -5,
    transition: { ease: 'easeOut', duration: 0.4 },
  },
};

const publicFolderRoot = '/';
// const publicFolderRoot = '/../public/';
const badukBoardWidth = 500;

const Test: NextPage<QuestionProps> = () => {
  const [theme, setTheme] = useState<Theme>('red');
  const [level, setLevel] = useState<Level>('초급');
  const [question1, setQuestion1] = useState<'E' | 'I' | null>(null);
  const [question2, setQuestion2] = useState<'N' | 'S' | null>(null);
  const [question3, setQuestion3] = useState<'F' | 'T' | null>(null);
  const [question4, setQuestion4] = useState<'J' | 'P' | null>(null);
  const [selectedMbti, setSelectedMbti] = useState<string | null>(null);
  const [result, setResult] = useState({ show: false, myMbtiPercentage: 0 });
  const router = useRouter();
  const notice = useNotice();
  const [
    saveMbti,
    {
      data: saveMbtiResponseData,
      loading: saveMbtiLoading,
      error: saveMbtiError,
    },
  ] = useMutation<PostMbtiResponse>({
    method: 'POST',
    url: '/api/mbti',
  });

  useEffect(() => {
    if (saveMbtiResponseData?.ok) {
      notice.close();
      setResult({
        show: true,
        myMbtiPercentage: saveMbtiResponseData.myMbtiPercentage,
      });
      return;
    }
    if (saveMbtiResponseData?.error) {
      notice.failed(saveMbtiResponseData.error);
      return;
    }
  }, [saveMbtiResponseData, saveMbtiError, notice]);

  async function handleShowResult() {
    if ([question1, question2, question3, question4].includes(null)) {
      alert('모든 문항에 답변해주세요');
      return;
    }
    notice.loading('결과를 불러오는 중입니다.');
    const payload = {
      mbti: question1! + question2! + question3! + question4!,
      name: localStorage.getItem(LOCALSTORAGE_KEY_NAME),
      level,
      problems: [
        `${level}_1_1.png`,
        `${level}_2_1.png`,
        `${level}_3_1.png`,
        `${level}_4_1.png`,
      ],
    };
    saveMbti(payload);
  }

  function showAllResults() {
    router.push('/all');
  }
  function oneMoreTime() {
    router.reload();
  }
  function goHome() {
    router.push('/');
  }
  useEffect(() => {
    // const selectedTheme = localStorage.getItem(LOCALSTORAGE_KEY_THEME);

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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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
        {result.show && (
          <Overlay
            hasLeftBtn={true}
            hasCloseBtn={true}
            onCloseHandler={() =>
              setResult({ show: false, myMbtiPercentage: 0 })
            }
            handleClickLeftBtn={goHome}
          >
            <div className={styles['overlay-container']}>
              <div className={styles['ment']}>
                <span>{localStorage.getItem(LOCALSTORAGE_KEY_NAME)}</span>
                <span className={styles['red-color']}>
                  님의 MBTI는 참가자의
                </span>
                <span>{result.myMbtiPercentage}%</span>
                <span className={styles['red-color']}>입니다</span>
              </div>
              <div className={styles['mbti-card']}>
                <MbtiDetail type={selectedMbti} theme={theme} />
              </div>
              <div className={styles['overlay-btns']}>
                <motion.button
                  whileHover={'hover'}
                  variants={btnVariants}
                  onClick={showAllResults}
                  className={styles['red-bg']}
                >
                  다른 성향도 알아보기
                </motion.button>
                <motion.button
                  whileHover={'hover'}
                  variants={btnVariants}
                  onClick={oneMoreTime}
                  className={styles['red-bg']}
                >
                  한번 더!
                </motion.button>
              </div>
            </div>
          </Overlay>
        )}
        <div className={`${styles.wrapper} ${styles['red-gradient']}`}>
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
          <section className={styles.section}>
            <div className={`${styles.title} ${styles['red-color']}`}>Q1</div>
            <div className={styles.question}>
              <div className={styles['baduk-board']}>
                <Image
                  src={`/${level}/${level}_1_1.png`}
                  alt='바둑판'
                  layout='fill'
                  objectFit='cover'
                  loading='eager'
                />
              </div>
              <div className={`${styles.btns}`}>
                <AB_Btns
                  theme={theme}
                  mbti={{ A: 'E', B: 'I' }}
                  description={{
                    title: '서로 집을 차지한 상황이다.',
                    A: '상대 집을 먼저 부수러 가는 적극적인 수',
                    B: '내 집을 지키는 안전한 수',
                  }}
                  mbtiSetter={setQuestion1}
                />
              </div>
            </div>
          </section>
          <section className={styles.section}>
            <div className={`${styles.title} ${styles['red-color']}`}>Q2</div>
            <div className={styles.question}>
              <div className={styles['baduk-board']}>
                <Image
                  src={`/${level}/${level}_2_1.png`}
                  alt='바둑판'
                  layout='fill'
                  objectFit='cover'
                  loading='eager'
                />
              </div>
              <div className={`${styles.btns}`}>
                <AB_Btns
                  theme={theme}
                  mbti={{ A: 'N', B: 'S' }}
                  description={{
                    title: '서로 집을 차지한 상황이다.',
                    A: '당장 확실한 집을 지키기보단 미래를 위한 투자',
                    B: '내 집을 지키는 확실한 수',
                  }}
                  mbtiSetter={setQuestion2}
                />
              </div>
            </div>
          </section>
          <section className={styles.section}>
            <div className={`${styles.title} ${styles['red-color']}`}>Q3</div>

            <div className={styles.question}>
              <div className={styles['baduk-board']}>
                <Image
                  src={`/${level}/${level}_3_1.png`}
                  alt='바둑판'
                  layout='fill'
                  objectFit='cover'
                  loading='eager'
                />
              </div>
              <div className={`${styles.btns}`}>
                <AB_Btns
                  theme={theme}
                  mbti={{ A: 'F', B: 'T' }}
                  description={{
                    title: '흑이 백돌을 잡으려는 상황',
                    A: '지금 당장 백 돌을 잡아서 득을 볼 수 있다',
                    B: '좀 더 효율적인 수를 추구하나 나중에 득인지는 모른다.(뒷북)',
                  }}
                  mbtiSetter={setQuestion3}
                />
              </div>
            </div>
          </section>
          <section className={styles.section}>
            <div className={`${styles.title} ${styles['red-color']}`}>Q4</div>
            <div className={styles.question}>
              <div className={styles['baduk-board']}>
                <Image
                  src={`/${level}/${level}_4_1.png`}
                  alt='바둑판'
                  layout='fill'
                  objectFit='cover'
                  loading='eager'
                />
              </div>
              <div className={`${styles.btns}`}>
                <AB_Btns
                  theme={theme}
                  mbti={{ A: 'P', B: 'J' }}
                  description={{
                    title: '초반 구상 중임',
                    A: '갑자기 오늘따라 A로 변형하고 싶음',
                    B: '원래 여기를 생각했음(두려고 했음)',
                  }}
                  mbtiSetter={setQuestion4}
                />
              </div>
            </div>
          </section>
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

export default Test;

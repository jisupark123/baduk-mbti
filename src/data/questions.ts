import type { Level } from '@/types/level';

export interface QuestionData {
  title: string;
  mbti: { A: string; B: string };
  description: string;
  options: { A: string; B: string };
  imagePath: string;
}

export const QUESTIONS: Record<Level, QuestionData[]> = {
  ///////////////// 초급 ///////////////////
  beginner: [
    {
      title: 'Q1',
      mbti: { A: 'E', B: 'I' },
      description: '서로 집을 차지한 상황',
      options: {
        A: '상대 집을 먼저 부수러 가는 적극적인 수',
        B: '내 집을 지키는 안전한 수',
      },
      imagePath: '/beginner/1.webp',
    },
    {
      title: 'Q2',
      mbti: { A: 'N', B: 'S' },
      description: '서로 집을 차지한 상황',
      options: {
        A: '당장 확실한 집을 지키기보단 미래를 위한 투자',
        B: '일단 내 집을 안전하게 확보하는 수',
      },
      imagePath: '/beginner/2.webp',
    },
    {
      title: 'Q3',
      mbti: { A: 'F', B: 'T' },
      description: '흑이 백돌을 잡으려는 상황',
      options: {
        A: '지금 당장 백 돌을 잡아서 득을 볼 수 있다.',
        B: '좀 더 효율적인 수를 추구하나 나중에 득인지는 모른다.',
      },
      imagePath: '/beginner/3.webp',
    },
    {
      title: 'Q4',
      mbti: { A: 'P', B: 'J' },
      description: '초반 구상 중인 상황',
      options: {
        A: '갑자기 오늘따라 A가 땡김',
        B: '원래 생각대로 B를 두고 싶음',
      },
      imagePath: '/beginner/4.webp',
    },
  ],

  ///////////////// 중급 ///////////////////
  intermediate: [
    {
      title: 'Q1',
      mbti: { A: 'E', B: 'I' },
      description: '서로 집을 차지한 상황',
      options: {
        A: '상대 집을 먼저 부수러 가는 적극적인 수',
        B: '내 집을 지키는 안전한 수',
      },
      imagePath: '/intermediate/1.webp',
    },
    {
      title: 'Q2',
      mbti: { A: 'N', B: 'S' },
      description: '정석 진행 중인 상황',
      options: {
        A: '실리를 내주고 두터움을 얻는 수',
        B: '일단 내 집을 확보하는 수',
      },
      imagePath: '/intermediate/2.webp',
    },
    {
      title: 'Q3',
      mbti: { A: 'F', B: 'T' },
      description: '백이 축머리를 둔 상황',
      options: {
        A: '지금 당장 백 돌을 잡아서 득을 볼 수 있다.',
        B: '좀 더 효율적인 수를 추구하나 나중에 득인지는 모른다.',
      },
      imagePath: '/intermediate/3.webp',
    },
    {
      title: 'Q4',
      mbti: { A: 'P', B: 'J' },
      description: '초반 구상 중인 상황',
      options: {
        A: '갑자기 오늘따라 A가 땡김',
        B: '원래 생각대로 B를 두고 싶음',
      },
      imagePath: '/intermediate/4.webp',
    },
  ],

  ///////////////// 고급 ///////////////////
  advanced: [
    {
      title: 'Q1',
      mbti: { A: 'E', B: 'I' },
      description: '포석 진행 중인 상황',
      options: {
        A: '상대 집을 부수러 가는 적극적인 수',
        B: '내 모양을 지키는 안정적인 수',
      },
      imagePath: '/advanced/1.webp',
    },
    {
      title: 'Q2',
      mbti: { A: 'N', B: 'S' },
      description: '전투가 벌어진 상황',
      options: {
        A: '실리를 내주고 주도권을 잡는 수',
        B: '안정적으로 내 돌을 살리는 수',
      },
      imagePath: '/advanced/2.webp',
    },
    {
      title: 'Q3',
      mbti: { A: 'F', B: 'T' },
      description: '백이 응수를 물어본 상황',
      options: {
        A: '내 집을 확실하게 지켜놓을 수 있다.',
        B: '좀 더 효율적인 수를 추구하나 나중에 득인지는 모른다.',
      },
      imagePath: '/advanced/3.webp',
    },
    {
      title: 'Q4',
      mbti: { A: 'P', B: 'J' },
      description: '초반 정석 진행 중',
      options: {
        A: '오늘따라 A로 변화해보고 싶음',
        B: '원래 정석대로 B를 두고 싶음',
      },
      imagePath: '/advanced/4.webp',
    },
  ],
};

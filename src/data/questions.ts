import type { Level } from '@/types/level';

export interface QuestionData {
  title: string;
  mbti: { A: string; B: string };
  description: string;
  options: { A: string; B: string };
  imagePath: string;
}

export const QUESTIONS: Record<Level, QuestionData[]> = {
  beginner: [
    {
      title: 'Q1',
      mbti: { A: 'E', B: 'I' },
      description: '서로 집을 차지한 상황',
      options: {
        A: '상대 집을 먼저 부수러 가는 적극적인 수',
        B: '내 집을 지키는 안전한 수',
      },
      imagePath: '/beginner/1.png',
    },
    {
      title: 'Q2',
      mbti: { A: 'N', B: 'S' },
      description: '서로 집을 차지한 상황',
      options: {
        A: '당장 확실한 집을 지키기보단 미래를 위한 투자',
        B: '내 집을 지키는 확실한 수',
      },
      imagePath: '/beginner/2.png',
    },
    {
      title: 'Q3',
      mbti: { A: 'F', B: 'T' },
      description: '흑이 백돌을 잡으려는 상황',
      options: {
        A: '지금 당장 백 돌을 잡아서 득을 볼 수 있다',
        B: '좀 더 효율적인 수를 추구하나 나중에 득인지는 모른다.',
      },
      imagePath: '/beginner/3.png',
    },
    {
      title: 'Q4',
      mbti: { A: 'P', B: 'J' },
      description: '초반 구상 중인 상황',
      options: {
        A: '갑자기 오늘따라 A가 땡김',
        B: '원래 생각대로 B를 두고 싶음',
      },
      imagePath: '/beginner/4.png',
    },
  ],
  intermediate: [
    {
      title: 'Q1',
      mbti: { A: 'E', B: 'I' },
      description: '서로 집을 차지한 상황',
      options: {
        A: '상대 집을 먼저 부수러 가는 적극적인 수',
        B: '내 집을 지키는 안전한 수',
      },
      imagePath: '/intermediate/1.png',
    },
    {
      title: 'Q2',
      mbti: { A: 'N', B: 'S' },
      description: '서로 집을 차지한 상황',
      options: {
        A: '당장 확실한 집을 지키기보단 미래를 위한 투자',
        B: '내 집을 지키는 확실한 수',
      },
      imagePath: '/intermediate/2.png',
    },
    {
      title: 'Q3',
      mbti: { A: 'F', B: 'T' },
      description: '흑이 백돌을 잡으려는 상황',
      options: {
        A: '지금 당장 백 돌을 잡아서 득을 볼 수 있다',
        B: '좀 더 효율적인 수를 추구하나 나중에 득인지는 모른다.',
      },
      imagePath: '/intermediate/3.png',
    },
    {
      title: 'Q4',
      mbti: { A: 'P', B: 'J' },
      description: '초반 구상 중인 상황',
      options: {
        A: '갑자기 오늘따라 A가 땡김',
        B: '원래 생각대로 B를 두고 싶음',
      },
      imagePath: '/intermediate/4.png',
    },
  ],
  advanced: [
    {
      title: 'Q1',
      mbti: { A: 'E', B: 'I' },
      description: '서로 집을 차지한 상황',
      options: {
        A: '상대 집을 먼저 부수러 가는 적극적인 수',
        B: '내 집을 지키는 안전한 수',
      },
      imagePath: '/advanced/1.png',
    },
    {
      title: 'Q2',
      mbti: { A: 'N', B: 'S' },
      description: '서로 집을 차지한 상황',
      options: {
        A: '당장 확실한 집을 지키기보단 미래를 위한 투자',
        B: '내 집을 지키는 확실한 수',
      },
      imagePath: '/advanced/2.png',
    },
    {
      title: 'Q3',
      mbti: { A: 'F', B: 'T' },
      description: '흑이 백돌을 잡으려는 상황',
      options: {
        A: '지금 당장 백 돌을 잡아서 득을 볼 수 있다',
        B: '좀 더 효율적인 수를 추구하나 나중에 득인지는 모른다.',
      },
      imagePath: '/advanced/3.png',
    },
    {
      title: 'Q4',
      mbti: { A: 'P', B: 'J' },
      description: '초반 구상 중인 상황',
      options: {
        A: '갑자기 오늘따라 A가 땡김',
        B: '원래 생각대로 B를 두고 싶음',
      },
      imagePath: '/advanced/4.png',
    },
  ],
};

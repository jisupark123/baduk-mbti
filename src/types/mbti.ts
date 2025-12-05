import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { LucideProps } from 'lucide-react';

export type Mbti =
  | 'INTP'
  | 'INTJ'
  | 'INFP'
  | 'INFJ'
  | 'ISTP'
  | 'ISTJ'
  | 'ISFP'
  | 'ISFJ'
  | 'ENTP'
  | 'ENTJ'
  | 'ENFP'
  | 'ENFJ'
  | 'ESTP'
  | 'ESTJ'
  | 'ESFP'
  | 'ESFJ';

export type MbtiCategoryId = '분석가형' | '외교관형' | '관리자형' | '탐험가형';

export type MbtiCategory = {
  id: MbtiCategoryId;
  label: string;
};

export type MbtiCategoryTheme = {
  icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
  color: string;
  accentColor: string;
};

export type MbtiDetail = {
  id: Mbti;
  category: MbtiCategoryId;
  name: string;
  desc: string;
  proPlayer: string;
  hashtags: string[];
  detailedDesc: string;
};

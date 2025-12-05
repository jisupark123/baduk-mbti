import { Brain, Heart, Shield, Compass } from 'lucide-react';

import type { MbtiDetail, MbtiCategory, MbtiCategoryTheme, MbtiCategoryId } from '@/types/mbti';

export const mbtiCategories: MbtiCategory[] = [
  { id: '분석가형', label: '분석가형' },
  { id: '외교관형', label: '외교관형' },
  { id: '관리자형', label: '관리자형' },
  { id: '탐험가형', label: '탐험가형' },
];

export const mbtiCategoryThemes: Record<MbtiCategoryId, MbtiCategoryTheme> = {
  분석가형: { icon: Brain, color: 'from-indigo-500 to-purple-600', accentColor: 'bg-indigo-500' },
  외교관형: { icon: Heart, color: 'from-pink-500 to-rose-600', accentColor: 'bg-pink-500' },
  관리자형: { icon: Shield, color: 'from-blue-500 to-indigo-600', accentColor: 'bg-blue-500' },
  탐험가형: { icon: Compass, color: 'from-emerald-500 to-teal-600', accentColor: 'bg-emerald-500' },
};

export const mbtiDetails: MbtiDetail[] = [
  {
    id: 'INTJ',
    category: '분석가형',
    name: '전략가',
    desc: '상대를 읽고 전략을 짜는 유형',
    proPlayer: '이세돌',
    hashtags: ['#전략적', '#계획적', '#독립적', '#통찰력'],
    detailedDesc:
      '중반 싸움에 강점이 있는 전략적 기풍입니다. 복잡한 형세를 파악하고 장기적인 계획을 세우는 데 탁월합니다. 상대의 약점을 정확히 파악하고 공략하는 능력이 뛰어나지만, 때로는 유연성이 필요할 수 있습니다.',
  },
  {
    id: 'INTP',
    category: '분석가형',
    name: '논리학자',
    desc: '수를 분석하고 논리적으로 두는 유형',
    proPlayer: '박정환',
    hashtags: ['#분석적', '#논리적', '#창의적', '#탐구'],
    detailedDesc:
      '끝내기에 강점이 있는 분석적 기풍입니다. 복잡한 수순을 정확히 읽어내고 최선의 수를 찾아냅니다. 새로운 정석과 변화를 연구하는 것을 즐기지만, 실전에서는 신중함이 필요합니다.',
  },
  {
    id: 'ENTJ',
    category: '분석가형',
    name: '통솔자',
    desc: '주도권을 잡고 판을 이끄는 유형',
    proPlayer: '신진서',
    hashtags: ['#리더십', '#결단력', '#효율적', '#목표지향'],
    detailedDesc:
      '포석에서 끝내기까지 전반적으로 강한 공격적 기풍입니다. 주도권을 잡고 판의 흐름을 이끌어가는 능력이 뛰어납니다. 빠른 결단력으로 상대를 압박하지만, 때로는 신중함도 필요합니다.',
  },
  {
    id: 'ENTP',
    category: '분석가형',
    name: '변론가',
    desc: '변화무쌍한 수로 혼란을 주는 유형',
    proPlayer: '이영구',
    hashtags: ['#창의적', '#도전적', '#유연함', '#혁신'],
    detailedDesc:
      '중반 싸움에 강점이 있는 창의적 기풍입니다. 예상치 못한 수로 상대를 당황시키고 새로운 변화를 만들어냅니다. 복잡한 전투를 즐기지만, 안정성도 고려해야 합니다.',
  },
  {
    id: 'INFJ',
    category: '외교관형',
    name: '옹호자',
    desc: '조화롭게 균형을 맞추는 유형',
    proPlayer: '조훈현',
    hashtags: ['#통찰력', '#조화로움', '#이상주의', '#계획적'],
    detailedDesc:
      '전반적으로 균형잡힌 조화로운 기풍입니다. 큰 그림을 보며 균형있게 포석을 펼치고, 상대와의 조화 속에서 기회를 찾아냅니다. 장기적인 안목이 뛰어나지만, 때로는 과감함도 필요합니다.',
  },
  {
    id: 'INFP',
    category: '외교관형',
    name: '중재자',
    desc: '평화롭게 타협점을 찾는 유형',
    proPlayer: '서봉수',
    hashtags: ['#유연함', '#평화로움', '#직관적', '#독창적'],
    detailedDesc:
      '포석에 강점이 있는 유연한 기풍입니다. 상황에 맞춰 적응하며 평화로운 흐름 속에서 자신만의 영역을 만듭니다. 감각적인 수 선택이 뛰어나지만, 때로는 적극성도 필요합니다.',
  },
  {
    id: 'ENFJ',
    category: '외교관형',
    name: '선도자',
    desc: '상대를 이끌며 협력하는 유형',
    proPlayer: '강동윤',
    hashtags: ['#카리스마', '#공감능력', '#열정적', '#조직적'],
    detailedDesc:
      '중반에 강점이 있는 리더십 있는 기풍입니다. 판의 흐름을 주도하며 상대를 자신의 패턴으로 이끌어갑니다. 전체적인 조율 능력이 뛰어나지만, 개인 플레이도 중요합니다.',
  },
  {
    id: 'ENFP',
    category: '외교관형',
    name: '활동가',
    desc: '창의적으로 새로운 길을 여는 유형',
    proPlayer: '김지석',
    hashtags: ['#열정적', '#창의적', '#자유로움', '#호기심'],
    detailedDesc:
      '포석에 강점이 있는 창의적 기풍입니다. 새로운 시도를 두려워하지 않고 참신한 수로 국면을 만들어갑니다. 다양한 가능성을 탐구하지만, 일관성도 필요합니다.',
  },
  {
    id: 'ISTJ',
    category: '관리자형',
    name: '현실주의자',
    desc: '안정적이고 계획적인 유형',
    proPlayer: '최철한',
    hashtags: ['#신중함', '#체계적', '#현실적', '#책임감'],
    detailedDesc:
      '포석과 끝내기에 강점이 있는 안정적 기풍입니다. 정석을 중시하며 체계적으로 판을 만들어갑니다. 실수가 적고 꾸준한 실력을 보여주지만, 때로는 창의성도 필요합니다.',
  },
  {
    id: 'ISFJ',
    category: '관리자형',
    name: '수호자',
    desc: '방어를 탄탄히 하는 유형',
    proPlayer: '유창혁',
    hashtags: ['#성실함', '#보호적', '#세심함', '#안정적'],
    detailedDesc:
      '수비에 강점이 있는 견고한 기풍입니다. 자신의 약점을 먼저 보완하고 탄탄한 기반 위에서 싸웁니다. 인내심이 강하고 실수가 적지만, 때로는 적극성도 필요합니다.',
  },
  {
    id: 'ESTJ',
    category: '관리자형',
    name: '경영자',
    desc: '체계적으로 판을 관리하는 유형',
    proPlayer: '김성룡',
    hashtags: ['#조직적', '#효율적', '#실용적', '#결단력'],
    detailedDesc:
      '전반적으로 균형잡힌 체계적 기풍입니다. 효율적으로 집을 관리하고 실리를 챙기는 능력이 뛰어납니다. 명확한 계획 하에 움직이지만, 유연성도 중요합니다.',
  },
  {
    id: 'ESFJ',
    category: '관리자형',
    name: '집행관',
    desc: '실용적으로 실행하는 유형',
    proPlayer: '원성진',
    hashtags: ['#협력적', '#실용적', '#사교적', '#책임감'],
    detailedDesc:
      '중반 싸움에 강점이 있는 실용적 기풍입니다. 상대의 패턴을 파악하고 그에 맞춰 대응하는 능력이 뛰어납니다. 현실적인 이득을 추구하지만, 큰 그림도 놓치지 말아야 합니다.',
  },
  {
    id: 'ISTP',
    category: '탐험가형',
    name: '장인',
    desc: '순간적 판단으로 두는 유형',
    proPlayer: '이창호',
    hashtags: ['#대담함', '#현실적', '#자유자재', '#장인'],
    detailedDesc:
      '포석에 강점이 있는 실리적 기풍입니다. 판을 본인의 스타일대로 잘 짜며, 위기 상황에서도 잘 대처하는 편입니다. 마지막까지 집중력을 잃지 않도록 주의해야 합니다.',
  },
  {
    id: 'ISFP',
    category: '탐험가형',
    name: '모험가',
    desc: '자유롭게 감각적으로 두는 유형',
    proPlayer: '홍성지',
    hashtags: ['#감각적', '#유연함', '#자유로움', '#예술적'],
    detailedDesc:
      '포석에 강점이 있는 감각적 기풍입니다. 직관적으로 아름다운 수를 찾아내고 자유롭게 두는 스타일입니다. 순간의 감각이 뛰어나지만, 계획성도 필요합니다.',
  },
  {
    id: 'ESTP',
    category: '탐험가형',
    name: '사업가',
    desc: ' 즉각적으로 기회를 잡는 유형',
    proPlayer: '박영훈',
    hashtags: ['#대담함', '#행동력', '#기회포착', '#현실적'],
    detailedDesc:
      '중반 싸움에 강점이 있는 공격적 기풍입니다. 기회를 놓치지 않고 즉각적으로 행동하며 적극적으로 승부를 걸어갑니다. 순발력이 뛰어나지만, 신중함도 필요합니다.',
  },
  {
    id: 'ESFP',
    category: '탐험가형',
    name: '연예인',
    desc: '즐기며 화려하게 두는 유형',
    proPlayer: '김명훈',
    hashtags: ['#열정적', '#즐거움', '#사교적', '#화려함'],
    detailedDesc:
      '전반적으로 화려한 스타일의 기풍입니다. 바둑을 즐기며 역동적이고 재미있는 수를 추구합니다. 에너지가 넘치고 적극적이지만, 냉정함도 필요합니다.',
  },
];

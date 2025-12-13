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
  //////////////////////////////// 분석가형 ////////////////////////////////////////////
  {
    id: 'INTJ',
    category: '분석가형',
    name: '전략가',
    desc: '상대를 읽고 전략을 짜는 유형',
    proPlayerName: '이세돌',
    proPlayerImagePath: '/proPlayers/lee-se-dol.webp',
    hashtags: ['#전략가', '#계획적', '#독립적', '#상상력 풍부', '#통찰력'],
    detailedDesc:
      '상상력이 뛰어나고 호기심이 많아 AI가 제시하는 수보다 자신이 원하는 수를 두는 경향이 있습니다. 합리적인 판단을 하지만, 때로는 지나치게 비판적으로 판단하기에 객관적인 판단력을 기르는 것이 중요합니다.',
  },
  {
    id: 'INTP',
    category: '분석가형',
    name: '논리술사',
    desc: '수를 분석하고 논리적으로 두는 유형',
    proPlayerName: '신민준',
    proPlayerImagePath: '/proPlayers/shin-min-jun.webp',
    hashtags: ['#분석적', '#논리적', '#창의적', '#혁신적'],
    detailedDesc:
      '열린 마음으로 바둑을 두기 때문에 임기응변에 능합니다. 다만 바둑은 마지막 한순간까지 알 수 없기 때문에 조급해하는 마음을 조심할 필요가 있습니다.',
  },
  {
    id: 'ENTJ',
    category: '분석가형',
    name: '통솔자',
    desc: '주도권을 잡고 판을 이끄는 유형',
    proPlayerName: '신진서',
    proPlayerImagePath: '/proPlayers/shin-jin-seo.webp',
    hashtags: ['#리더십', '#결단력', '#효율적', '#목표지향'],
    detailedDesc:
      '포석에서 끝내기까지 전반적으로 강한 공격적 기풍입니다. 주도권을 잡고 판의 흐름을 이끌어가는 능력이 뛰어납니다. 빠른 결단력으로 상대를 압박하지만, 때로는 신중함도 필요합니다.',
  },
  {
    id: 'ENTP',
    category: '분석가형',
    name: '변론가',
    desc: '변화무쌍한 수로 혼란을 주는 유형',
    proPlayerName: '변상일',
    proPlayerImagePath: '/proPlayers/byun-sang-il.webp',
    hashtags: ['#창의적', '#도전적', '#유연함', '#혁신'],
    detailedDesc:
      '중반 싸움에 강점이 있는 창의적 기풍입니다. 예상치 못한 수로 상대를 당황시키고 새로운 변화를 만들어냅니다. 복잡한 전투를 즐기지만, 안정성도 고려해야 합니다.',
  },

  //////////////////////////////// 외교관형 ////////////////////////////////////////////
  {
    id: 'INFJ',
    category: '외교관형',
    name: '옹호자',
    desc: '조화롭게 균형을 맞추는 유형',
    proPlayerName: '박정환',
    proPlayerImagePath: '/proPlayers/park-jung-hwan.webp',
    hashtags: ['#신비함', '#조화로움', '#이상주의', '#계획적'],
    detailedDesc:
      '전반적으로 균형잡힌 조화로운 기풍입니다. 큰 그림을 보며 균형있게 포석을 펼치고, 상대와의 조화 속에서 기회를 찾아냅니다. 장기적인 안목이 뛰어나지만, 때로는 과감함도 필요합니다.',
  },
  {
    id: 'INFP',
    category: '외교관형',
    name: '중재자',
    desc: '평화롭게 타협점을 찾는 유형',
    proPlayerName: '김지석',
    proPlayerImagePath: '/proPlayers/kim-ji-seok.webp',
    hashtags: ['#유연함', '#평화로움', '#직관적', '#독창적'],
    detailedDesc:
      '포석에 강점이 있는 유연한 기풍입니다. 상황에 맞춰 적응하며 평화로운 흐름 속에서 자신만의 영역을 만듭니다. 감각적인 수 선택이 뛰어나지만, 때로는 적극성도 필요합니다.',
  },
  {
    id: 'ENFJ',
    category: '외교관형',
    name: '선도자',
    desc: '상대를 이끌며 협력하는 유형',
    proPlayerName: '송지훈',
    proPlayerImagePath: '/proPlayers/song-ji-hoon.webp',
    hashtags: ['#카리스마', '#공감능력', '#열정적', '#지도자'],
    detailedDesc:
      '호방한 기풍의 소유자로 결단력 있고 화끈한 바둑을 보여줍니다. 상대의 돌을 공격하기 전에 나의 약점을 한 번 더 돌아보라는 위기십결 중 하나인 ‘공피고아’를 마음에 새길 필요가 있습니다.',
  },
  {
    id: 'ENFP',
    category: '외교관형',
    name: '활동가',
    desc: '창의적으로 새로운 길을 여는 유형',
    proPlayerName: '최정',
    proPlayerImagePath: '/proPlayers/choi-jeong.webp',
    hashtags: ['#열정적', '#창의적', '#자유로움', '#호기심'],
    detailedDesc:
      '열정적인 스타일의 기풍으로 새로운 수를 두어 가는 것을 즐기며, 자유롭게 판을 짜는 특징이 있습니다. 다만 무리하지 않고 나의 페이스대로 전투를 유도하는 능력을 키우면 좋습니다.',
  },

  //////////////////////////////// 관리자형 ////////////////////////////////////////////
  {
    id: 'ISTJ',
    category: '관리자형',
    name: '현실주의자',
    desc: '안정적이고 계획적인 유형',
    proPlayerName: '최철한',
    proPlayerImagePath: '/proPlayers/chio-cheol-han.webp',
    hashtags: ['#신중함', '#체계적', '#현실주의자', '#책임감'],
    detailedDesc:
      '실리형의 기풍으로 실전적인 수를 좋아하며, 냉정한 판단을 내릴 수 있습니다. 새로운 수를 두어가는데 주저하지 말고 자신 있게 두려는 노력이 필요합니다.',
  },
  {
    id: 'ISFJ',
    category: '관리자형',
    name: '수호자',
    desc: '방어를 탄탄히 하는 유형',
    proPlayerName: '오유진',
    proPlayerImagePath: '/proPlayers/oh-yu-jin.webp',
    hashtags: ['#성실함', '#보호적', '#세심함', '#안정적'],
    detailedDesc:
      '수비에 강점이 있는 견고한 기풍입니다. 자신의 약점을 먼저 보완하고 탄탄한 기반 위에서 싸웁니다. 인내심이 강하고 실수가 적지만, 때로는 적극성도 필요합니다.',
  },
  {
    id: 'ESTJ',
    category: '관리자형',
    name: '경영자',
    desc: '체계적으로 판을 관리하는 유형',
    proPlayerName: '강동윤',
    proPlayerImagePath: '/proPlayers/kang-dong-yun.webp',
    hashtags: ['#조직적', '#효율적', '#실용적', '#결단력'],
    detailedDesc:
      '전반적으로 균형잡힌 체계적 기풍입니다. 세력보단 실리를 추구하며 추상적인 것보다 사실적인 것을 선호합니다. 명확한 계획 하에 움직이지만, 창의적인 수를 많이 두어보는 노력도 필요합니다.',
  },
  {
    id: 'ESFJ',
    category: '관리자형',
    name: '집행관',
    desc: '실용적으로 실행하는 유형',
    proPlayerName: '원성진',
    proPlayerImagePath: '/proPlayers/won-seong-jin.webp',
    hashtags: ['#협력적', '#실용적', '#사교적', '#책임감'],
    detailedDesc:
      '중반 싸움에 강점이 있는 실용적 기풍입니다. 상대의 패턴을 파악하고 그에 맞춰 대응하는 능력이 뛰어납니다. 현실적인 이득을 추구하지만, 큰 그림도 놓치지 말아야 합니다.',
  },

  //////////////////////////////// 탐험가형 ////////////////////////////////////////////
  {
    id: 'ISTP',
    category: '탐험가형',
    name: '장인',
    desc: '순간적 판단으로 두는 유형',
    proPlayerName: '이창석',
    proPlayerImagePath: '/proPlayers/lee-chang-seok.webp',
    hashtags: ['#대담함', '#현실적', '#자유자재', '#장인'],
    detailedDesc:
      '포석에 강점이 있는 실리적 기풍입니다. 판을 본인의 스타일대로 잘 짜며, 위기 상황에서도 잘 대처하는 편입니다. 마지막까지 집중력을 잃지 않도록 주의해야 합니다.',
  },
  {
    id: 'ISFP',
    category: '탐험가형',
    name: '모험가',
    desc: '자유롭게 감각적으로 두는 유형',
    proPlayerName: '허서현',
    proPlayerImagePath: '/proPlayers/heo-seo-hyeon.webp',
    hashtags: ['#감각적', '#유연함', '#자유로움', '#예술적'],
    detailedDesc:
      '유연한 행마를 선호하는 실리적인 기풍으로, 열정적이며 꾸준한 모습을 보여줍니다. 혼자만의 생각에 빠지지 않게 주의할 필요가 있습니다.',
  },
  {
    id: 'ESTP',
    category: '탐험가형',
    name: '사업가',
    desc: '즉각적으로 기회를 잡는 유형',
    proPlayerName: '김진휘',
    proPlayerImagePath: '/proPlayers/kim-jin-hwi.webp',
    hashtags: ['#대담함', '#행동력', '#기회포착', '#현실적'],
    detailedDesc:
      '대담하게 승부에 임해 새로운 수에 대한 두려움이 없습니다. 하지만 좋은 바둑도 쉽게 역전 당할 수 있으니 차분하게 둘 필요가 있습니다.',
  },
  {
    id: 'ESFP',
    category: '탐험가형',
    name: '연예인',
    desc: '즐기며 화려하게 두는 유형',
    proPlayerName: '송규상',
    proPlayerImagePath: '/proPlayers/song-gyu-sang.webp',
    hashtags: ['#열정적', '#즐거움', '#사교적', '#화려함'],
    detailedDesc:
      '전반적으로 화려한 스타일의 기풍입니다. 바둑을 즐기며 역동적이고 재미있는 수를 추구합니다. 에너지가 넘치고 적극적이지만, 냉정함도 필요합니다.',
  },
];

export interface IMBTI {
  id: MbtiTypes;
  type: string;
  detailType: string;
  pro: string;
  tags?: string[];
  description: string;
}

export const MBTIS: IMBTI[] = [
  //////////////////////////////// 분석가형 ////////////////////////////////////////////

  {
    id: 'INTJ',
    type: '분석가형',
    detailType: '전략가',
    pro: '한승주',
    tags: ['계획성', '상상력_풍부', '전략가'],
    description:
      '상상력이 뛰어나고 호기심이 많아 AI가 제시하는 수보다 자신이 원하는 수를 두는 경향이 있습니다. 합리적인 판단을 하지만, 때로는 지나치게 비판적으로 판단하기에 객관적인 판단력을 기르는 것이 중요합니다.',
  },
  {
    id: 'INTP',
    type: '분석가형',
    detailType: '논리술사',
    pro: '문민종',
    tags: ['지식_갈망', '혁신적', '발명가'],
    description:
      '열린 마음으로 바둑을 두기 때문에 임기응변에 능합니다. 다만 바둑은 마지막 한순간까지 알 수 없기 때문에 조급해하는 마음을 조심할 필요가 있습니다.',
  },
  {
    id: 'ENTJ',
    type: '분석가형',
    detailType: '통솔자',
    pro: '신진서',
    tags: ['문제_해결', '대담', '의지가_강함', '지도자'],
    description:
      '자신감이 좋고, 한 수 한 수 효율적인 수를 추구합니다. 형세가 좋을 때 방심하지 않는 것이 좋습니다.',
  },
  {
    id: 'ENTP',
    type: '분석가형',
    detailType: '변론가',
    pro: '변상일',
    tags: ['지적_도전', '영리함', '호기심', '사색가'],
    description:
      '모든 각도에서 문제를 해결하는 능력을 갖춰 수읽기에 강점을 보입니다. 다만 한 곳 한 곳 집중을 기울이기 때문에 집중력과 체력을 유지하는 것이 중요합니다.',
  },
  //////////////////////////////// 외교관형 ////////////////////////////////////////////
  {
    id: 'INFJ',
    type: '외교관형',
    detailType: '옹호자',
    pro: '박정환',
    tags: ['신비함', '의욕_UP', '이상주의자'],
    description:
      '차분하게 두어 가며 밸런스를 맞춰가는 기풍입니다. 완벽주의 성향을 가지고 있어 정확한 판단을 내리고자 하는 경향이 있습니다.',
  },
  {
    id: 'INFP',
    type: '외교관형',
    detailType: '중재자',
    pro: '김지석',
    tags: ['선함', '부드럽고_친절', '이타주의자'],
    description:
      '자신의 수와 판단에 믿음을 가지고 끝까지 두어 가는 기풍입니다. 자책하는 경우가 종종 있어 의욕을 상실하기도 합니다.',
  },
  {
    id: 'ENFJ',
    type: '외교관형',
    detailType: '선도자',
    pro: '박진솔',
    tags: ['사로잡다', '의욕_UP', '카리스마', '지도자'],
    description:
      '호방한 기풍의 소유자로 결단력 있고 화끈한 바둑을 보여줍니다. 상대의 돌을 공격하기 전에 나의 약점을 한 번 더 돌아보라는 위기십결 중 하나인 ‘공피고아’를 마음에 새길 필요가 있습니다.',
  },
  {
    id: 'ENFP',
    type: '외교관형',
    detailType: '활동가',
    pro: '최정',
    tags: ['열정적', '창의적', '긍정적', '사교적', '자유로운_영혼'],
    description:
      '열정적인 스타일의 기풍으로 새로운 수를 두어 가는 것을 즐기며, 자유롭게 판을 짜는 특징이 있습니다. 다만 무리하지 않고 나의 페이스대로 전투를 유도하는 능력을 키우면 좋습니다.',
  },
  //////////////////////////////// 관리자형 ////////////////////////////////////////////
  {
    id: 'ISTJ',
    type: '관리자형',
    detailType: '현실주의자',
    pro: '이동훈',
    tags: ['사실_중시', '믿음직', '현실주의자'],
    description:
      '실리형의 기풍으로 실전적인 수를 좋아하며, 냉정한 판단을 내릴 수 있습니다. 새로운 수를 두어가는데 주저하지 말고 자신 있게 두려는 노력이 필요합니다.',
  },
  {
    id: 'ISFJ',
    type: '관리자형',
    detailType: '수호자',
    pro: '오유진',
    tags: ['보호', '헌신적', '따뜻한_수호자'],
    description:
      '안정적으로 두텁게 판을 짜며 반격을 노립니다. 때로는 안정적인 수보다 반발을 생각해 보는 노력이 필요합니다.',
  },
  {
    id: 'ESTJ',
    type: '관리자형',
    detailType: '경영자',
    pro: '강동윤',
    tags: ['관리', '사람도_관리', '경영자'],
    description:
      '세력보단 실리를 추구하며 추상적인 것보다 사실적인 것을 선호합니다. 창의적인 수를 많이 두어보도록 노력해야 합니다.',
  },
  {
    id: 'ESFJ',
    type: '관리자형',
    detailType: '집정관',
    pro: '송지훈',
    tags: ['배려심', '사교성_업', '마당발'],
    description:
      '집중력이 뛰어나고 바둑이 안정적입니다. 하지만 새로운 모양에 대한 두려움이 있습니다. 틀에 갇히지 않게 주의해야 합니다.',
  },
  //////////////////////////////// 탐험가형 ////////////////////////////////////////////
  {
    id: 'ISTP',
    type: '탐험가형',
    detailType: '장인',
    pro: '이창석',
    tags: ['대담함', '현실적', '자유자재', '장인'],
    description:
      '포석에 강점이 있는 실리적 기풍입니다. 판을 본인의 스타일대로 잘 짜며, 위기 상황에서도 잘 대처하는 편입니다. 마지막까지 집중력을 잃지 않도록 주의해야 합니다.',
  },
  {
    id: 'ISFP',
    type: '탐험가형',
    detailType: '모험가',
    pro: '허서현',
    tags: ['새로운_경험', '유연함', '매력_넘침', '예술가'],
    description:
      '유연한 행마를 선호하는 실리적인 기풍으로, 열정적이며 꾸준한 모습을 보여줍니다. 혼자만의 생각에 빠지지 않게 주의할 필요가 있습니다.',
  },
  {
    id: 'ESTP',
    type: '탐험가형',
    detailType: '사업가',
    pro: '김은지',
    tags: ['사로잡다', '의욕_UP', '카리스마', '지도자'],
    description:
      '대담하게 승부에 임해 새로운 수에 대한 두려움이 없습니다. 하지만 좋은 바둑도 쉽게 역전 당할 수 있으니 차분하게 둘 필요가 있습니다.',
  },
  {
    id: 'ESFP',
    type: '탐험가형',
    detailType: '연예인',
    pro: '송규상',
    tags: ['즉흥적', '넘치는_에너지', '열정', '연예인'],
    description:
      '새로운 관점을 보여주고 트랜디한 바둑을 구사합니다. 바둑 외적으로도 많은 재주를 가지고 있어 다양한 활동을 하기도 합니다.',
  },
];

export const mbtiTypesList: MbtiTypes[] = [
  'INTP',
  'INTJ',
  'INFP',
  'INFJ',
  'ISTP',
  'ISTJ',
  'ISFP',
  'ISFJ',
  'ENTP',
  'ENTJ',
  'ENFP',
  'ENFJ',
  'ESTP',
  'ESTJ',
  'ESFP',
  'ESFJ',
];
export type MbtiTypes =
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

export interface IAllMbtiPecentage {
  INTP: number;
  INTJ: number;
  INFP: number;
  INFJ: number;
  ISTP: number;
  ISTJ: number;
  ISFP: number;
  ISFJ: number;
  ENTP: number;
  ENTJ: number;
  ENFP: number;
  ENFJ: number;
  ESTP: number;
  ESTJ: number;
  ESFP: number;
  ESFJ: number;
}

export const analystTypeMbti = MBTIS.slice(0, 4); //분석가형
export const diplomaticTypeMbti = MBTIS.slice(4, 8); //외교관형
export const administrativeTypeMbti = MBTIS.slice(8, 12); //관리자형
export const explorerTypeMbti = MBTIS.slice(12, 16); //탐험가형

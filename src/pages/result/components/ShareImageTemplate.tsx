import { forwardRef } from 'react';
import { BarChart3, Sparkles } from 'lucide-react';

import { mbtiCategoryThemes } from '@/data/mbtiData';
import { useMbtiStats } from '@/hooks/query/useMbtiStats';
import type { MbtiDetail } from '@/types/mbti';
import { formatPercentage } from '@/utils/formatPercentage';

interface ShareImageTemplateProps {
  userName: string | null;
  mbtiDetail: MbtiDetail;
}

const ShareImageTemplate = forwardRef<HTMLDivElement, ShareImageTemplateProps>(({ userName, mbtiDetail }, ref) => {
  const { data: mbtiStats } = useMbtiStats();

  const theme = mbtiCategoryThemes[mbtiDetail.category];

  return (
    <div className='fixed top-0 left-[-9999px] -z-50 opacity-0 pointer-events-none'>
      <div ref={ref} className='w-[400px] bg-[#f5f5f7] p-6 rounded-3xl font-sans'>
        {/* 1. 히어로 섹션 */}
        <div className='mb-6'>
          <div className={`relative bg-linear-to-r ${theme.color} rounded-3xl shadow-xl overflow-hidden`}>
            {/* 데코레이션 */}
            <div className='absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-lg' />
            <div className='absolute bottom-4 left-4 w-24 h-24 bg-white/10 rounded-full blur-xl' />

            <div className='relative px-6 py-12 text-center'>
              <div className='inline-block bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4'>
                <div className='text-white/90'>
                  {userName && <span className='text-lg font-bold'>{userName}</span>}
                  <span className='text-base font-semibold'>{userName ? '님의' : '나의'} 바둑 MBTI</span>
                </div>
              </div>
              <h1 className='text-white mb-3 tracking-widest text-5xl font-bold'>{mbtiDetail.id}</h1>
              <h2 className='text-white/95 text-xl font-medium mb-2'>{mbtiDetail.name}</h2>
              <p className='text-white/80 text-sm'>{mbtiDetail.desc}</p>
            </div>
          </div>
        </div>

        {/* 2. 통계 및 상세 정보 */}
        <div className='bg-white rounded-2xl shadow-lg p-5 space-y-5'>
          {/* 통계 헤더 */}
          <div className='flex items-center gap-3 pb-4 border-b border-gray-100'>
            <div
              className={`flex items-center justify-center w-12 h-12 rounded-xl bg-linear-to-br ${theme.color} text-white shadow-md`}
            >
              <BarChart3 size={20} strokeWidth={2.5} />
            </div>
            <div className='flex-1 grid grid-cols-2 gap-2'>
              <div className='bg-gray-50 rounded-lg p-2.5'>
                <div className='text-gray-400 text-[10px] mb-0.5'>사용자 비율</div>
                <div className={`text-xl font-bold bg-linear-to-r ${theme.color} bg-clip-text text-transparent`}>
                  {mbtiStats ? `${formatPercentage(mbtiStats[mbtiDetail.id])}%` : '-'}
                </div>
              </div>
              <div className='bg-gray-50 rounded-lg p-2.5'>
                <div className='text-gray-400 text-[10px] mb-0.5'>대표 기사</div>
                <div className='text-gray-700 text-sm font-bold truncate'>{mbtiDetail.proPlayer}</div>
              </div>
            </div>
          </div>

          {/* 특징 설명 */}
          <div>
            <div className='flex items-center gap-2 mb-2'>
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-lg bg-linear-to-br ${theme.color} shadow-sm`}
              >
                <Sparkles size={14} className='text-white' strokeWidth={2.5} />
              </div>
              <span className='text-gray-800 text-sm font-bold'>성격 특징</span>
            </div>
            <p className='text-gray-600 text-sm leading-relaxed text-justify'>{mbtiDetail.detailedDesc}</p>
          </div>

          {/* 해시태그 */}
          <div className='flex flex-wrap gap-1.5 pt-2'>
            {mbtiDetail.hashtags.map((tag, i) => (
              <span
                key={i}
                className={`px-2.5 py-1.5 rounded-md text-[11px] font-medium bg-linear-to-r ${theme.color} text-white shadow-sm`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 바둑 MBTI 로고/푸터 */}
        <div className='mt-6 text-center opacity-50'>
          <span className='text-[10px] text-gray-400 font-medium tracking-widest'>BADUK MBTI TEST</span>
        </div>
      </div>
    </div>
  );
});

ShareImageTemplate.displayName = 'ShareImageTemplate';

export default ShareImageTemplate;

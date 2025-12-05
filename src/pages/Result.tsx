import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Sparkles } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router';

import { Badge } from '@/components/figma/badge';
import { Button } from '@/components/figma/button';
import { mbtiCategoryThemes, mbtiDetails } from '@/data/mbtiData';
import { useMbtiStats } from '@/hooks/query/useMbtiStats';
import type { Mbti } from '@/types/mbti';
import { formatPercentage } from '@/utils/formatPercentage';

export default function Result() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { data: mbtiStats, isLoading, isError } = useMbtiStats();

  const testResult: Mbti | undefined = state?.testResult ?? 'ENFJ';

  useEffect(() => {
    if (!testResult) {
      navigate('/', { replace: true });
    }
  }, [testResult, navigate]);

  const mbtiDetail = mbtiDetails.find((m) => m.id === testResult);

  if (!testResult || !mbtiDetail) {
    return null;
  }

  const theme = mbtiCategoryThemes[mbtiDetail.category];

  return (
    <div className='min-h-screen overflow-x-hidden'>
      <div className='relative z-10 pt-24 pb-16 px-6'>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='max-w-6xl mx-auto mb-12'
        >
          <div className={`relative bg-linear-to-r ${theme.color} rounded-3xl shadow-2xl overflow-hidden`}>
            {/* 데코레이션 바둑돌 */}
            <div className='absolute top-8 right-8 w-24 h-24 bg-white/10 rounded-full blur-xl' />
            <div className='absolute bottom-8 left-8 w-32 h-32 bg-white/10 rounded-full blur-2xl' />

            <div className='relative px-8 py-16 md:px-16 md:py-20 text-center'>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className='inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6'>
                  <span className='text-white/90 text-sm'>나의 바둑 MBTI는?</span>
                </div>
                <h1 className='text-white mb-4 tracking-widest text-6xl md:text-7xl'>{mbtiDetail.id}</h1>
                <h2 className='text-white/95 text-2xl md:text-3xl mb-3'>{mbtiDetail.name}</h2>
                <p className='text-white/80 text-lg md:text-xl'>{mbtiDetail.desc}</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* 3단 그리드 레이아웃 */}
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
          {/* 통계 카드 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className='bg-white rounded-2xl shadow-xl p-8'
            style={{ borderTopColor: `rgb(var(--${theme.color}))` }}
          >
            <div className='text-center mb-6'>
              <motion.div
                className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-linear-to-br ${theme.color} mb-4 shadow-lg`}
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <BarChart3 className='w-10 h-10 text-white' strokeWidth={2.5} />
              </motion.div>
              <h3 className='text-gray-800 mb-4'>통계</h3>
            </div>

            <div className='space-y-6'>
              {/* 비율 */}
              <div className='bg-linear-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center'>
                <div className='text-gray-500 text-sm mb-2'>전체 사용자 비율</div>
                {isLoading ? (
                  <div className='h-6 w-12 mx-auto bg-gray-200 rounded animate-pulse' />
                ) : isError ? (
                  <div className='text-gray-400'>-</div>
                ) : (
                  <div className={`text-4xl bg-linear-to-r ${theme.color} bg-clip-text text-transparent`}>
                    {formatPercentage(mbtiStats?.[testResult])}%
                  </div>
                )}
              </div>

              {/* 대표 프로기사 */}
              <div className='bg-linear-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center'>
                <div className='text-gray-500 text-sm mb-2'>대표 프로기사</div>
                <div className='text-gray-800 text-xl'>{mbtiDetail.proPlayer}</div>
              </div>
            </div>
          </motion.div>

          {/* 상세 설명 카드 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className='bg-white rounded-2xl shadow-xl p-8 md:col-span-2'
          >
            <div className='mb-6'>
              <motion.div
                className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-linear-to-br ${theme.color} mb-4 shadow-lg relative`}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Sparkles className='w-10 h-10 text-white' strokeWidth={2.5} />
                <motion.div
                  className='absolute inset-0 rounded-2xl'
                  animate={{
                    boxShadow: [
                      '0 0 0px rgba(255, 255, 255, 0)',
                      '0 0 20px rgba(255, 255, 255, 0.5)',
                      '0 0 0px rgba(255, 255, 255, 0)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </motion.div>
              <h3 className='text-gray-800 mb-2'>상세 설명</h3>
            </div>

            <p className='text-gray-700 leading-relaxed text-lg mb-8'>{mbtiDetail.detailedDesc}</p>

            {/* 해시태그 */}
            <div className='flex flex-wrap gap-3'>
              {mbtiDetail.hashtags.map((tag, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <Badge
                    variant='secondary'
                    className={`bg-linear-to-r ${theme.color} text-white border-0 px-5 py-2 text-sm shadow-lg`}
                  >
                    {tag}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className='max-w-6xl mx-auto'
        >
          <div className='relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden'>
            <div className='relative text-center'>
              <h3 className='text-gray-800 mb-4'>다른 바둑 MBTI 유형이 궁금하신가요?</h3>
              <p className='text-gray-600 mb-8'>16가지 바둑 스타일을 모두 확인해보세요</p>

              <Link to='/all-types'>
                <Button
                  size='lg'
                  className='bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white px-12 py-7 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 text-lg'
                >
                  <span className='flex items-center gap-3'>
                    16가지 유형 모두 보기
                    <motion.span animate={{ x: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                      →
                    </motion.span>
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Share2, Sparkles } from 'lucide-react';
import { Link, useNavigate, useSearchParams } from 'react-router';

import { Badge } from '@/components/figma/badge';
import { Button } from '@/components/figma/button';
import { mbtiCategoryThemes, mbtiDetails } from '@/data/mbtiData';
import { useMbtiStats } from '@/hooks/query/useMbtiStats';
import Share from '@/pages/result/components/Share';
import type { Mbti } from '@/types/mbti';
import { formatPercentage } from '@/utils/formatPercentage';

export default function Result() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const { data: mbtiStats, isLoading, isError } = useMbtiStats();

  const mbtiParam = searchParams.get('mbti');
  const nameParam = searchParams.get('name');
  const typeParam = searchParams.get('type');

  // mbtiParam이 유효한 Mbti 타입인지 확인하는 로직이 있으면 좋겠지만,
  // 일단 기존 로직(testResult가 없으면 리다이렉트)에 의해 처리되도록 함.
  // 단, 'ENFJ' 기본값은 제거하거나 유지할지 결정해야 함.
  // 기존 코드: const testResult: Mbti | undefined = state?.testResult ?? 'ENFJ';
  // query param이 없을 때 기본값을 주면 리다이렉트가 안 되므로,
  // param이 없으면 undefined가 되게 하여 useEffect에서 처리하게 하거나,
  // 유효하지 않은 값이면 'ENFJ'로 fallback 할 수도 있음.
  // 사용자가 "state가 아니라 ?mbti=~~ 로 받도록" 이라고 했으므로, URL에 의존적이어야 함.
  const testResult = (mbtiParam as Mbti) || 'ENFJ';

  // name state를 여기서 관리 (URL param이 있으면 초기값으로 설정)
  const [userName, setUserName] = useState(nameParam || '');

  useEffect(() => {
    if (!testResult) {
      navigate('/', { replace: true });
    }

    // type이 share이면 공유 모달 띄우기 (name 유무와 상관없이 share type이면 띄움)
    if (typeParam === 'share') {
      setIsShareModalOpen(true);
    }
  }, [testResult, navigate, typeParam]);

  const mbtiDetail = mbtiDetails.find((m) => m.id === testResult);

  if (!testResult || !mbtiDetail) {
    return null;
  }

  const theme = mbtiCategoryThemes[mbtiDetail.category];

  return (
    <div className='flex-1 relative z-10'>
      {/* 히어로 배너 */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className='max-w-6xl mx-auto mb-6 md:mb-12'
      >
        <div className={`relative bg-linear-to-r ${theme.color} rounded-3xl shadow-2xl overflow-hidden`}>
          {/* 데코레이션 바둑돌 */}
          <div className='absolute top-8 right-8 w-24 h-24 bg-white/10 rounded-full blur-xl' />
          <div className='absolute bottom-8 left-8 w-32 h-32 bg-white/10 rounded-full blur-2xl' />

          <div className='relative px-6 py-16 md:px-16 md:py-20 text-center'>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className='inline-block bg-white/20 backdrop-blur-sm px-4 py-2 md:px-6 md:py-2 rounded-full mb-5 md:mb-6'>
                <span className='text-white/90 text-md font-semibold'>
                  {userName ? `${userName}님의` : '나의'} 바둑 MBTI
                </span>
              </div>
              <h1 className='text-white mb-4 md:mb-4 tracking-widest text-6xl md:text-7xl'>{mbtiDetail.id}</h1>
              <h2 className='text-white/95 text-2xl md:text-3xl mb-3 md:mb-3'>{mbtiDetail.name}</h2>
              <p className='text-white/80 text-lg md:text-xl'>{mbtiDetail.desc}</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* 모바일 레이아웃 (한 화면에 다 들어가도록) */}
      <div className='md:hidden max-w-6xl mx-auto space-y-4 mb-6'>
        {/* 통계 + 해시태그 콤팩트 카드 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className='bg-white rounded-2xl shadow-xl p-6'
        >
          {/* 통계 섹션 */}
          <div className='flex items-center gap-4 mb-6 pb-6 border-b border-gray-200'>
            <motion.div
              className={`flex items-center justify-center w-14 h-14 rounded-xl bg-linear-to-br ${theme.color} shadow-lg shrink-0`}
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
              <BarChart3 className='w-7 h-7 text-white' strokeWidth={2.5} />
            </motion.div>

            <div className='flex-1 grid grid-cols-2 gap-3'>
              <div className='bg-linear-to-br from-gray-50 to-gray-100 rounded-lg p-3'>
                <div className='text-gray-500 text-xs mb-1'>사용자 비율</div>
                {isLoading ? (
                  <div className='h-6 w-12 mx-auto bg-gray-200 rounded animate-pulse' />
                ) : isError ? (
                  <div className='text-gray-400'>-</div>
                ) : (
                  <div className={`text-2xl bg-linear-to-r ${theme.color} bg-clip-text text-transparent`}>
                    {formatPercentage(mbtiStats?.[testResult])}%
                  </div>
                )}
              </div>
              <div className='bg-linear-to-br from-gray-50 to-gray-100 rounded-lg p-3'>
                <div className='text-gray-500 text-xs mb-1'>대표 기사</div>
                <div className='text-gray-800 text-base leading-tight'>{mbtiDetail.proPlayer}</div>
              </div>
            </div>
          </div>

          {/* 상세 설명 */}
          <div className='mb-5'>
            <div className='flex items-center gap-2 mb-3'>
              <motion.div
                className={`flex items-center justify-center w-10 h-10 rounded-lg bg-linear-to-br ${theme.color} shadow-md`}
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Sparkles className='w-5 h-5 text-white' strokeWidth={2.5} />
              </motion.div>
              <h3 className='text-gray-800 text-base'>특징</h3>
            </div>

            <p className='text-gray-700 leading-relaxed text-md'>{mbtiDetail.detailedDesc}</p>
          </div>

          {/* 해시태그 */}
          <div className='flex flex-wrap gap-2'>
            {mbtiDetail.hashtags.map((tag, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.05 }}
              >
                <Badge
                  variant='secondary'
                  className={`bg-linear-to-r ${theme.color} text-white border-0 px-3 py-2 text-xs shadow-md`}
                >
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 데스크탑/태블릿 레이아웃 */}
      <div className='hidden md:grid max-w-6xl mx-auto grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
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

      {/* 공유하기 섹션 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className='max-w-6xl mx-auto mb-8'
      >
        <div className='relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden'>
          {/* 배경 글로우 데코레이션 */}
          <div className='absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-blue-200 via-purple-200 to-pink-200 rounded-full blur-3xl opacity-30' />
          <div className='absolute bottom-0 left-0 w-48 h-48 bg-linear-to-tr from-indigo-200 to-purple-200 rounded-full blur-3xl opacity-30' />

          <div className='relative text-center'>
            <motion.div
              className='inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 mb-6 shadow-lg'
              animate={{
                rotate: [0, 15, -15, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Share2 className='w-10 h-10 text-white' strokeWidth={2.5} />
            </motion.div>

            <h3 className='text-gray-800 mb-3'>친구들과 결과를 공유해보세요!</h3>
            <p className='text-gray-600 mb-8'>친구들의 바둑 스타일도 알아보고 비교해보세요</p>

            <Button
              onClick={() => setIsShareModalOpen(true)}
              size='lg'
              className='bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white px-12 py-7 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 relative overflow-hidden group'
            >
              {/* 반짝이는 오버레이 효과 */}
              <div className='absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000' />

              <span className='flex items-center gap-3 relative z-10'>
                <span className='text-lg'>공유하기</span>
                <motion.span
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <Sparkles className='w-5 h-5 text-yellow-300' fill='currentColor' />
                </motion.span>
              </span>
            </Button>
          </div>
        </div>
      </motion.div>

      {isShareModalOpen && (
        <Share
          open={isShareModalOpen}
          onOpenChange={setIsShareModalOpen}
          mbtiDetail={mbtiDetail}
          userName={userName}
          onUserNameChange={setUserName}
        />
      )}

      {/* 다른 유형도 살펴보기 */}
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
  );
}

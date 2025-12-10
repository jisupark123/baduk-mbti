import { motion } from 'framer-motion';
import { Brain, Smartphone, Sparkles, Target, Users } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { Link } from 'react-router';

import { Button } from '@/components/figma/button';

export default function Intro() {
  const shareUrl = import.meta.env.VITE_APP_URL;

  return (
    <div className=''>
      {/* 배경 격자 무늬 */}
      <div className='absolute inset-0 opacity-5'>
        <div className='grid grid-cols-8 grid-rows-8 h-full w-full max-w-2xl mx-auto'>
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className='border border-purple-400' />
          ))}
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <div className='relative z-10'>
        <div className='max-w-6xl mx-auto'>
          {/* 히어로 섹션 */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center mb-12 md:mb-16'
          >
            <h1 className='text-4xl md:text-6xl mb-4 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'>
              바둑으로 알아보는 MBTI
            </h1>
            <p className='text-gray-600 text-lg md:text-xl max-w-2xl mx-auto'>
              당신의 바둑 스타일로 알아보는 성격 유형 테스트
            </p>
          </motion.div>

          {/* 메인 카드 그리드 */}
          <div className='grid md:grid-cols-2 gap-8 mb-12'>
            {/* 소개 카드 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className='bg-white rounded-3xl shadow-2xl p-8 md:p-10'
            >
              <div className='space-y-6'>
                <div className='flex items-center gap-4 mb-6'>
                  <motion.div
                    className='flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-indigo-500 to-purple-500 shadow-lg'
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <Brain className='w-8 h-8 text-white' strokeWidth={2.5} />
                  </motion.div>
                  <h2 className='text-2xl text-gray-800'>서비스 소개</h2>
                </div>

                <div className='space-y-5'>
                  <div className='flex gap-4'>
                    <div className='shrink-0 w-10 h-10 rounded-xl bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-md'>
                      <Target className='w-5 h-5 text-white' strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className='text-gray-800 mb-1'>직관적인 선택</h3>
                      <p className='text-gray-600 text-sm leading-relaxed'>
                        4개의 바둑 상황에서 한눈에 끌리는 수를 선택하세요
                      </p>
                    </div>
                  </div>

                  <div className='flex gap-4'>
                    <div className='shrink-0 w-10 h-10 rounded-xl bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-md'>
                      <Sparkles className='w-5 h-5 text-white' strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className='text-gray-800 mb-1'>16가지 유형</h3>
                      <p className='text-gray-600 text-sm leading-relaxed'>
                        MBTI 기반의 16가지 바둑 스타일을 확인하세요
                      </p>
                    </div>
                  </div>

                  <div className='flex gap-4'>
                    <div className='shrink-0 w-10 h-10 rounded-xl bg-linear-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-md'>
                      <Users className='w-5 h-5 text-white' strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className='text-gray-800 mb-1'>친구와 공유</h3>
                      <p className='text-gray-600 text-sm leading-relaxed'>
                        친구들의 바둑 스타일도 알아보고 비교해보세요
                      </p>
                    </div>
                  </div>
                </div>

                {/* 시작하기 버튼 */}
                <div className='pt-6'>
                  <Link to='/'>
                    <Button
                      size='lg'
                      className='w-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white py-7 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group'
                    >
                      <div className='absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000' />
                      <span className='relative z-10 flex items-center justify-center gap-3 text-lg'>
                        <span>테스트 시작하기</span>
                        <motion.span
                          animate={{
                            x: [0, 5, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        >
                          →
                        </motion.span>
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* QR 코드 카드 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className='bg-white rounded-3xl shadow-2xl p-8 md:p-10 relative overflow-hidden'
            >
              {/* 배경 글로우 */}
              <div className='absolute top-0 right-0 w-40 h-40 bg-linear-to-br from-blue-200 to-purple-200 rounded-full blur-3xl opacity-30' />
              <div className='absolute bottom-0 left-0 w-32 h-32 bg-linear-to-tr from-pink-200 to-indigo-200 rounded-full blur-3xl opacity-30' />

              <div className='relative space-y-6'>
                <div className='flex items-center gap-4 mb-6'>
                  <motion.div
                    className='flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 shadow-lg'
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <Smartphone className='w-8 h-8 text-white' strokeWidth={2.5} />
                  </motion.div>
                  <h2 className='text-2xl text-gray-800'>모바일로 접속</h2>
                </div>

                <p className='text-gray-600 leading-relaxed'>
                  스마트폰으로 QR 코드를 스캔하면
                  <br />
                  언제 어디서나 테스트를 시작할 수 있어요
                </p>

                {/* 가상 QR 코드 아이콘 */}
                <div className='flex justify-center py-8'>
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className='relative'
                  >
                    {/* 글로우 효과 */}
                    <div className='absolute -inset-6 bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 rounded-3xl blur-2xl opacity-30' />

                    {/* QR 아이콘 */}
                    <div className='relative bg-linear-to-br from-white to-gray-50 p-8 rounded-2xl shadow-2xl border border-gray-100'>
                      <motion.div
                        animate={{
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        <QRCodeSVG
                          value={shareUrl}
                          size={128}
                          bgColor='transparent'
                          fgColor='#1f2937'
                          level='H'
                          className='w-32 h-32'
                        />
                      </motion.div>

                      {/* 4개의 코너 마크 */}
                      <div className='absolute top-4 left-4 w-6 h-6 border-l-4 border-t-4 border-indigo-500 rounded-tl-lg' />
                      <div className='absolute top-4 right-4 w-6 h-6 border-r-4 border-t-4 border-purple-500 rounded-tr-lg' />
                      <div className='absolute bottom-4 left-4 w-6 h-6 border-l-4 border-b-4 border-pink-500 rounded-bl-lg' />
                      <div className='absolute bottom-4 right-4 w-6 h-6 border-r-4 border-b-4 border-blue-500 rounded-br-lg' />
                    </div>
                  </motion.div>
                </div>

                {/* 안내 문구 */}
                <div className='space-y-2 text-sm'>
                  <div className='flex items-center gap-3 text-gray-600'>
                    <div className='w-2 h-2 rounded-full bg-linear-to-r from-blue-500 to-purple-500' />
                    <span>카메라로 QR 코드 스캔</span>
                  </div>
                  <div className='flex items-center gap-3 text-gray-600'>
                    <div className='w-2 h-2 rounded-full bg-linear-to-r from-purple-500 to-pink-500' />
                    <span>링크를 열어 테스트 시작</span>
                  </div>
                  <div className='flex items-center gap-3 text-gray-600'>
                    <div className='w-2 h-2 rounded-full bg-linear-to-r from-pink-500 to-rose-500' />
                    <span>친구들과 결과 공유하기</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 특징 섹션 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className='bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden'
          >
            {/* 배경 장식 */}
            <div className='absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-blue-100 via-purple-100 to-pink-100 rounded-full blur-3xl opacity-50' />
            <div className='absolute bottom-0 left-0 w-48 h-48 bg-linear-to-tr from-indigo-100 to-purple-100 rounded-full blur-3xl opacity-50' />

            <div className='relative'>
              <div className='text-center mb-10'>
                <motion.div
                  className='inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-orange-500 to-red-500 shadow-lg mb-4'
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <Sparkles className='w-8 h-8 text-white' strokeWidth={2.5} />
                </motion.div>
                <h2 className='text-2xl md:text-3xl text-gray-800 mb-3'>왜 바둑 MBTI인가요?</h2>
                <p className='text-gray-600 max-w-2xl mx-auto'>바둑은 성격이 드러나는 게임입니다</p>
              </div>

              <div className='grid md:grid-cols-3 gap-6'>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className='text-center p-6 rounded-2xl bg-linear-to-br from-blue-50 to-cyan-50'
                >
                  <div className='text-4xl mb-4'>⚔️</div>
                  <h3 className='text-gray-800 mb-2'>공격 vs 수비</h3>
                  <p className='text-gray-600 text-sm'>
                    적극적으로 공격하나요?
                    <br />
                    안전하게 수비하나요?
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className='text-center p-6 rounded-2xl bg-linear-to-br from-purple-50 to-pink-50'
                >
                  <div className='text-4xl mb-4'>🎨</div>
                  <h3 className='text-gray-800 mb-2'>창의 vs 정석</h3>
                  <p className='text-gray-600 text-sm'>
                    새로운 수를 시도하나요?
                    <br />
                    검증된 정석을 따르나요?
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.5 }}
                  className='text-center p-6 rounded-2xl bg-linear-to-br from-pink-50 to-rose-50'
                >
                  <div className='text-4xl mb-4'>🎯</div>
                  <h3 className='text-gray-800 mb-2'>대국 vs 실리</h3>
                  <p className='text-gray-600 text-sm'>
                    큰 그림을 보나요?
                    <br />
                    눈앞의 이익을 챙기나요?
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* 하단 CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className='mt-12 text-center'
          >
            <Link to='/'>
              <Button
                size='lg'
                className='bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-16 py-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 text-xl relative overflow-hidden group'
              >
                <div className='absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000' />
                <span className='relative z-10 flex items-center gap-4'>
                  <span>지금 시작하기</span>
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
                    ✨
                  </motion.span>
                </span>
              </Button>
            </Link>
            <p className='mt-4 text-gray-500 text-sm'>소요 시간: 약 2분 • 총 4개 질문</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

import { Button } from '@/components/figma/button';

interface AnalyzingModalProps {
  isOpen: boolean;
  onViewResult: () => void;
}

export function AnalyzingModal({ isOpen, onViewResult }: AnalyzingModalProps) {
  const [isAnalyzing, setIsAnalyzing] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setIsAnalyzing(true);
      // 2.5초 후 분석 완료
      const timer = setTimeout(() => {
        setIsAnalyzing(false);
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className='fixed inset-0 z-60 flex items-center justify-center p-6'>
          {/* 배경 오버레이 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='absolute inset-0 bg-black/50 backdrop-blur-sm'
          />

          {/* 모달 컨텐츠 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className='relative bg-white rounded-3xl shadow-2xl p-12 max-w-md w-full'
          >
            <AnimatePresence mode='wait'>
              {isAnalyzing ? (
                // 분석 중 화면
                <motion.div
                  key='analyzing'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className='text-center'
                >
                  {/* 바둑돌 애니메이션 */}
                  <div className='relative mb-8 h-32 flex items-center justify-center'>
                    {/* 흑돌 */}
                    <motion.div
                      className='absolute w-20 h-20 bg-linear-to-br from-gray-800 to-black rounded-full shadow-2xl'
                      animate={{
                        x: [-40, 40, -40],
                        y: [0, -20, 0],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                    {/* 백돌 */}
                    <motion.div
                      className='absolute w-20 h-20 bg-linear-to-br from-gray-100 to-white rounded-full shadow-2xl border-2 border-gray-300'
                      animate={{
                        x: [40, -40, 40],
                        y: [0, -20, 0],
                        rotate: [0, -180, -360],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </div>

                  <h3 className='text-gray-800 mb-3'>바둑 스타일 분석 중...</h3>

                  {/* 로딩 도트 */}
                  <div className='flex justify-center gap-2'>
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className='w-3 h-3 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full'
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                          ease: 'easeInOut',
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              ) : (
                // 분석 완료 화면
                <motion.div
                  key='complete'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className='text-center'
                >
                  {/* 성공 아이콘 */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 200,
                      damping: 15,
                    }}
                    className='mb-6 flex justify-center'
                  >
                    <div className='relative'>
                      <div className='w-24 h-24 bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl'>
                        <Sparkles className='w-12 h-12 text-white' strokeWidth={2.5} />
                      </div>
                      {/* 반짝이는 효과 */}
                      <motion.div
                        className='absolute inset-0 bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full'
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                    </div>
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className='text-gray-800 mb-3'
                  >
                    분석이 완료되었습니다!
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className='text-gray-600 mb-8'
                  >
                    바둑 MBTI 결과를 확인해보세요
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Button
                      onClick={onViewResult}
                      size='lg'
                      className='w-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white py-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105'
                    >
                      <span className='flex items-center justify-center gap-2'>
                        결과 확인하기
                        <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                          →
                        </motion.span>
                      </span>
                    </Button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

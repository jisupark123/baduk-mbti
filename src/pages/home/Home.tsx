import { useState } from 'react';
import { motion } from 'framer-motion';
import { Circle } from 'lucide-react';
import { useNavigate } from 'react-router';

import { Button } from '@/components/figma/button';
import LevelModal from '@/pages/home/components/LevelModal';

const instructions = ['총 4개의 문제가 주어집니다.', '한눈에 끌리는 수를 선택하세요.', '가벼운 마음으로 응해주세요.'];

export default function Home() {
  const navigate = useNavigate();
  const [showLevelModal, setShowLevelModal] = useState(false);

  const handleLevelSelect = (level: 'beginner' | 'intermediate' | 'advanced') => {
    navigate('/mbti-test', { state: { level } });
    setShowLevelModal(false);
  };
  return (
    <div className='flex-1 flex items-center justify-center'>
      {/* 메인 컨텐츠 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='relative z-10 w-full max-w-lg'
      >
        {/* 타이틀 섹션 */}
        <div className='text-center mb-12'>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.2,
              type: 'spring',
              stiffness: 200,
            }}
            className='inline-flex items-center justify-center mb-6 gap-2'
          >
            <div className='relative'>
              <Circle className='w-16 h-16 text-indigo-600 fill-indigo-600 drop-shadow-lg' />
              <Circle
                className='w-14 h-14 text-rose-500 fill-rose-500 absolute -right-10 top-3 drop-shadow-lg'
                strokeWidth={2}
              />
              <Circle
                className='w-12 h-12 text-emerald-500 fill-emerald-500 absolute -right-16 top-6 drop-shadow-lg'
                strokeWidth={2}
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className='text-transparent bg-clip-text bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 mb-3'
          >
            바둑으로 알아보는 MBTI
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className='text-purple-700'
          >
            나의 바둑 스타일로 성격을 알아보세요
          </motion.p>
        </div>

        {/* 설명 카드 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className='bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8 border border-purple-200'
        >
          <div className='space-y-6'>
            {instructions.map((instruction, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className='flex items-start gap-4'
              >
                <div
                  className={`shrink-0 w-8 h-8 rounded-full ${
                    index === 0
                      ? 'bg-linear-to-br from-indigo-500 to-indigo-600'
                      : index === 1
                        ? 'bg-linear-to-br from-purple-500 to-purple-600'
                        : 'bg-linear-to-br from-pink-500 to-pink-600'
                  } flex items-center justify-center text-white mt-0.5 shadow-md`}
                >
                  {index + 1}
                </div>
                <p className='text-slate-700 flex-1 pt-1'>{instruction}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 시작하기 버튼 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 1,
            type: 'spring',
            stiffness: 200,
          }}
        >
          {/* <div className='w-full py-3.5 rounded-lg label-md border border-indigo-600 flex items-center justify-center bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300'>
              시작하기
            </div> */}
          <Button
            size='lg'
            className='w-full bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 py-6'
            onClick={() => setShowLevelModal(true)}
            data-testid='start-button'
          >
            시작하기
          </Button>
        </motion.div>

        {/* 하단 장식 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className='text-center mt-8 text-purple-600'
        >
          <p>소요 시간: 약 2분</p>
        </motion.div>
      </motion.div>
      {/* 레벨 선택 모달 */}
      <LevelModal open={showLevelModal} onOpenChange={setShowLevelModal} handleLevelSelect={handleLevelSelect} />
    </div>
  );
}

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router';

import { Button } from '@/components/figma/button';
import { QUESTIONS } from '@/data/questions';
import { useSaveMbtiTest } from '@/hooks/mutation/useSaveMbtiTest';
import { AnalyzingModal } from '@/pages/mbti-test/components/AnalyzingModal';
import type { Level } from '@/types/level';
import type { Mbti } from '@/types/mbti';

export default function App() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const level: Level = state?.level ?? 'beginner';

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, 'A' | 'B'>>({});
  const [testResult, setTestResult] = useState<Mbti | null>(null);

  const { mutate: saveMbtiTest } = useSaveMbtiTest();
  const totalQuestions = QUESTIONS[level].length;

  const currentQ = QUESTIONS[level][currentQuestion];
  const options = [currentQ.options.A, currentQ.options.B];

  const calculateMbti = (answers: Record<number, 'A' | 'B'>): Mbti =>
    QUESTIONS[level]
      .map((q, index) => {
        const answer = answers[index];
        return q.mbti[answer];
      })
      .join('') as Mbti;

  const handleChoice = (choice: 'A' | 'B') => {
    const newAnswers = { ...answers, [currentQuestion]: choice };
    setAnswers(newAnswers);

    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // MBTI 결과 계산
      const result = calculateMbti(newAnswers);

      setTestResult(result);
      saveMbtiTest({ level, result });
    }
  };

  return (
    <div className='flex-1 flex justify-center'>
      <motion.div
        key={currentQuestion}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className='relative z-10 w-full max-w-5xl'
      >
        {/* 진행 상태 */}
        <div className='flex items-center justify-center mb-8 gap-4'>
          {/* 이전 문제 버튼 */}
          {currentQuestion > 0 && (
            <button
              onClick={() => setCurrentQuestion((prev) => prev - 1)}
              className='group bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg border border-purple-200 hover:bg-white/90 hover:scale-105 transition-all duration-300'
            >
              <ArrowLeft className='w-5 h-5 text-purple-600 group-hover:text-purple-700' />
            </button>
          )}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className='inline-block bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-purple-200'
          >
            <span className='bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'>
              문제 {currentQuestion + 1} / {totalQuestions}
            </span>
          </motion.div>
        </div>

        {/* 진행바 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className='mb-8 max-w-md mx-auto'
        >
          <div className='bg-white/50 backdrop-blur-sm rounded-full h-2 overflow-hidden'>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className='h-full bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600'
            />
          </div>
        </motion.div>

        {/* 바둑판과 버튼을 가로로 배치 */}
        <div className='flex flex-col lg:flex-row items-center gap-8 justify-center'>
          {/* 바둑판 */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className='shrink-0 relative max-w-full flex justify-center'
          >
            <img
              src={currentQ.imagePath}
              alt='바둑판'
              className='w-auto h-auto max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl'
            />
          </motion.div>

          {/* 선택 버튼들 - 세로로 배치 */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className='space-y-4 w-full lg:w-auto lg:min-w-[400px] flex flex-col justify-center'
          >
            {/* 문제 제목 */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className='relative w-full'
            >
              {/* 배경 글로우 효과 */}
              <div className='absolute inset-0 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 blur-xl opacity-20 rounded-2xl' />

              <div className='relative bg-linear-to-br from-white via-purple-50 to-pink-50 backdrop-blur-sm mb-2 px-8 py-4 rounded-2xl shadow-2xl border-2 border-white/50'>
                <h2 className='bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent text-center text-xl'>
                  {currentQ.title}: {currentQ.description}
                </h2>
              </div>
            </motion.div>
            {options.map((option, index) => (
              <motion.div key={index} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={() => handleChoice(['A', 'B'][index] as 'A' | 'B')}
                  size='lg'
                  className={`w-full h-auto py-4 text-left justify-start whitespace-normal ${
                    index === 0
                      ? 'bg-linear-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600'
                      : 'bg-linear-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600'
                  } text-white shadow-xl hover:shadow-2xl transition-all duration-300`}
                >
                  <span className='flex items-center gap-3 w-full'>
                    <span className='shrink-0 w-8 h-8 rounded-full bg-white/30 flex items-center justify-center'>
                      {['A', 'B'][index]}
                    </span>
                    <span className='break-keep leading-snug'>{option}</span>
                  </span>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* 분석 중 모달 */}
      <AnalyzingModal isOpen={!!testResult} onViewResult={() => navigate('/result', { state: { testResult } })} />
    </div>
  );
}

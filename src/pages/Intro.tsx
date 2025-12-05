import { motion } from 'framer-motion';

export default function Intro({ goNext }: { goNext: () => void }) {
  return (
    <motion.div
      key='intro'
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className='flex flex-col items-center'
    >
      {/* <div className='flex justify-center items-center mb-12.5'>
                  <h1 className='text-[3.5rem] text-black'>바둑으로 알아보는 MBTI</h1>
                </div> */}
      <div className='flex justify-center items-center gap-5 mb-12.5 bg-blue'>
        {['총 4개의 문제가 주어집니다.', '한눈에 끌리는 수를 선택하세요.', '가벼운 마음으로 응해주세요.'].map(
          (message, index) => (
            <div
              key={index}
              className='flex justify-center items-center py-10 px-7.5 bg-white/80 rounded-[10px] label-2xl text-black shadow-sm border border-gray-100'
            >
              {message}
            </div>
          ),
        )}
      </div>
      <button
        className='flex justify-center items-center py-5 px-12.5 text-white text-[2rem] rounded-[50px]'
        onClick={goNext}
      >
        시작하기
      </button>
    </motion.div>
  );
}

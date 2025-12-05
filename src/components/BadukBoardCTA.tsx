import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface BadukBoardCTAProps {
  className?: string;
  gridColor?: string;
  blackStoneColor?: string;
  whiteStoneColor?: string;
}

export function BadukBoardCTA({
  className = '',
  gridColor = 'purple-400',
  blackStoneColor = 'bg-linear-to-br from-gray-800 to-black',
  whiteStoneColor = 'bg-linear-to-br from-white to-gray-200',
}: BadukBoardCTAProps) {
  const [stonePositions, setStonePositions] = useState<number[]>([]);

  useEffect(() => {
    const generateRandomPositions = () => {
      const positions = new Set<number>();
      const count = Math.floor(Math.random() * 6) + 7;

      while (positions.size < count) {
        positions.add(Math.floor(Math.random() * 81));
      }

      setStonePositions(Array.from(positions));
    };

    generateRandomPositions();
    const interval = setInterval(generateRandomPositions, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className={`${className}`}
    >
      <div className='absolute inset-0 w-full h-full overflow-hidden'>
        {/* 바둑판 격자 배경 */}
        <motion.div
          className='absolute inset-0'
          animate={{ opacity: [0.02, 0.06, 0.02] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className={`grid grid-cols-8 w-full max-w-2xl mx-auto border-t border-l border-${gridColor}`}>
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className={`border-r border-b relative aspect-square border-${gridColor}`}>
                {/* 바둑알 애니메이션 - 랜덤 위치에 */}
                {stonePositions.includes(i) && (
                  <motion.div
                    className='absolute inset-0 flex items-center justify-center'
                    key={`stone-${i}-${stonePositions.join('-')}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 0.8, 0.8, 0],
                      scale: [0, 1.1, 1, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      delay: stonePositions.indexOf(i) * 0.3,
                      ease: 'easeInOut',
                    }}
                  >
                    <div
                      className={`rounded-full ${
                        (Math.floor(i / 8) + (i % 8)) % 2 === 0 ? blackStoneColor : whiteStoneColor
                      }`}
                      style={{
                        width: '70%',
                        height: '70%',
                        boxShadow:
                          (Math.floor(i / 8) + (i % 8)) % 2 === 0
                            ? '0 4px 8px rgba(0,0,0,0.5), inset 0 2px 4px rgba(255,255,255,0.2)'
                            : '0 4px 8px rgba(0,0,0,0.2), inset 0 2px 4px rgba(0,0,0,0.1)',
                      }}
                    />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

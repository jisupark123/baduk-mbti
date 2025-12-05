import { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize, Minimize } from 'lucide-react';

export default function FullScreenButton() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleFullscreen}
      className='fixed bottom-6 right-6 z-50 group bg-white/80 backdrop-blur-sm p-4 rounded-full shadow-lg border-2 border-purple-200 hover:bg-white/90 hover:border-purple-300 transition-all duration-300'
      title={isFullscreen ? '전체화면 종료' : '전체화면'}
    >
      {isFullscreen ? (
        <Minimize className='w-5 h-5 text-purple-600 group-hover:text-purple-700' />
      ) : (
        <Maximize className='w-5 h-5 text-purple-600 group-hover:text-purple-700' />
      )}
    </motion.button>
  );
}

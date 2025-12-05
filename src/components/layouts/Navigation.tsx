import { motion } from 'framer-motion';
import { Home, Grid3x3 } from 'lucide-react';
import { Link } from 'react-router';

interface NavigationProps {
  currentPage?: 'home' | 'all-types';
}

export function Navigation({ currentPage }: NavigationProps) {
  return (
    <motion.nav initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className='px-6 py-4'>
      <div className='max-w-7xl mx-auto flex items-center justify-end gap-3'>
        {/* Home 버튼 */}
        <Link to='/'>
          <div
            className={`group flex items-center gap-2 px-4 py-2.5 rounded-full backdrop-blur-md transition-all duration-300 shadow-lg hover:shadow-xl ${
              currentPage === 'home' ? 'bg-white/90 cursor-default' : 'bg-white/70 hover:bg-white/90 hover:scale-105'
            }`}
          >
            <div
              className={`p-1.5 rounded-full ${
                currentPage === 'home'
                  ? 'bg-linear-to-r from-indigo-500 to-purple-600'
                  : 'bg-linear-to-r from-indigo-400 to-purple-500 group-hover:from-indigo-500 group-hover:to-purple-600'
              } transition-all duration-300`}
            >
              <Home className='w-4 h-4 text-white' />
            </div>
            <span className={`font-medium ${currentPage === 'home' ? 'text-purple-700' : 'text-purple-600'}`}>홈</span>
          </div>
        </Link>

        {/* 모든 유형 버튼 */}
        <Link to='/all-types'>
          <div
            className={`group flex items-center gap-2 px-4 py-2.5 rounded-full backdrop-blur-md transition-all duration-300 shadow-lg hover:shadow-xl ${
              currentPage === 'all-types'
                ? 'bg-white/90 cursor-default'
                : 'bg-white/70 hover:bg-white/90 hover:scale-105'
            }`}
          >
            <div
              className={`p-1.5 rounded-full ${
                currentPage === 'all-types'
                  ? 'bg-linear-to-r from-pink-500 to-rose-600'
                  : 'bg-linear-to-r from-pink-400 to-rose-500 group-hover:from-pink-500 group-hover:to-rose-600'
              } transition-all duration-300`}
            >
              <Grid3x3 className='w-4 h-4 text-white' />
            </div>
            <span className={`font-medium ${currentPage === 'all-types' ? 'text-pink-700' : 'text-pink-600'}`}>
              모든 유형
            </span>
          </div>
        </Link>
      </div>
    </motion.nav>
  );
}

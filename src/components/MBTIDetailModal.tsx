import { motion } from 'framer-motion';
import { X } from 'lucide-react';

import { Badge } from '@/components/figma/badge';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/figma/dialog';
import { useMbtiStats } from '@/hooks/query/useMbtiStats';
import type { MbtiDetail } from '@/types/mbti';
import { formatPercentage } from '@/utils/formatPercentage';

interface MBTIDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: MbtiDetail | null;
  color: string;
}

export function MBTIDetailModal({ isOpen, onClose, type, color }: MBTIDetailModalProps) {
  const { data: mbtiStats, isLoading, isError } = useMbtiStats();

  console.log(mbtiStats, isLoading, isError);

  if (!type) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='max-w-2xl p-0 overflow-hidden border-0 bg-transparent'>
        <DialogTitle className='sr-only'>
          {type.id} - {type.name}
        </DialogTitle>
        <DialogDescription className='sr-only'>{type.desc}</DialogDescription>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className='relative bg-white rounded-2xl shadow-2xl overflow-hidden'
        >
          {/* 헤더 그라데이션 배경 */}
          <div className={`relative bg-linear-to-r ${color} p-8 pb-16`}>
            <button
              onClick={onClose}
              className='absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200'
            >
              <X className='w-5 h-5 text-white' />
            </button>

            {/* MBTI 코드 */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className='text-center'
            >
              <div className='inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-4'>
                <h2 className='text-white'>{type.id}</h2>
              </div>
              <h3 className='text-white mb-2'>{type.name}</h3>
              <p className='text-white/90 text-sm'>{type.desc}</p>
            </motion.div>
          </div>

          {/* 메인 컨텐츠 */}
          <div className='px-8 pb-8 -mt-8 relative z-10'>
            {/* 통계 카드 */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className='bg-white rounded-xl shadow-lg p-6 mb-6 border border-gray-100 relative'
            >
              <div className='grid grid-cols-2 gap-6'>
                {/* 비율 */}
                <div className='text-center'>
                  <div className='text-gray-500 text-sm mb-1'>전체 사용자 비율</div>
                  {isLoading ? (
                    <div className='h-6 w-12 mx-auto bg-gray-200 rounded animate-pulse' />
                  ) : isError ? (
                    <div className='text-gray-400'>-</div>
                  ) : (
                    <div className={`bg-linear-to-r ${color} bg-clip-text text-transparent`}>
                      {formatPercentage(mbtiStats?.[type.id])}%
                    </div>
                  )}
                </div>

                {/* 대표 프로기사 */}
                <div className='text-center'>
                  <div className='text-gray-500 text-sm mb-1'>대표 프로기사</div>
                  <div className='text-gray-800'>{type.proPlayer}</div>
                </div>
              </div>
            </motion.div>

            {/* 해시태그 */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className='mb-6'
            >
              <div className='flex flex-wrap gap-2 justify-center'>
                {type.hashtags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant='secondary'
                    className={`bg-linear-to-r ${color} text-white border-0 px-4 py-2`}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.div>

            {/* 상세 설명 */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className='bg-linear-to-br from-gray-50 to-gray-100 rounded-xl p-6'
            >
              <h4 className='text-gray-800 mb-3'>상세 설명</h4>
              <p className='text-gray-700 leading-relaxed'>{type.detailedDesc}</p>
            </motion.div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}

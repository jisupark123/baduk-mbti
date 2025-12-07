import { useState } from 'react';
import { motion } from 'framer-motion';

import { MBTIDetailModal } from '@/components/MBTIDetailModal';
import { mbtiCategories, mbtiCategoryThemes, mbtiDetails } from '@/data/mbtiData';

export default function AllTypes() {
  const [selectedTypeIndex, setSelectedTypeIndex] = useState<number | null>(null); // ISTP index
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedType = selectedTypeIndex !== null ? mbtiDetails[selectedTypeIndex] : null;
  const selectedTheme = selectedType ? mbtiCategoryThemes[selectedType.category] : null;

  const getGradientColors = (colorClass: string): [string, string] => {
    const colorMap: Record<string, [string, string]> = {
      'from-indigo-500 to-purple-600': ['#6366f1', '#9333ea'],
      'from-pink-500 to-rose-600': ['#ec4899', '#e11d48'],
      'from-blue-500 to-indigo-600': ['#3b82f6', '#4f46e5'],
      'from-emerald-500 to-teal-600': ['#10b981', '#0d9488'],
    };
    return colorMap[colorClass] || ['#6366f1', '#9333ea'];
  };

  const handleTypeClick = (index: number) => {
    setSelectedTypeIndex(index);
    setIsModalOpen(true);
  };

  return (
    <div className='flex-1'>
      {/* MBTI 상세 모달 */}
      <MBTIDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type={selectedType}
        color={selectedTheme?.color || 'from-indigo-500 to-purple-600'}
      />

      {/* 메인 컨텐츠 */}
      <div className='relative z-10 w-full max-w-4xl mx-auto pt-4'>
        {/* 타이틀 */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className='text-center mb-16'>
          <h1 className='text-transparent bg-clip-text bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 mb-3'>
            바둑 MBTI 16가지 유형
          </h1>
          <p className='text-purple-700'>나의 바둑 스타일에 맞는 성격 유형을 확인하세요</p>
        </motion.div>

        {/* MBTI 그룹들 */}
        <div className='space-y-12'>
          {mbtiCategories.map((category, groupIndex) => {
            const theme = mbtiCategoryThemes[category.id];
            const Icon = theme.icon;
            // Filter types for this category, but we need their original indices
            const categoryTypesWithIndex = mbtiDetails
              .map((type, index) => ({ ...type, originalIndex: index }))
              .filter((type) => type.category === category.id);

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: groupIndex * 0.15 }}
              >
                {/* 섹션 헤더 */}
                <div className='flex items-center gap-4 mb-6'>
                  <div className={`${theme.accentColor} p-3 rounded-xl shadow-lg`}>
                    <Icon className='w-6 h-6 text-white' />
                  </div>
                  <div className='flex-1'>
                    <h2 className={`bg-linear-to-r ${theme.color} bg-clip-text text-transparent`}>{category.label}</h2>
                    <div className={`h-1 w-full max-w-xs rounded-full bg-linear-to-r ${theme.color} mt-1`} />
                  </div>
                </div>

                {/* MBTI 타입 버튼들 - 1열 배치 */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                  {categoryTypesWithIndex.map((type, typeIndex) => (
                    <motion.div
                      key={type.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: groupIndex * 0.15 + typeIndex * 0.05 }} // 페이지 로딩 시 애니메이션
                      // transition={{ delay: 0.1 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div
                        className='relative w-full rounded-2xl h-[200px] group/card transition-all duration-300 p-0 group-hover/card:p-[2px]'
                        style={{
                          background: `linear-gradient(135deg, ${getGradientColors(theme.color)[0]}50, ${getGradientColors(theme.color)[1]}50)`,
                        }}
                      >
                        <button
                          onClick={() => handleTypeClick(type.originalIndex)}
                          className='relative w-full h-full bg-white/95 backdrop-blur-sm rounded-2xl px-6 pb-6 pt-8 shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col justify-start overflow-hidden'
                        >
                          <div className='relative text-center space-y-3'>
                            <div className='flex justify-center'>
                              <div
                                className={`px-4 py-2 rounded-full bg-linear-to-r ${theme.color} text-white shadow-md`}
                              >
                                <span className='font-bold'>{type.id}</span>
                              </div>
                            </div>
                            <h3 className='text-slate-800'>{type.name}</h3>
                            <p className='text-slate-600 text-sm leading-relaxed'>{type.desc}</p>
                          </div>
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 하단 안내 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className='mt-16 text-center'
        >
          <div className='inline-block bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-purple-200'>
            <p className='text-purple-600'>각 유형을 클릭하여 자세한 설명을 확인하세요</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

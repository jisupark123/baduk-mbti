import { DialogTitle } from '@radix-ui/react-dialog';
import { motion } from 'framer-motion';
import { Image, Link2, QrCode, Share2 } from 'lucide-react';
import { isMobile } from 'react-device-detect';

import { Button } from '@/components/figma/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader } from '@/components/figma/dialog';

export default function ShareOptionsModal({
  open,
  onOpenChange,
  handleSnsShare,
  handleImgDownload,
  handleQrCodeShare,
  handleCopyLink,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  handleSnsShare: () => void;
  handleImgDownload: () => void;
  handleQrCodeShare: () => void;
  handleCopyLink: () => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='sm:max-w-[500px]'>
        <div className='relative'>
          {/* 배경 글로우 */}
          <div className='absolute top-0 right-0 w-40 h-40 bg-linear-to-br from-blue-200 to-purple-200 rounded-full blur-3xl opacity-30' />
          <div className='absolute bottom-0 left-0 w-32 h-32 bg-linear-to-tr from-pink-200 to-indigo-200 rounded-full blur-3xl opacity-30' />

          <div className='relative'>
            <DialogHeader className='space-y-3'>
              <motion.div
                className='inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 mb-2 shadow-lg mx-auto'
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Share2 className='w-8 h-8 text-white' strokeWidth={2.5} />
              </motion.div>
              <DialogTitle className='text-center text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-600 to-pink-600'>
                공유하기
              </DialogTitle>
              <DialogDescription className='text-center text-gray-600'>
                결과를 다양한 방법으로 공유할 수 있습니다
              </DialogDescription>
            </DialogHeader>

            {/* 공유 옵션 버튼들 */}
            <div className='mt-8 space-y-3'>
              {/* SNS 공유 */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                <Button
                  onClick={handleSnsShare}
                  size='lg'
                  className='w-full bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] rounded-xl'
                >
                  <span className='flex items-center justify-center gap-3'>
                    <Share2 className='w-5 h-5' />
                    <span className='text-base'>SNS로 공유하기</span>
                  </span>
                </Button>
              </motion.div>

              {/* 이미지로 저장 */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                <Button
                  onClick={handleImgDownload}
                  size='lg'
                  className='w-full bg-linear-to-r from-pink-500 via-rose-500 to-orange-500 hover:from-pink-600 hover:via-rose-600 hover:to-orange-600 text-white py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] rounded-xl'
                >
                  <span className='flex items-center justify-center gap-3'>
                    <Image className='w-5 h-5' />
                    <span className='text-base'>이미지로 저장하기</span>
                  </span>
                </Button>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                <Button
                  onClick={handleQrCodeShare}
                  size='lg'
                  className='w-full bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] rounded-xl'
                >
                  <span className='flex items-center justify-center gap-3'>
                    <QrCode className='w-5 h-5' />
                    <span className='text-base'>QR 코드로 공유하기</span>
                  </span>
                </Button>
              </motion.div>

              {/* 링크 복사 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: !isMobile ? 0.4 : 0.3 }}
              >
                <Button
                  onClick={handleCopyLink}
                  size='lg'
                  className='w-full bg-linear-to-r from-indigo-500 via-blue-500 to-cyan-500 hover:from-indigo-600 hover:via-blue-600 hover:to-cyan-600 text-white py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] rounded-xl'
                >
                  <span className='flex items-center justify-center gap-3'>
                    <Link2 className='w-5 h-5' />
                    <span className='text-base'>링크 복사하기</span>
                  </span>
                </Button>
              </motion.div>
            </div>

            {/* 안내 문구 */}
            <div className='mt-6 text-center'>
              <p className='text-sm text-gray-500'>친구들과 함께 테스트를 즐겨보세요</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

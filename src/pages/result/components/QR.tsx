import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog';
import { motion } from 'framer-motion';
import { Share2, Smartphone } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

import { Button } from '@/components/figma/button';
import { Dialog, DialogContent, DialogHeader } from '@/components/figma/dialog';

export default function QR({
  open,
  onOpenChange,
  link,
  goBack,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  link: string;
  goBack: () => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='sm:max-w-[500px]'>
        <div className='relative'>
          {/* 배경 글로우 */}
          <div className='absolute top-0 right-0 w-40 h-40 bg-linear-to-br from-blue-200 to-purple-200 rounded-full blur-3xl opacity-40' />
          <div className='absolute bottom-0 left-0 w-32 h-32 bg-linear-to-tr from-pink-200 to-indigo-200 rounded-full blur-3xl opacity-40' />

          <div className='relative'>
            <DialogHeader className='space-y-4'>
              <motion.div
                className='inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 mb-2 shadow-lg mx-auto'
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Smartphone className='w-8 h-8 text-white' strokeWidth={2.5} />
              </motion.div>
              <DialogTitle className='text-center text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-600 to-pink-600'>
                모바일로 스캔하세요
              </DialogTitle>
              <DialogDescription className='text-center text-gray-600'>
                카메라로 QR 코드를 스캔하면
                <br />
                친구들과 결과를 쉽게 공유할 수 있어요
              </DialogDescription>
            </DialogHeader>

            {/* QR 코드 */}
            <div className='mt-8 flex justify-center'>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className='relative'
              >
                <div className='absolute -inset-4 bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 rounded-2xl blur-xl opacity-30' />
                <div className='relative bg-white p-6 rounded-2xl shadow-2xl'>
                  <QRCodeSVG value={link} size={220} level='M' className='rounded-lg' />
                </div>
              </motion.div>
            </div>

            {/* 버튼 */}
            <div className='mt-8'>
              <Button
                onClick={goBack}
                size='lg'
                className='w-full bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white py-6 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group'
              >
                <div className='absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000' />

                <span className='flex items-center justify-center gap-3 relative z-10'>
                  <Share2 className='w-5 h-5' />
                  <span className='text-lg'>다른 방법으로 공유하기</span>
                </span>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

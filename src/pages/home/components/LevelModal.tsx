import { Button } from '@/components/figma/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/figma/dialog';
import type { Level } from '@/types/level';

export default function LevelModal({
  open,
  onOpenChange,
  handleLevelSelect,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  handleLevelSelect: (level: Level) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle className='text-center text-transparent bg-clip-text bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600'>
            난이도를 선택해주세요
          </DialogTitle>
          <DialogDescription className='text-center text-slate-600'>
            바둑 실력에 맞는 난이도를 선택하세요
          </DialogDescription>
        </DialogHeader>
        <div className='space-y-4 mt-4'>
          <Button
            onClick={() => handleLevelSelect('beginner')}
            className='w-full py-8 bg-linear-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg hover:shadow-xl transition-all duration-300'
            size='lg'
          >
            <div className='text-center'>
              <div>초급</div>
              <div className='text-sm opacity-90'>바둑을 처음 접하시는 분</div>
            </div>
          </Button>

          <Button
            onClick={() => handleLevelSelect('intermediate')}
            className='w-full py-8 bg-linear-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white shadow-lg hover:shadow-xl transition-all duration-300'
            size='lg'
          >
            <div className='text-center'>
              <div>중급</div>
              <div className='text-sm opacity-90'>바둑 경험이 있으신 분</div>
            </div>
          </Button>

          <Button
            onClick={() => handleLevelSelect('advanced')}
            className='w-full py-8 bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300'
            size='lg'
          >
            <div className='text-center'>
              <div>고급</div>
              <div className='text-sm opacity-90'>바둑에 능숙하신 분</div>
            </div>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

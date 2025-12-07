// 이름 입력 모달

import { DialogTitle } from '@radix-ui/react-dialog';

import { Button } from '@/components/figma/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader } from '@/components/figma/dialog';
import { Input } from '@/components/figma/input';

export default function NameModal({
  open,
  onOpenChange,
  userName,
  setUserName,
  handleSubmit,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  userName: string;
  setUserName: (userName: string) => void;
  handleSubmit: () => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle className='text-center text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-600 to-pink-600'>
            이름 입력
          </DialogTitle>
          <DialogDescription className='text-center text-gray-600'>
            공유할 때 표시될 이름을 입력해주세요 (선택 사항)
          </DialogDescription>
        </DialogHeader>
        <div className='mt-4'>
          <Input
            id='name'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder='예: 홍길동'
            className='text-center focus-visible:outline-none focus-visible:ring-0 focus-visible:border-none'
            onKeyDown={(e) => {
              if (e.key === 'Enter' && userName.trim()) {
                handleSubmit();
              }
            }}
          />
        </div>
        <div className='mt-6 flex gap-3'>
          <Button
            onClick={() => {
              setUserName('');
              handleSubmit();
            }}
            variant='outline'
            size='lg'
            className='flex-1 py-6 border-2 border-gray-300 hover:border-gray-400'
          >
            건너뛰기
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!userName.trim()}
            size='lg'
            className='flex-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white py-6 shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-xl disabled:hover:scale-100'
          >
            공유하기
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

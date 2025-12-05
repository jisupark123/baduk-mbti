import { Outlet } from 'react-router';

import { BadukBoardCTA } from '@/components/BadukBoardCTA';
import { Navigation } from '@/components/layouts/Navigation';

export default function Layout() {
  return (
    <div className='w-full min-h-screen flex flex-col'>
      <header className='fixed top-0 left-0 w-full h-[80px] z-50'>
        <Navigation />
      </header>

      <main className='w-full flex-1 flex flex-col relative'>
        <BadukBoardCTA className='absolute inset-0 z-0 max-w-2xl mx-auto pointer-events-none' gridColor='purple-400' />
        {/* 각 페이지에서 min-h-screen, pt-[52px]를 설정해야 함 */}
        <Outlet />
      </main>
    </div>
  );
}

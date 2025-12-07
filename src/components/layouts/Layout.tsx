import { Outlet } from 'react-router';

import { BadukBoardCTA } from '@/components/BadukBoardCTA';
import FullScreenButton from '@/components/FullScreenButton';
import { Navigation } from '@/components/layouts/Navigation';
import { useDeviceType } from '@/hooks/useDeviceType';

export default function Layout() {
  const { isMobile } = useDeviceType();

  return (
    <div className='w-full min-h-screen flex flex-col'>
      {!isMobile && (
        <header className='fixed top-0 left-0 w-full h-[80px] z-50'>
          <Navigation />
        </header>
      )}

      <main className='w-full min-h-screen pt-6 md:pt-[80px] px-6 pb-6 md:pb-16 flex-1 flex flex-col relative'>
        <BadukBoardCTA className='absolute inset-0 z-0 max-w-2xl mx-auto pointer-events-none' gridColor='purple-400' />
        <Outlet />
      </main>
      {!isMobile && <FullScreenButton />}
    </div>
  );
}

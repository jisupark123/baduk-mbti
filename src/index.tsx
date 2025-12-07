import '@/styles/index.css';
import { StrictMode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { Toaster } from 'sonner';

import App from '@/App';
import ScrollToTop from '@/components/ScrollToTop';
import { preloadImages } from '@/utils/preloadImages';

const queryClient = new QueryClient();

preloadImages();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Toaster position='top-center' richColors />
        <ScrollToTop />
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
);

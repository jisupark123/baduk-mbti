import '../styles/reset.scss';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import ThemeProvider from '../store/theme-provider';
import { useContext, useEffect } from 'react';
import ThemeCtx, { Theme } from '../store/theme-context';

export const LOCALSTORAGE_KEY_NAME = 'name';
export const LOCALSTORAGE_KEY_Theme = 'theme';

function App({ Component, pageProps }: AppProps) {
  const themeCtx = useContext(ThemeCtx);

  useEffect(() => {
    const currentTheme = localStorage.getItem(LOCALSTORAGE_KEY_Theme);
    if (currentTheme === 'red' || currentTheme === 'blue') {
      themeCtx?.setTheme(currentTheme);
    }
  }, [themeCtx]);
  return (
    <ThemeProvider>
      <div id='overlay'></div>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;

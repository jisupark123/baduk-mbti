import '../styles/reset.scss';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';

export const LOCALSTORAGE_KEY_NAME = 'name';
export const LOCALSTORAGE_KEY_THEME = 'theme';
export const LOCALSTORAGE_KEY_LEVEL = 'level';
export type Theme = 'red' | 'blue';
export type Level = '초급' | '중급' | '고급';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div id='overlay'></div>
      <Component {...pageProps} />
    </>
  );
}

export default App;

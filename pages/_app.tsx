import '../styles/reset.scss';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Notice from '../components/notification/notice';
import NoticeProvider from '../store/notice-context';

export const LOCALSTORAGE_KEY_NAME = 'name';
export const LOCALSTORAGE_KEY_THEME = 'theme';
export const LOCALSTORAGE_KEY_LEVEL = 'level';
export type Theme = 'red' | 'blue';
export type Level = '초급' | '중급' | '고급';

function App({ Component, pageProps }: AppProps) {
  return (
    <NoticeProvider>
      <div id='overlay'></div>
      <Notice />
      <Component {...pageProps} />
    </NoticeProvider>
  );
}

export default App;

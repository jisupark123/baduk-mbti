import '../styles/reset.scss';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';

export const LOCALSTORAGE_KEY_NAME = 'name';
export const LOCALSTORAGE_KEY_Theme = 'theme';
export type Theme = 'red' | 'blue';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div id='overlay'></div>
      <Component {...pageProps} />
    </>
  );
}

export default App;

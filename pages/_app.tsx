import type { AppProps } from 'next/app';
import { GlobalStyles } from '@styles/GlobalStyles';
import customAxios from '@pages/api/axios';
import { NavBar } from '@components/NavBar';
import { useRouter } from 'next/router';
import axios from 'axios';
import { RecoilRoot } from 'recoil';
import BASE_URL from '@pages/api/client';

axios.defaults.baseURL = BASE_URL + '/';
const isServer = !process.browser;

if (process.env.NODE_ENV === 'development') {
  if (isServer) {
    (async () => {
      const { server } = await import('@mocks/server');
      server.listen();
    })();
  } else {
    (async () => {
      const { worker } = await import('@mocks/browser');
      await worker.start({
        onUnhandledRequest: 'bypass',
      });
    })();
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.pathname === '/login') {
    return (
      <>
        <GlobalStyles />
        <Component {...pageProps} />
      </>
    );
  }

  // 헤더
  return (
    <>
      <RecoilRoot>
        <GlobalStyles />
        <NavBar />
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}
/**
 * 페이지 전환시 레이아웃유지
 * 페이지 전환시 상태값 유지
 * componentDidCatch를 이용한 커스텀 에러핸들링
 * 추가적인 데이터를 페이지로 주입가능
 * 글로벌 css 선언
 *
 */

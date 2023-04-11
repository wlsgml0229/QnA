import '@styles/globals.css';
import type { AppProps } from 'next/app';
import { GlobalStyles } from '@styles/GlobalStyles';
import MainHeader from '@components/MainHeader';
import customAxios from '@src/utils/axios';
customAxios.init();

export default function App({ Component, pageProps }: AppProps) {
  // 헤더
  return (
    <>
      <MainHeader />
      <GlobalStyles />
      <Component {...pageProps} />
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

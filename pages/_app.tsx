import type { AppProps } from 'next/app';
import { GlobalStyles } from '@styles/GlobalStyles';
import customAxios from '@pages/api/axios';
import { NavBar } from '@components/NavBar';
import { useRouter } from 'next/router';
import axios from 'axios';
import { RecoilRoot } from 'recoil';
import {useEffect} from "react";
import {worker} from "@mocks/browser";

axios.defaults.baseURL = 'http://3.39.11.231:8080/';
customAxios.init();
export default function App({ Component, pageProps }: AppProps) {

    useEffect(() => {
        // 개발 환경에서만 MSW를 활성화
        if (process.env.NODE_ENV === 'test' &&  typeof window !== 'undefined') {
            worker.start();
        }
    }, []);

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


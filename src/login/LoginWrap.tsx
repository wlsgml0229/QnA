import React, { useCallback } from 'react';
import kakao_login_btn from '@assets/icon/kakao_sm_login.png';
import naver_login_btn from '@assets/icon/naver_sm_login.png';
import clip_logo from '@assets/icon/paperclip.gif';
import { REST_API_KEY, REDIRECT_URI } from '../../secretConfig';
import useSWR from 'swr';
import Image from 'next/image';
import {
  LoginContent,
  LoginWrapper,
  SNSBtnWrapper,
  SNSLoginWrapper,
  TitleWrapper,
} from './style';
export const LoginWrap = () => {
  const loginHandler = useCallback((e: { preventDefault: () => void }) => {
    e.preventDefault();
    window.location.href = KAKAO_AUTH_URL;
  }, []);
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  return (
    <LoginWrapper>
      <LoginContent>
        <TitleWrapper>
          <p>
            기록하고, 질문하고, 연결되는 <br />
            소셜 개발자 플랫폼
          </p>
          <h1>Clips</h1>
          <Image src={clip_logo} alt="clip logo image" />
        </TitleWrapper>
        <SNSLoginWrapper>
          <p>SNS 계정으로 빠르게 시작하기</p>
          <SNSBtnWrapper>
            <Image
              src={kakao_login_btn}
              alt="kakao login"
              onClick={loginHandler}
            />
            <Image
              src={naver_login_btn}
              alt="naver login"
              onClick={loginHandler}
            />
            <Image
              src={naver_login_btn}
              alt="sns login"
              onClick={loginHandler}
            />
          </SNSBtnWrapper>
        </SNSLoginWrapper>
      </LoginContent>
    </LoginWrapper>
  );
};

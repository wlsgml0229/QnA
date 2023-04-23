import React, { useCallback } from 'react';
import logo from '@assets/images/logo.png';
import kakao_login_btn from '@assets/images/kakao_login_large_wide.png';
import { REST_API_KEY, REDIRECT_URI } from '../../secretConfig';
import useSWR from 'swr';
import Image from 'next/image';
export const LoginWrap = () => {
  // const { data, error } = useSWR('', fetcher, {});
  let fetcher = () => {};
  const onSubmit = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>): void => {
      e.preventDefault();
    },
    [],
  );
  const loginHandler = () => {
    window.location.href = KAKAO_AUTH_URL;
  };
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  return (
    <div className="Login">
      <div className="logo-wrapper">
        <Image src={logo} alt="logo" width={300} height={300} />
      </div>
      <div className="title-wrapper">
        <h1>반갑습니다</h1>
      </div>
      <div className="login-btn-wrapper">
        <Image
          src={kakao_login_btn}
          className="btn-login kakao"
          alt="kakao login"
          onClick={loginHandler}
        />
      </div>
    </div>
  );
};

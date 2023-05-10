import React, { useEffect } from 'react';

import { token } from '@src/utils/token';
import { customAxios } from '@pages/api/axios';
import { useRouter } from 'next/router';
const KakaoLogin = () => {
  const navigate = useRouter();
  const KAKAO_CODE = navigate.asPath.split('=')[1];

  useEffect(() => {
    // 백엔드로 인가코드보내기
    customAxios
      .post(`user/kakao/login?code=${KAKAO_CODE}`)
      .then((res) => {
        if (res.data.data) {
          token.set(res.data.data.accessToken);
          customAxios.setHeader();
          navigate.push('/');
        }
      })
      .catch(() => {
        token.remove();
        navigate.push('/login');
      });
  }, []);

  return <div>KaKaoLogin</div>;
};

export default KakaoLogin;

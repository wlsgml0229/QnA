import React, { useEffect } from 'react';

import { token } from '@src/utils/token';
import { customAxios } from '@pages/api/axios';
import { useRouter } from 'next/router';
import { userStorage } from '@src/utils/userId';
import { myAtom } from 'store/user';
import { useRecoilState } from 'recoil';
const KakaoLogin = () => {
  const navigate = useRouter();
  const KAKAO_CODE = navigate.asPath.split('=')[1];
  const [test, setTest] = useRecoilState(myAtom);

  useEffect(() => {
    // 백엔드로 인가코드보내기
    customAxios
      .post(`user/kakao/login?code=${KAKAO_CODE}`, {})
      .then((res) => {
        console.log(res);
        const { accessToken, userId } = res.data.data;
        customAxios.setHeader();
        token.set(accessToken);
        // setTest(userId);
        userStorage.set(userId);
        navigate.push('/');
      })
      .catch(() => {
        token.remove();
        navigate.push('/login');
      });
  }, []);

  return <div>KaKaoLogin</div>;
};

export default KakaoLogin;

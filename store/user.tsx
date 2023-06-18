import { atom, selector } from 'recoil';
import useSWR from 'swr';
import { fetcher } from '@pages/api/fetch';
import { ICategory } from '../types';

export const userState = atom({
  key: 'userState',
  default: {
    userId: '',
  },
});

// 의존성에 변경점이 생기면 selector는 새로운 쿼리를 재평가하고 다시 실행
export const currentUserQuery = selector({
  key: 'currentUser',
  get: async ({ get }) => {
    const { data } = useSWR<ICategory[]>(
      `/category/list/${get(userState)}`,
      fetcher,
    );
    return data;
  },
});


import { recoilPersist } from 'recoil-persist';

//1. 아무것도 설정 안 하고 쓰는 경우
//localStorage에 저장되며, key 이름은 'recoil-persist'로 저장됨
// const { persistAtom } = recoilPersist();

//2. sessionStorage에 저장하고 싶은 경우
//Next.js를 쓴다면 sessionStorage는 아래와 같이 따로 설정 필요
const sessionStorage = 
      typeof window !== 'undefined' ? window.sessionStorage : undefined

const { persistAtom } = recoilPersist({
  key: 'test',
  storage: sessionStorage,
});

//Recoil-persist를 적용시키려면 아래의 effects_UNSTABLE을 적어주어야 한다.
export const myAtom = atom({
  key: 'myAtomKey',
  default: '',
  effects_UNSTABLE: [persistAtom],
});
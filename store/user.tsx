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

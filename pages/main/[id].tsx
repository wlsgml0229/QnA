import React from 'react';
import { useRouter } from 'next/navigation';
import { MainWrap } from '@src/main/MainWrap';
import useSWR from 'swr';
import { ICategory } from '../../types';
import { fetcher } from '@pages/api/fetch';
import { atom, useRecoilState } from 'recoil';

interface PropsType {
  data: ICategory[];
}
function Main({ data }: PropsType) {
  const todoListState = atom({
    key: 'todoListState',
    default: [],
  });
  const router = useRouter();
  return <MainWrap />;
}
export const getServerSideProps = async () => {
  const { data } = useSWR<ICategory[]>('/category/list', fetcher);
  return { props: { data } };
};

export default Main;

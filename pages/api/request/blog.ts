import useSWR from 'swr';
import { IBlog, IUser } from '../../../types';
import { fetcher } from '@pages/api/fetch';

const BLOG = 'blog-board';
export const useBlogLatestSWR = () => {
  return useSWR<IBlog[]>(`${BLOG}/latest`, fetcher);
};

export const useBlogAllListSWR = () => {
  return useSWR<IBlog[]>(`${BLOG}/list`, fetcher);
};
export const useBlogListSWR = (categoryId: string) => {
  return useSWR<IBlog[]>(`${BLOG}/list/${categoryId}`, fetcher);
};

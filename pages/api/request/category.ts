import useSWR from 'swr';
import { ICategory, IUser } from '../../../types';
import { fetcher } from '@pages/api/fetch';

const CATEGORY = 'category';
export const useCategorySWR = (userId: string) => {
  return useSWR<ICategory[]>(
    userId ? `${CATEGORY}/list/${userId}` : null,
    fetcher,
  );
};

import useSWR from 'swr';
import { IUser, IWriteDate } from '../../../types';
import { fetcher } from '@pages/api/fetch';

const USER = '/user/info';
export const useUserSWR = (userId: string) => {
  return useSWR<IUser>(userId ? `${USER}/${userId}` : null, fetcher);
};

export const useWriteDateSWR = () => {
  return useSWR<IWriteDate[]>(`${USER}/write-date`, fetcher);
};

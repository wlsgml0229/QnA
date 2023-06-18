import useSWR from 'swr';
import { fetcher } from './fetch';

export const postLogin = (token: string) => {
  const { data, error } = useSWR(`/login/${token}`, fetcher, {
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      if (error.status === 404) return;
      if (retryCount >= 10) return;
    },
  });

  if (error) return '[FAIL] get data';
  if (!data) return '[FAIL] no data';
  return data;
};

export const getCategoryList = () => {
  
}
import customAxios from '@pages/api/axios';

export const fetcher = (url: string) =>
  customAxios
    .get(url, {})
    .then((res) => res.data.data)
    .catch((err) => err);

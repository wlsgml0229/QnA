import customAxios from '@pages/api/axios';

export const fetcher = (url: string) =>
  customAxios.get(url, {}).then((response) => response.data);

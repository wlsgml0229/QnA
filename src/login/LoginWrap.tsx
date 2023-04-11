import React, { useCallback, useState } from 'react';
import useSWR from 'swr';
export const LoginWrap = () => {
  const { data, error } = useSWR('/login', fetcher, {});
  const onSubmit = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>): void => {
      e.preventDefault();
    },
    [],
  );
  return <div></div>;
};

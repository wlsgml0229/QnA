import React from 'react';
import { useRouter } from 'next/navigation';
import MainWrap from '@src/main/MainWrap';

function Main() {
  const router = useRouter();
  return <MainWrap />;
}

export default Main;

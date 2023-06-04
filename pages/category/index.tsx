import React from 'react';
import { useRouter } from 'next/navigation';
import { CategoryWrap } from '@src/category/CategoryWrap';

function Main() {
  const router = useRouter();
  return <CategoryWrap></CategoryWrap>;
}

export default Main;

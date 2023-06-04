import React from 'react';
import { useRouter } from 'next/navigation';
import { CategoryWrap } from '@src/category/CategoryWrap';

function Category() {
  const router = useRouter();
  return <CategoryWrap />;
}

export default Category;

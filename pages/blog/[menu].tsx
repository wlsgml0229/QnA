import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { BlogWrap } from '@src/blog/BlogWrap';

export default function Blog() {
  const searchParams = useSearchParams();
  let menu = searchParams.get('menu');
  console.log('menu', menu)

  return <BlogWrap menu={menu} />;
}

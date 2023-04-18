import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { BlogWrap } from '@src/blog/BlogWrap';

export default function Blog() {
  const searchParams = useSearchParams();
  const menu = searchParams.get('menu');

  return <BlogWrap />;
}

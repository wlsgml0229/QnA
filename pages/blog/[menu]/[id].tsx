import React from 'react';
import { useSearchParams } from 'next/navigation';
import { BlogDetailWrap } from '@src/blog/BlogDetailWrap';
export default function BlogDetail() {
  const searchParams = useSearchParams();
  console.log('blogDetail', searchParams);

  return <BlogDetailWrap />;
}

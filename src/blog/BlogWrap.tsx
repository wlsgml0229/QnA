import { BlogList, EmptyBlogList } from '@src/blog/style';
import BlogItem from '@components/BlogItem';
import useSWR from 'swr';
import { IBlog } from '../../types';
import { fetcher } from '@pages/api/fetch';
import { useRouter } from 'next/router';
import Container from '@components/Container';
import { useState } from 'react';
import { useBlogListSWR } from '@pages/api/request/blog';

export const BlogWrap = () => {
  const router = useRouter();

  const { menu: categoryId, categoryName } = router.query;

  const { data: blogList, error } = useBlogListSWR(categoryId as string)

  const [tooltipStates, setTooltipStates] = useState<{
    [key: string]: boolean;
  }>({});


  return (
    <Container>
      <BlogList>
        <h2>{categoryName}</h2>
        {blogList?.length ? (
          blogList.map((item) => (
            <BlogItem
              key={item.id}
              {...item}
              categoryId={categoryId}
              tooltipStates={tooltipStates}
            />
          ))
        ) : (
          <EmptyBlogList>게시글이 없습니다.</EmptyBlogList>
        )}
      </BlogList>
    </Container>
  );
};

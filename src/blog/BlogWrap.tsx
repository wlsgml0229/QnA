import { BlogList } from '@src/blog/style';
import BlogItem from '@components/BlogItem';
import useSWR from 'swr';
import { IBlog } from '../../types';
import { fetcher } from '@pages/api/fetch';
import { useRouter } from 'next/router';

const data = [
  {
    id: '111',
    boardTitle: 'react 개발어쩌구 특징입니다',
    contents: '내용이어쩌구저쩌구 축약해서 글자를 알려주는 내용내용',
    user: { userName: '네임' },
  },
  {
    id: '222',
    boardTitle: '타이틀',
    contents: '내용이어쩌구저쩌구 축약해서 글자를 알려주는 내용내용',
    user: { userName: '네임' },
  },
  {
    id: '333',
    boardTitle: '어떤걸질문하냐면 블로그에서 쓰는방법을',
    contents: '내용이어쩌구저쩌구 축약해서 글자를 알려주는 내용내용',
    user: { userName: '네임' },
  },
];

export const BlogWrap = () => {
  const router = useRouter();
  const { menu: categoryId, categoryName } = router.query;
  console.log('categoryId', categoryId);

  const { data: blogList, error } = useSWR<IBlog[]>(
    `/blog-board/list`,
    fetcher,
  );
  console.log(blogList);
  return (
    <BlogList>
      <h2>{categoryName}</h2>
      {blogList?.length ? (
        blogList.map((item) => (
          <BlogItem key={item.id} {...item} categoryId={categoryId} />
        ))
      ) : (
        <>게시글이 없습니다.</>
      )}
    </BlogList>
  );
};

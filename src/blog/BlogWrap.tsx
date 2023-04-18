import {
  BlogContent,
  BlogItem,
  BlogList,
  BlogTitle,
  BlogUserWrap,
  BlogViews,
} from '@src/blog/style';
import Image from 'next/image';
import myImg from '@assets/images/myImg.jpeg';

const data = [
  {
    id: '111',
    title: 'react 개발어쩌구 특징입니다',
    content: '내용이어쩌구저쩌구 축약해서 글자를 알려주는 내용내용',
    user: { name: '네임' },
  },
  {
    id: '222',
    title: '타이틀',
    content: '내용이어쩌구저쩌구 축약해서 글자를 알려주는 내용내용',
    user: { name: '네임' },
  },
  {
    id: '333',
    title: '어떤걸질문하냐면 블로그에서 쓰는방법을',
    content: '내용이어쩌구저쩌구 축약해서 글자를 알려주는 내용내용',
    user: { name: '네임' },
  },
];

interface Props {
  menu: string | null;
}

export const BlogWrap = ({ menu }: Props) => {
  return (
    <BlogList>
      <h2>{menu}</h2>
      {data.map((item) => (
        <BlogItem key={item.id}>
          <BlogUserWrap>
            <Image
              src={myImg}
              alt="user profile image"
              width={30}
              height={30}
              priority={false}
            />
            <span>{item.user.name}</span>
          </BlogUserWrap>
          <BlogTitle>{item.title}</BlogTitle>
          <BlogContent>{item.content}</BlogContent>
          <BlogViews>
            <span>조회수 43</span>
          </BlogViews>
        </BlogItem>
      ))}
    </BlogList>
  );
};

import {
  BlogList,
} from '@src/blog/style';
import BlogItem from "@components/BlogItem";


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

interface Props {
  menu: string | null;
}

export const BlogWrap = ({ menu }: Props) => {

  return (
    <BlogList>
      <h2>{menu}</h2>
      {data.map((item) => (
        <BlogItem key={item.id} {...item} menu={menu}/>
      ))}
    </BlogList>
  );
};

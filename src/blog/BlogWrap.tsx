import {
  BlogContent,
  BlogItem, BlogItemBottom,
  BlogList,
  BlogTitle,
  BlogUserWrap,
  BlogViews,
} from '@src/blog/style';
import Image from 'next/image';
import myImg from '@assets/images/myImg.jpeg';
import Link from 'next/link';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {RemoveRedEye, Textsms} from "@mui/icons-material";

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
          <Link href={`/blog/${menu}/${item.id}`}>
            <BlogTitle>{item.title}</BlogTitle>
            <BlogContent>{item.content}</BlogContent>
          </Link>
            <BlogItemBottom>
              <button><MoreHorizIcon/></button>
              <BlogViews>
                <span><Textsms/> 252</span>
                <span><RemoveRedEye/> 22</span>
              </BlogViews>
            </BlogItemBottom>

        </BlogItem>
      ))}
    </BlogList>
  );
};

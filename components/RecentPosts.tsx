import styled from 'styled-components';

export default function RecentPosts() {
  return (
    <RecentPostsWrap>
      <PostTitle>title</PostTitle>
      <PostList>
        <li>내가쓴글</li>
        <li>내가쓴글2</li>
        <li>내가쓴글3</li>
      </PostList>
    </RecentPostsWrap>
  );
}

export const RecentPostsWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 40rem;
  strong {
    margin-top: 2rem;
    font-size: 1.6rem;
  }
`;

export const PostTitle = styled.strong`
  margin-bottom: 1rem;
`;

export const PostList = styled.ol``;

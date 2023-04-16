import styled from 'styled-components';
import { string } from 'prop-types';
import React from 'react';
type PropsType = {
  title: string;
};
export const RecentPosts = ({ title }: PropsType) => {
  return (
    <RecentPostsWrap>
      <PostTitle>{title}</PostTitle>
      <PostList>
        <li>내가쓴글</li>
        <li>내가쓴글2</li>
        <li>내가쓴글3</li>
      </PostList>
    </RecentPostsWrap>
  );
};

export const RecentPostsWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 40rem;
`;

export const PostTitle = styled.strong`
  font-size: 1.6rem;
  border: 1px solid #393e46;
  height: 4rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 2rem;
  width: 26rem;
  margin-bottom: 2rem;
`;

export const PostList = styled.ol`
  margin-left: 2rem;
  li {
    cursor: pointer;
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
    color: #676464;
    &:before {
      content: '#';
      margin-right: 1rem;
    }
  }
`;

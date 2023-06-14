import styled from 'styled-components';
import { media } from '@styles/media';

export const BlogList = styled.div`
  width: 100%;
  max-width: 120rem; /* 뷰포트의 너비가 1200px 이하일 때는 100%의 너비를 가지게 됨 */
  margin: 5rem auto 0 auto;
  padding-left: 8rem;
  h2 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 4rem;
    font-family: '양진체', serif;
  }
  ${media.medium`
    max-width: 100%;
  `}
`;
export const BlogItem = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  border-radius: 0.8rem;
  padding: 2rem;
  border: 1px solid #e9ecef;
`;

export const BlogTitle = styled.h1`
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const BlogContent = styled.p`
  font-size: 1.3rem;
  margin-bottom: 2rem;
  color: #696767;
`;

export const BlogUserWrap = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  img {
    border-radius: 50%;
  }
  span {
    margin-left: 1rem;
    font-size: 1.3rem;
    font-weight: 600;
  }
`;

export const BlogViews = styled.div``;

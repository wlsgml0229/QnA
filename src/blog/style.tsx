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
  box-shadow: rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;
  border-radius: 16px;
  min-height: 20rem;
  padding: 2.4rem 2.4rem 1.6rem;
  border: 1px solid #e9ecef;
  display: flex;
  flex-direction: column;
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

export const BlogItemBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  button {
    box-sizing: border-box;
    padding:0.8rem;
    font-size: 0;
   svg {
     width: 2rem;
     height: 2rem;
    }
  }
`;
export const BlogViews = styled.div`
  display: flex;
  gap: 1.2rem;
  font-size: 0.75rem;
  font-weight: 400;
  color: rgb(145, 159, 171);
  span {
    gap: 0.5rem;
    display: flex;
    align-items: center;
  }
`;

import styled from 'styled-components';

export const BlogList = styled.div`
  padding: 1rem;
  margin-left: 8rem;
  margin-top: 6rem;
`;
export const BlogItem = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  border-bottom: 1px solid #c4c3c3;
`;

export const BlogTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

export const BlogContent = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #696767;
`;

export const BlogUserWrap = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  image {
    border-radius: 10px;
  }
  span {
    margin-left: 1rem;
    font-size: 1.3rem;
    font-weight: 600;
  }
`;

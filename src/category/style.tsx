import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  h1 {
    font-size: 2.3rem;
    margin-bottom: 3rem;
    font-weight: bold;
    font-family: '양진체';
  }
`;

export const CategoryListWrap = styled.section`
  height: 50rem;
  width: 35rem;
  position: relative;
`;

export const CategoryList = styled.ul`
  li {
    border: 1px solid #2222221d;
    background-color: #fff;
    border-radius: 10px;
    margin-top: 1rem;
    display: flex;
    padding: 1.2rem;
    width: 100%;
    display: flex;
    height: 5rem;
    justify-content: center;
    align-items: center;
  }
`;

export const CategoryItem = styled.li`
  font-size: 1.3rem;

  &:hover {
    transform: translateY(-2px);
    transition: 0.2s all;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  strong {
    display: block;
    margin-left: 1rem;
    font-weight: bold;
  }
`;

export const CategoryEditBox = styled.div`
  margin-left: auto;
`;

export const CategoryCreateBtn = styled.button`
  cursor: pointer;
  position: absolute;
  bottom: -2rem;
  width: 5rem;
  height: 5rem;
  left: calc(50% - 2.5rem);
  background-color: #3465ce;
  color: #fff;
  font-size: 4rem;
  line-height: 5rem;
  border-radius: 50%;

  &:hover {
    background-color: #1c5ce7;
  }
`;

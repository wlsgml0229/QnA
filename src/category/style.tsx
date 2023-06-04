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
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: #fff;
  border-radius: 10px;
  height: 50rem;
  width: 35rem;
  padding: 2rem;
  position: relative;
`;

export const CategoryList = styled.ul`
  li {
    display: flex;
    padding: 1.2rem;
    width: 100%;
    display: flex;
  }
`;

export const CategoryItem = styled.li`
  font-size: 1.3rem;

  &:hover {
    background-color: #c1d6ee92;
    border-radius: 3px;
  }

  strong {
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

import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface ContainerProps {
  children: React.ReactNode;
}
const Container = ({ children }: ContainerProps) => {
  return <ContainerBox>{children}</ContainerBox>;
};
export const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 7.2rem 2.4rem 0 30.4rem;
  min-height: 100vh;
  align-items: center;
  overflow-x: hidden;
`;
export default Container;

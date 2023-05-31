import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import useSWR from 'swr';
import { ICategory } from '../types';
import { fetcher } from '@pages/api/fetch';
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';

interface CategoryListType {
  categoryList: ICategory[];
}
export const NavBar = ({ categoryList }: CategoryListType) => {
  const [open, setOpen] = useState(false);
  // const onClickMenu = (e: React.MouseEvent) => {
  //   console.log('클릭' + e);
  // };

  return (
    <NavbarWrap
      open={open}
      onClick={() => {
        setOpen(!open);
      }}
    >
      {categoryList.map((item: ICategory) => (
        <NavItem key={item.categoryId}>
          <Link href={`/blog/${item.categoryId}`}>{item.categoryId}</Link>
        </NavItem>
      ))}
    </NavbarWrap>
  );
};
export const getServerSideProps = () => {
  const { data: categoryList } = useSWR<ICategory>('/category/list', fetcher);
  return { props: { categoryList } };
};

export const NavbarWrap = styled.div<{ open: boolean }>`
  width: 6rem;
  height: 100vh;
  background: white;
  overflow: hidden;
  top: 0;
  left: 0;
  position: fixed;
  padding: 5rem 1rem;
  transition: width 0.3s;
  ${(props) =>
    props.open &&
    css`
      width: 28rem;
      opacity: 0.8;
      padding: 5rem 1.6rem 0;
    `}
  ${(props) =>
    !props.open &&
    css`
      &:hover {
        width: 28rem;
        opacity: 0.8;
        padding: 5rem 1.6rem 0;
      }
    `}
`;

export const NavItem = styled.div`
  width: 100%;
  padding: 1rem 1.2rem;
  font-size: 1.5rem;
  color: #637381;
  a {
    text-decoration: none;
  }
`;

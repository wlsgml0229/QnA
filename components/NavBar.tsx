import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import useSWR from 'swr';
import { ICategory } from '../types';
import { fetcher } from '@pages/api/fetch';
import { userStorage } from '@src/utils/userId';
import SettingsIcon from '@mui/icons-material/Settings';

interface CategoryListType {
  categoryList: ICategory[];
}
export const NavBar = () => {
  const userId = userStorage.get();
  const { data: categoryList, error } = useSWR<CategoryListType>(
    `/category/list/${userId}`,
    fetcher,
  );

  if (error) {
    return;
  }

  return (
    <NavbarWrap>
      {Array.isArray(categoryList)
        ? categoryList.map((item: ICategory) => (
            <NavItem key={item.categoryId}>
              <Link href={`/blog/${item.categoryId}`}>{item.categoryId}</Link>
            </NavItem>
          ))
        : null}
      <NavItem>
        <Link href={'/category'}>
          <SettingsIcon fontSize="large" />
          Category
        </Link>
      </NavItem>
    </NavbarWrap>
  );
};

export const NavbarWrap = styled.div`
  width: 28rem;
  height: 100vh;
  background: white;
  overflow: hidden;
  top: 0;
  left: 0;
  position: fixed;
  padding: 5rem 1rem;
  transition: width 0.3s;
  border-right: 1px solid rgba(145, 158, 171, 0.24);
`;

export const NavItem = styled.div`
  width: 100%;
  padding: 0.8rem 0;
  border-radius: 6px;
  font-size: 1.5rem;
  color: #637381;
  &:hover {
    background: rgba(145, 158, 171, 0.16);
  }
  a {
    padding-left: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    svg {
      margin-right: 1rem;
    }
  }
`;

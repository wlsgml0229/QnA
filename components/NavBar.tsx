import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import useSWR from 'swr';
import { ICategory } from '../types';
import { fetcher } from '@pages/api/fetch';
import { userStorage } from '@src/utils/userId';
import SettingsIcon from '@mui/icons-material/Settings';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { useCategorySWR } from '@pages/api/request/category';

interface CategoryListType {
  categoryList: ICategory[];
}
export const NavBar = () => {
  const userId = userStorage.get();
  const { data: categoryList, error } = useCategorySWR(userId);
  console.log('categoryList', categoryList);
  const [open, setOpen] = useState(false);

  return (
    <NavbarWrap>
      {categoryList?.length
        ? categoryList.map((item: ICategory) => (
            <NavItem key={item.categoryId}>
              <Link
                href={{
                  pathname: `/blog/${item.categoryId}`,
                  query: { categoryName: `${item.categoryName}` },
                }}
              >
                <ClipWrap color={item.color}>
                  <AttachFileIcon fontSize={'large'} />
                </ClipWrap>
                {item.categoryName}
              </Link>
            </NavItem>
          ))
        : null}
      <NavItem>
        <Link href={'/category'}>
          <SettingsIcon fontSize="large" />
          Setting
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
    @keyframes slideUp {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-2px) scale(1.1);
      }
    }
    padding-left: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    &:hover {
      svg {
        animation: slideUp 0.1s linear forwards;
      }
    }
    svg {
      margin-right: 1rem;
    }
  }
`;

export const ClipWrap = styled.span<{ color: String }>`
  svg {
    transform: rotateY(0);
    color: ${(props) => props.color || ''};
  }
`;

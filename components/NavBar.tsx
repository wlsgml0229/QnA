import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  let data = [
    {
      id: '1',
      text: 'java',
    },
    {
      id: '2',
      text: 'javaScript',
    },
    {
      id: '3',
      text: 'SQL',
    },
  ];
  const onClickMenu = (e: React.MouseEvent) => {
    console.log('클릭' + e);
  };
  return (
    <NavbarWrap
      open={open}
      onClick={() => {
        setOpen(!open);
      }}
    >
      {data.map((menu) => (
        <NavItem key={menu.id} onClick={onClickMenu}>
          <Link href={`/main/${menu.text}`}>{menu.text}</Link>
        </NavItem>
      ))}
    </NavbarWrap>
  );
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

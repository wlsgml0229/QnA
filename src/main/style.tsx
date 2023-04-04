import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  display: flex;
  height: 100%;
  img {
    border-radius: 50%;
  }
`;

export const ProfileIntroduce = styled.div`
  margin: 2rem;
  font-size: 1.2rem;
  color: darkgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    color: black;
  }
`;

export const CalendarGraphwrap = styled.div`
  width: 15rem;
  height: 8rem;
`;

export const MainTopWrap = styled.div`
  display: flex;
`;

export const MainContainer = styled.div`
  box-sizing: border-box;
  padding: 1.5rem;
  min-height: calc(100vh - 6.4rem);
`;

export const RecentPostsContainer = styled.div`
  display: flex;
`;

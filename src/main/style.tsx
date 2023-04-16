import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: space-around;
  border-radius: 30px;
  border: 1px solid #c9d2db47;
  padding: 1.6rem;
  height: 60rem;
  img {
    border-radius: 50%;
  }
`;

export const ProfileTextWrap = styled.div`
  margin-top: 3rem;
  width: 30rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const ProfileIntroduce = styled.div`
  font-size: 1.6rem;
  color: darkgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 1.6rem;

  h2 {
    color: black;
    font-weight: bold;
    margin-bottom: 1.6rem;
  }

  span {
    margin-bottom: 1.2rem;
  }
`;

export const CalendarGraphwrap = styled.div`
  width: calc(100% - 8rem);
  height: calc(50vh - 8rem);
  margin-left: 2rem;
`;

export const MainRightWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 4rem;
  width: 100%;
`;

export const MainContainer = styled.div`
  display: flex;
  padding-left: 8rem;
  margin-top: 8rem;
  box-sizing: border-box;
  min-height: calc(100vh - 6.4rem);
`;

export const RecentPostsContainer = styled.div`
  display: flex;
  margin-top: 4rem;
`;

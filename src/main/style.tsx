import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: darkgrey;
  position: relative;
  width: 100%;
  height: 29rem;
  margin-bottom: 2.4rem;
  border-radius: 16px;
  box-shadow: rgba(145, 158, 171, 0.2) 0 0 2px 0,
    rgba(145, 158, 171, 0.12) 0 12px 24px -4px;
  padding: 1.6rem;
  img {
    width: 12.6rem;
    height: auto;
    border-radius: 50%;
  }
`;
export const ProfileUserInfo = styled.div`
  min-height: 12.6rem;
  z-index: 10;
  display: flex;
  position: absolute;
  bottom: 2.4rem;
  left: 2.4rem;
`;

export const ProfileIntroduce = styled.div`
  margin: 2.4rem 0 0 2.4rem;
  font-size: 1.6rem;
  color: darkgray;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  h2 {
    font-size: 2rem;
    color: white;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }
`;

export const ProfileTab = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  background: white;
  min-height: 4.8rem;
  border-radius: 0 0 1.6rem 1.6rem;
  width: 100%;
  z-index: 9;
`;

export const VisitInfoWrapper = styled.section`
  padding: 2.4rem 0;
  display: flex;
  box-shadow: rgba(145, 158, 171, 0.2) 0px 0px 2px 0px,
    rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;
  border-radius: 16px;
  width: 100%;
  div {
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
    text-align: center;
    font-weight: 700;
    line-height: 1.5;
    font-size: 1.5rem;
    &:nth-child(1) {
      border-right: 1px solid #e4e4e4;
    }
  }
`;

export const CalendarGraphwrap = styled.div`
  width: calc(100% - 8rem);
  height: calc(50vh - 8rem);
  display: flex;
  align-items: center;
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

export const CommonButton = styled.button`
  padding: 1rem;
  border: 1px solid#555555;
  width: 100%;
  margin-top: 2rem;
`;

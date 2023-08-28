import { RecentPostsContainer, MainRightWrap } from '@src/main/style';
import { Profile } from '@src/main/components/Profile';
import { CalendarGraph } from './components/CalendarGraph';
import { RecentPosts } from '@components/RecentPosts';
import { userStorage } from '@src/utils/userId';
import Container from '@components/Container';
import { useUserSWR, useWriteDateSWR } from '@pages/api/request/user';

export const MainWrap = () => {
  const userId = userStorage.get() ?? '1';
  //로그인시 user 정보 필요
  const { data: userInfo, error: userInfoError } = useUserSWR(userId);
  const { data: writeDateList, error: writeDateError } = useWriteDateSWR();

  if (userInfoError || writeDateError) {
    return <div>Error fetching user information</div>;
  }

  if (!userInfo || !writeDateList?.length) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Profile {...userInfo} />
      <MainRightWrap>
        <CalendarGraph dateList={writeDateList} />
        <RecentPostsContainer>
          <RecentPosts title={'latest blog post'} />
          <RecentPosts title={'Recent questions'} />
        </RecentPostsContainer>
      </MainRightWrap>
    </Container>
  );
};

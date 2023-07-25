import { RecentPostsContainer, MainRightWrap } from '@src/main/style';
import { Profile } from '@src/main/components/Profile';
import { CalendarGraph } from './components/CalendarGraph';
import { RecentPosts } from '@components/RecentPosts';
import useSWR from 'swr';
import { fetcher } from '@pages/api/fetch';
import { IUser } from 'types';
import { userStorage } from '@src/utils/userId';
import Container from '@components/Container';

export const MainWrap = () => {
  const userId = userStorage.get();
  //로그인시 user 정보 필요
  const { data, error } = useSWR<IUser>(
    userId ? `/user/info/${userId}` : null,
    fetcher,
  );

  if (error) {
    return <div>Error fetching user information</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Profile {...data} />
      <MainRightWrap>
        <CalendarGraph />
        <RecentPostsContainer>
          <RecentPosts title={'latest blog post'} />
          <RecentPosts title={'Recent questions'} />
        </RecentPostsContainer>
      </MainRightWrap>
    </Container>
  );
};

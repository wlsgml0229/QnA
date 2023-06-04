import {
  MainContainer,
  RecentPostsContainer,
  MainRightWrap,
} from '@src/main/style';
import { Profile } from '@src/main/components/Profile';
import { CalendarGraph } from './components/CalendarGraph';
import { RecentPosts } from '@components/RecentPosts';
import useSWR from 'swr';
import { fetcher } from '@pages/api/fetch';
import { IUser } from 'types';

export const MainWrap = () => {
  //로그인시 user 정보 필요
  const { data, error, mutate } = useSWR<IUser>('/user/info/1', fetcher);

  if (error) {
    return <div>Error fetching user information</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <MainContainer>
      <Profile {...data} />
      <MainRightWrap>
        <CalendarGraph />
        <RecentPostsContainer>
          <RecentPosts title={'latest blog post'} />
          <RecentPosts title={'Recent questions'} />
        </RecentPostsContainer>
      </MainRightWrap>
    </MainContainer>
  );
};

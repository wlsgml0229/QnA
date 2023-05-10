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

export const MainWrap = () => {
  const {
    data: userData,
    error,
    mutate,
  } = useSWR('/user/info', fetcher, {
    dedupingInterval: 2000, // 2초
  });
  return (
    <MainContainer>
      <Profile />
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

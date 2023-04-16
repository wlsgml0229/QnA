import {
  MainContainer,
  RecentPostsContainer,
  MainRightWrap,
} from '@src/main/style';
import Profile from '@src/main/components/Profile';
import CalendarGraph from './components/CalendarGraph';
import RecentPosts from '../../components/RecentPosts';

export default function MainWrap() {
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
}

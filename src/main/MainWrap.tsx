import {
  MainTopWrap,
  MainContainer,
  RecentPostsContainer,
} from '@src/main/style';
import Profile from '@src/main/components/Profile';
import CalendarGraph from './components/CalendarGraph';
import RecentPosts from '../../components/RecentPosts';

export default function MainWrap() {
  return (
    <MainContainer>
      <Profile />
      <CalendarGraph />
      <RecentPostsContainer>
        <RecentPosts />
        <RecentPosts />
      </RecentPostsContainer>
    </MainContainer>
  );
}

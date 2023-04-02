import Image from 'next/image';
import { ProfileWrapper, ProfileIntroduce } from '@src/main/style';
// eslint-disable-next-line import/extensions
import myImg from '@assets/images/myImg.jpeg';

function Profile() {
  return (
    <ProfileWrapper>
      <Image src={myImg} alt="user profile image" width={300} height={300} />
      <ProfileIntroduce>
        <h2>userId</h2>
        <span>nickname</span>
        <p>intro 어쩌구 자기소개~~~</p>
      </ProfileIntroduce>
    </ProfileWrapper>
  );
}

export default Profile;

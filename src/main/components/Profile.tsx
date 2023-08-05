import Image from 'next/image';
import {
  ProfileWrapper,
  ProfileIntroduce,
  ProfileUserInfo,
  ProfileTab,
  VisitInfoWrapper,
} from '@src/main/style';
import { IUser } from 'types';

export const Profile = ({
  userId,
  userName,
  nickName,
  profileImgUrl,
}: IUser) => {
  const defaultImgUrl = `https://source.boringavatars.com/beam`;

  return (
    <>
      <ProfileWrapper>
        <ProfileUserInfo>
          {profileImgUrl !== 'defaultImgUrl' ? (
            <Image
              src={profileImgUrl}
              alt="user profile image"
              width={300}
              height={300}
              priority={true}
            />
          ) : (
            <>
              <img src={defaultImgUrl} alt="random default image" />
              {/*<Image*/}
              {/*  src={defaultImgUrl}*/}
              {/*  alt="user profile image"*/}
              {/*  width={300}*/}
              {/*  height={300}*/}
              {/*  priority={true}*/}
              {/*/>*/}
            </>
          )}

          <ProfileIntroduce>
            <h2>{userName}</h2>
            <span>Frontend Developer</span>
          </ProfileIntroduce>
        </ProfileUserInfo>
        <ProfileTab></ProfileTab>
      </ProfileWrapper>
      <VisitInfoWrapper>
        <div>
          <span>방문자</span>
          <span>1944</span>
        </div>
        <div>
          <span>총 방문자</span>
          <span>1944</span>
        </div>
      </VisitInfoWrapper>
    </>
  );
};

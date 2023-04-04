import Image from 'next/image';
import { ProfileWrapper, ProfileIntroduce } from '@src/main/style';
import myImg from '@assets/images/myImg.jpeg';
import { useState } from 'react';

export default function Profile() {
  const [edit, setEdit] = useState(false);
  const onClickEdit = () => {
    setEdit((edit) => !edit);
  };
  return (
    <ProfileWrapper>
      <Image src={myImg} alt="user profile image" width={300} height={300} />
      {edit ? (
        <>수정중</>
      ) : (
        <ProfileIntroduce>
          <h2>userId</h2>
          <span>nickname</span>
          <p>intro 어쩌구 자기소개~~~</p>
        </ProfileIntroduce>
      )}
      <button onClick={onClickEdit}>Edit</button>
    </ProfileWrapper>
  );
}

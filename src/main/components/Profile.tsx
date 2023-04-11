import Image from 'next/image';
import {
  ProfileWrapper,
  ProfileIntroduce,
  ProfileTextWrap,
} from '@src/main/style';
import myImg from '@assets/images/myImg.jpeg';
import { useState } from 'react';
import { TextField } from '@mui/material';

export default function Profile() {
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState('');
  const onClickEdit = () => {
    setEdit((edit) => !edit);
  };
  return (
    <ProfileWrapper>
      <Image
        src={myImg}
        alt="user profile image"
        width={300}
        height={300}
        priority={false}
      />
      <ProfileTextWrap>
        {edit ? (
          <>
            <h2>userId</h2>
            <TextField
              id="standard-basic"
              label="Standard"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Standard"
              variant="standard"
            />
          </>
        ) : (
          <ProfileIntroduce>
            <h2>userId</h2>
            <span>nickname</span>
            <p>intro 어쩌구 자기소개~~~</p>
          </ProfileIntroduce>
        )}
        <button onClick={onClickEdit}>Edit</button>
      </ProfileTextWrap>
    </ProfileWrapper>
  );
}

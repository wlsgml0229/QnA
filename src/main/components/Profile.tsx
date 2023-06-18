import Image from 'next/image';
import {
  ProfileWrapper,
  ProfileIntroduce,
  ProfileTextWrap,
  CommonButton,
} from '@src/main/style';
import { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import useSWR, { mutate } from 'swr';
import { editUserInfo } from '@pages/api/fetch';
import { IUser } from 'types';

export const Profile = ({
  userId,
  userName,
  nickName,
  profileImgUrl,
}: IUser) => {
  console.log('userId' + userId);

  const [edit, setEdit] = useState(false);
  const [editNickName, setEditNickName] = useState(nickName ?? '');
  const defaultImgUrl = `https://source.boringavatars.com/beam`;

  const onClickEdit = () => {
    // mutate();
    setEdit((edit) => !edit);
  };
  return (
    <ProfileWrapper>
      {profileImgUrl !== 'defaultImgUrl' ? (
        <>
          <span>mm</span>
          <Image
            src={profileImgUrl}
            alt="user profile image"
            width={300}
            height={300}
            priority={true}
          />
        </>
      ) : (
        <>
          asdf
          <img src={defaultImgUrl} alt="sss" />
        </>
        // <Image
        //   src={defaultImgUrl}
        //   alt="user profile image"
        //   width={300}
        //   height={300}
        //   priority={true}
        // />
      )}
      <ProfileTextWrap>
        {edit ? (
          <>
            <h2>{userName}</h2>
            <TextField
              fullWidth
              id="standard-basic"
              label="nickName"
              variant="standard"
              value={editNickName}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setEditNickName(event.target.value);
              }}
            />
          </>
        ) : (
          <ProfileIntroduce>
            <h2>{userName}</h2>
            <span>{nickName}</span>
            <p>intro 어쩌구 자기소개~~~</p>
          </ProfileIntroduce>
        )}
        <CommonButton onClick={onClickEdit}>Edit</CommonButton>
      </ProfileTextWrap>
    </ProfileWrapper>
  );
};

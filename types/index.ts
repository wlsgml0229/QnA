// types/index.ts

// import { Mutator } from 'swr';
import { Mutator } from 'swr/_internal';

interface Mutate {
  mutate: Mutator<string | null>;
}

export interface IUser {
  userId: string;
  userName: string;
  nickName: string | null;
  profileImgUrl: string;
}
export interface MainProps {
  id: number;
  user: Object;
  postList: Array<IBlog>;
  qnaList: Array<IQna>;
}

export interface IBlog {
  id: string;
  boardTitle: string;
  contents: string;
  user: IUser;
  categoryId: string | string[] | undefined;
}

export interface IQna {
  id: string;
  boardTitle: string;
  contents: string;
}

export interface ICategory {
  categoryId: string;
  categoryName: string;
  color: string;
}

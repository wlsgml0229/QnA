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
  postList: Array<IPost>;
  qnaList: Array<IPost>;
}

export interface IPost {
  id: number;
  title: string;
  content: string;
}

export interface ICategory {
  categoryId: number;
  categoryname: string;
}

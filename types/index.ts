// types/index.ts

export interface IUser {
  userId: string;
  userName: string;
  nickName: string | null;
  profileImgUrl: string;
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

export interface IWriteDate {
  date: string;
  count: number;
}

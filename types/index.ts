// types/index.ts

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

import { RequestHandler, rest } from 'msw';

export const getBlog: RequestHandler[] = [
  rest.get('http://3.39.11.231:8080/blog/list/:categoryId', (req, res, ctx) => {
    return res(
      ctx.json({
        data: [
          {
            id: 'id384',
            title: '제목 1',
            contents: '첫 번째 내용입니다.',
            user: {
              userId: 1,
              userName: 'John Doe',
              profileImgUrl: '',
              intro: '안녕하세요',
            },
          },
          {
            id: 'id562',
            title: '제목 2',
            contents: '두 번째 내용을 담은 데이터입니다.',
            user: {
              userId: 1,
              userName: 'John Doe',
              profileImgUrl: '',
              intro: '안녕하세요',
            },
          },
          {
            id: 'id789',
            title: '제목 3',
            contents: '세 번째 데이터의 내용입니다.',
            user: {
              userId: 1,
              userName: 'John Doe',
              profileImgUrl: '',
              intro: '안녕하세요',
            },
          },
          {
            id: 'id210',
            title: '제목 4',
            contents: '네 번째 내용이 들어가는 곳입니다.',
            user: {
              userId: 1,
              userName: 'John Doe',
              profileImgUrl: '',
              intro: '안녕하세요',
            },
          },
          {
            id: 'id973',
            title: '제목 5',
            contents: '다섯 번째 데이터 내용입니다.',
            user: {
              userId: 1,
              userName: 'John Doe',
              profileImgUrl: '',
              intro: '안녕하세요',
            },
          },
        ],
      }),
    );
  }),
];

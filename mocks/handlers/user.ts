import { RequestHandler, rest } from 'msw';
import BASE_URL from '@pages/api/client';

export const getUser: RequestHandler[] = [
  rest.get(`${BASE_URL}/user/info/:userId`, (req, res, ctx) => {
    return res(
      ctx.json({
        data: {
          intro: '테스터입니당',
          nickName: 'jinimi',
          profileImgUrl: 'defaultImgUrl',
          userId: 2,
          userName: '김진희',
        },
      }),
    );
  }),
];
export const getDate: RequestHandler[] = [
  rest.get(`${BASE_URL}/user/info/write-date`, (req, res, ctx) => {
    return res(
      ctx.json({
        data: [
          {
            date: '2023-08-01',
            count: 24,
          },
          {
            date: '2023-08-02',
            count: 31,
          },
          {
            date: '2023-08-03',
            count: 18,
          },
          {
            date: '2023-08-04',
            count: 42,
          },
          {
            date: '2023-08-05',
            count: 29,
          },
        ],
      }),
    );
  }),
];

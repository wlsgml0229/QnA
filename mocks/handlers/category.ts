import { RequestHandler, rest } from 'msw';

export const getCategory: RequestHandler[] = [
  rest.get('http://3.39.11.231:8080/category/list/:userId', (req, res, ctx) => {
    return res(
      ctx.json({
        data: [
          { categoryId: '1', categoryName: 'Category 1', color: 'blue' },
          { categoryId: '2', categoryName: 'Category 2', color: 'pink' },
        ],
      }),
    );
  }),
];

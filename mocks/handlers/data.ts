import {RequestHandler, rest} from 'msw'

// [Get] fruits 서버 요청 시 [ '사과', '바나나' ]를 응답한다.
export const getCategory: RequestHandler = rest.get('/category/list/:userId', (req, res, ctx) => {
    const { userId } = req.params;
    // 가짜 카테고리 리스트를 생성하여 반환
    return res(
        ctx.status(200),
        ctx.json({
            categoryList: [
                { categoryId: '1', categoryName: 'Category 1' },
                { categoryId: '2', categoryName: 'Category 2' },
            ],
        })
    );
});
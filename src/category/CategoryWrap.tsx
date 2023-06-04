import {
  CategoryContainer,
  CategoryListWrap,
  CategoryList,
  CategoryEditBox,
  CategoryItem,
  CategoryCreateBtn,
} from './style';

export const CategoryWrap = () => {
  return (
    <CategoryContainer>
      <h1>Category</h1>
      <CategoryListWrap>
        <CategoryList>
          <CategoryItem>
            <strong>java</strong>
            <CategoryEditBox>
              <span>수정</span>
              <span>삭제</span>
            </CategoryEditBox>
          </CategoryItem>
          <CategoryItem>
            <strong>javaScript</strong>
            <CategoryEditBox>
              <span>수정</span>
              <span>삭제</span>
            </CategoryEditBox>
          </CategoryItem>
        </CategoryList>
        <CategoryCreateBtn>+</CategoryCreateBtn>
      </CategoryListWrap>
    </CategoryContainer>
  );
};

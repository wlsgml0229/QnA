import { useState } from 'react';
import {
  CategoryContainer,
  CategoryListWrap,
  CategoryList,
  CategoryEditBox,
  CategoryItem,
  CategoryCreateBtn,
} from './style';
import { CircleColor } from '@components/CircleColor';

export const CategoryWrap = () => {
  const [category, setCategory] = useState('');
  const [add, setAdd] = useState(false);
  const onClickHandler = () => {
      setAdd(true);
  }
  const [editCategory, setEditCategory] = useState(false);
  const onClickCategoryEdit = () => {
    setEditCategory(true);
  }

  return (
    <CategoryContainer>
      <h1>Category</h1>
      <CategoryListWrap>
        <CategoryList>
          <CategoryItem>
            <CircleColor color={'pink'} edit={editCategory}/>
            <strong>java</strong>
            <CategoryEditBox>
              <span onClick={onClickCategoryEdit}>수정</span>
              <span>삭제</span>
            </CategoryEditBox>
          </CategoryItem>
          <CategoryItem>
             <CircleColor color={'pink'} edit={editCategory} />
            <strong>javaScript</strong>
            <CategoryEditBox>
              <span>수정</span>
              <span>삭제</span>
            </CategoryEditBox>
          </CategoryItem>
          {add && (
       <>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)} />
          <button onClick={() => setAdd(false)}>취소</button>
          </>
    
    )}
        </CategoryList>
        <CategoryCreateBtn onClick={onClickHandler}>+</CategoryCreateBtn>
      </CategoryListWrap>
    </CategoryContainer>
  );
};

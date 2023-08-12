import React, { useState } from 'react';
import {
  CategoryContainer,
  CategoryListWrap,
  CategoryList,
  CategoryEditBox,
  CategoryItem,
  CategoryCreateBtn,
} from './style';
import { CircleColor } from '@components/CircleColor';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import customAxios from '@pages/api/axios';
import Container from '@components/Container';

export const CategoryWrap = () => {
  const [category, setCategory] = useState('');
  const [add, setAdd] = useState(false);
  const onClickHandler = () => {
    setAdd(true);
  };
  const [editCategory, setEditCategory] = useState(false);
  const onClickCategoryEdit = () => {
    setEditCategory(true);
  };
  const onDeleteCategory = (categoryId: string) => {
    customAxios
      .delete(`/category/list/${categoryId}`, {})
      .then(() => {
        console.log('SUCCESS');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    let params = {
      categoryName: category,
      color: 'pink',
    };
    return customAxios.post('/category/create', params);
  };

  return (
    <Container>
      <CategoryContainer>
        <h1>Category</h1>
        <CategoryListWrap>
          <CategoryList>
            <CategoryItem>
              <CircleColor color={'pink'} edit={editCategory} />
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
                <ModeEditOutlineIcon
                  onClick={onClickCategoryEdit}
                ></ModeEditOutlineIcon>
                <DeleteIcon onClick={() => onDeleteCategory('2')}></DeleteIcon>
              </CategoryEditBox>
            </CategoryItem>
            {add && (
              <CategoryItem>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  <button type="submit">생성</button>
                </form>
              </CategoryItem>
            )}
          </CategoryList>
          <CategoryCreateBtn onClick={onClickHandler}>+</CategoryCreateBtn>
        </CategoryListWrap>
      </CategoryContainer>
    </Container>
  );
};
function useSWR<T>(arg0: string, fetcher: any): { data: any } {
  throw new Error('Function not implemented.');
}

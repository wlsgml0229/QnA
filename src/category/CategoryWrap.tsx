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
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import customAxios from '@pages/api/axios';

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
    customAxios.delete(`/category/list/${categoryId}`,{}).then(() => {
     console.log('SUCCESS')
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
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
              <ModeEditOutlineIcon onClick={onClickCategoryEdit}></ModeEditOutlineIcon>
              <DeleteIcon onClick={() => onDeleteCategory('2')}></DeleteIcon>
            </CategoryEditBox>
          </CategoryItem>
          {add && (
            <CategoryItem>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <button onClick={() => setAdd(false)}>취소</button>
            </CategoryItem>
          )}
        </CategoryList>
        <CategoryCreateBtn onClick={onClickHandler}>+</CategoryCreateBtn>
      </CategoryListWrap>
    </CategoryContainer>
  );
};
function useSWR<T>(arg0: string, fetcher: any): { data: any; } {
  throw new Error('Function not implemented.');
}


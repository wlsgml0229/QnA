import React, { ReactNode, useState } from 'react';
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
import BaseTable from '@components/BaseTable';
import { ICategory } from '../../types';
import { fetcher } from '@pages/api/fetch';
import { userStorage } from '@src/utils/userId';
import useSWR from 'swr';
import { useCategorySWR } from '@pages/api/request/category';
import EditDeleteBtnGroup from '@components/EditDeleteBtnGroup';
interface Column<T> {
  key: keyof T;
  label: string;
  render?: (value: T[keyof T]) => ReactNode;
}
interface Row {
  categoryName: string;
  color: string;
  count: Number;
  fieldEdit: ReactNode;
}
const fields: Column<Row>[] = [
  {
    key: 'categoryName',
    label: '필드 명',
  },
  {
    key: 'color',
    label: '색상',
    render: (value) => <CircleColor color={value.color} edit={false} />,
  },
  { key: 'count', label: '게시글 수' },
  {
    key: 'fieldEdit',
    label: '수정 / 삭제',
    render: (value) => <EditDeleteBtnGroup value={value} />,
  },
];

export const CategoryWrap = () => {
  const userId = userStorage.get() ?? '1';
  const { data: categoryList, error } = useCategorySWR(userId);

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
        <h1>Setting</h1>
        <BaseTable fields={fields} items={categoryList} />
      </CategoryContainer>
    </Container>
  );
};

import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Field<T> {
  key: string;
  label: string;
  render?: (value: T[keyof T]) => ReactNode;
  thStyle?: React.CSSProperties;
}

interface Item {
  [key: string]: any;
}

interface BaseTableProps {
  fields: Field<Item>[];
  items: Item[];
}

const BaseTable: React.FC<BaseTableProps> = ({ items, fields }) => {
  return (
    <TableWrap>
      <Table>
        <colgroup>
          {fields.map((field, idx) => (
            <col key={idx} style={field.thStyle} />
          ))}
        </colgroup>
        <thead>
          <tr>
            {fields.map((field, idx) => (
              <th key={idx} scope="col">
                {field.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items?.length
            ? items.map((item, index) => (
                <tr key={index}>
                  {fields.map(({ key, render }) => (
                    <td key={key}>{render ? render(item[key]) : item[key]}</td>
                  ))}
                </tr>
              ))
            : null}
        </tbody>
      </Table>
    </TableWrap>
  );
};

export default BaseTable;

export const TableWrap = styled.div`
  height: auto;
  overflow: scroll hidden;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  min-width: 960px;
  vertical-align: middle;

  thead {
    th {
      padding: 1.6rem;
      background-color: rgb(244, 246, 248);
      font-size: 14px;
      color: rgb(99, 115, 129);
      text-align: left;
    }
  }

  tbody {
    tr {
      &:hover {
        td {
          background: rgba(214, 222, 222, 0.25);
        }
      }
    }

    td {
      font-weight: 400;
      border-bottom: 1px dashed rgb(241, 243, 244);
      text-align: left;
      padding: 16px;
      color: rgb(33, 43, 54);
      font-size: 1.2rem;
    }
  }
`;

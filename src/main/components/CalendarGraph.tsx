import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { CalendarGraphwrap } from '@src/main/style';
import { IWriteDate } from '../../../types';
import { useState } from 'react';

interface CalendarGraphProps {
  dateList: IWriteDate[];
}

export const CalendarGraph = ({ dateList }: CalendarGraphProps) => {
  const today = new Date();
  const oneYearAgo = new Date(today);
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  const currentDate = today.toISOString().slice(0, 10);
  const oneYearAgoDate = oneYearAgo.toISOString().slice(0, 10);

  return (
    <CalendarGraphwrap>
      <CalendarHeatmap
        startDate={new Date(oneYearAgoDate)}
        endDate={new Date(currentDate)}
        values={dateList}
        classForValue={(value) => {
          if (!value) {
            return 'color-empty';
          }
          return `color-scale-${value.count}`;
        }}
      />
    </CalendarGraphwrap>
  );
};

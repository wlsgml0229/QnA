import styled from 'styled-components';
import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';

interface PropsType {
  size?: string;
  color: string;
  edit:  boolean;
}

export const CircleColor = ({ size = '1rem', color, edit }: PropsType) => {
  const [editColor, setEditColor] = useState(false);
  const [pickColor, setPickColor] = useState(color);
  const onClickCircle = ()  => {
    if(edit) {
      setEditColor(editColor =>!editColor);
    }
  }

  return (
   <> 
  <Circle size={size} color={color} onClick={onClickCircle}/>
  {edit&& editColor && <HexColorPicker color={pickColor} onChange={setPickColor} />}
  </>
  );
};

export const Circle = styled.div<{size:string}>`
  width:  ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;